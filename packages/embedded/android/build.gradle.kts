/**
 * Nawb (c) by WangHan
 */

import com.android.build.api.variant.FilterConfiguration.FilterType.ABI
import java.io.FileInputStream
import java.util.*

plugins {
  id("com.android.library")
  id("maven-publish")
  id("com.facebook.react")
  kotlin("android")
}

val REACT_NATIVE_DIR = "$rootDir/third_party/react-native"
//val HERMES_DIR = "$REACT_NATIVE_DIR/node_modules/hermes-engine"
val CODEGEN_DIR = "$REACT_NATIVE_DIR/packages/react-native-codegen"

//react {
//  libraryName.set("nawb-embedded")
//  jsRootDir.set(file(rootDir))
////  codegenDir.set(file(CODEGEN_DIR))
//  useJavaGenerator.set(false)
//}

react {
  libraryName.set("nawb-embedded")
  root.set(file(rootDir))
  reactNativeDir.set(file(REACT_NATIVE_DIR))
  codegenDir.set(file("$REACT_NATIVE_DIR/packages/react-native-codegen"))
  applyAppPlugin.set(true)
  enableHermes.set(true)
//  entryFile.set(file("$rootDir/index.js"))
//  jsRootDir.set(file(rootDir))
//  enableHermes.set(true)
//  useJavaGenerator.set(false)
//  hermesCommand.set("$HERMES_DIR/%OS-BIN%/hermesc")
//  cliPath.set("$REACT_NATIVE_DIR/cli.js")
}

android {
  defaultConfig {
    buildToolsVersion = "30.0.2"
    compileSdk = 30
    minSdk = 21
    targetSdk = 29
  }

  compileOptions {
    sourceCompatibility(JavaVersion.VERSION_11)
    targetCompatibility(JavaVersion.VERSION_11)
  }
}

dependencies {
  implementation(fileTree(mapOf("dir" to "libs", "include" to listOf("*.jar"))))
  api(project(":ReactAndroid"))
}

publishing {
  publications {
    val GROUP_ID = "com.deskbtm.nawb"
    val ARTIFACT_ID = "embedded"
    val react = project(":ReactAndroid")

    repositories {
      maven {
        url = uri("$projectDir/repo")
      }
    }

    create<MavenPublication>("debugNawbEmbedded") {
      // Applies the component for the debug build .
      from(components.findByName("debug"))
      artifact("${react.buildDir}/outputs/aar/${react.name}-debug.aar")

      artifactId = "$ARTIFACT_ID"
      groupId = "$GROUP_ID-debug"
      version = "10000"
    }

    create<MavenPublication>("releaseNawbEmbedded") {
      // Applies the component for the release build variant.
      from(components.findByName("release"))
      artifact("${react.buildDir}/outputs/aar/${react.name}-release.aar")

      artifactId = ARTIFACT_ID
      groupId = GROUP_ID
      version = "10000"

      pom {
        name.set("NawbEmbedded")
        description.set("Nawb Embedded Framework for Android ")
        url.set("")

        developers {
          developer {
            id.set("Nawbc")
            name.set("HanWang")
          }
        }

        licenses {
          license {
            name.set("CC-BY-NC-ND-4.0")
            url.set("https://github.com/facebook/react-native/blob/HEAD/LICENSE")
            distribution.set("repo")
          }
        }
      }
    }
  }
}