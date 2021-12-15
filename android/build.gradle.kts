/**
 * Nawb (c) by Nawbc
 *
 * Nawb is licensed under a
 * Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 *
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-nc-nd/4.0/>.
 */

import com.android.build.api.variant.FilterConfiguration.FilterType.ABI
import java.io.FileInputStream
import java.util.*

plugins {
  id("com.android.application")
  id("com.facebook.react")
}

val REACT_NATIVE_DIR = "$rootDir/third_party/react-native"
val HERMES_DIR = "$REACT_NATIVE_DIR/node_modules/hermes-engine"
val CODEGEN_DIR = "$REACT_NATIVE_DIR/packages/react-native-codegen"
val FLIPPER_VERSION: String by project;

val abiCodesMap = mapOf(
  "arm64-v8a" to 1,
  "x86_64" to 2,
  "armeabi-v7a" to 3,
  "x86" to 4
)

fun getArchitectures(): List<String> {
  val value = project.getProperties().get("NAWB_FAVOUR_ARCHITECTURES") as String?
  return value?.split(",") ?: abiCodesMap.keys.toList()
}

react {
//  println
  applyAppPlugin.set(true)
  entryFile.set(file("$rootDir/index.js"))
  reactRoot.set(file(REACT_NATIVE_DIR))
  jsRootDir.set(file(rootDir))
  enableHermes.set(true)
  codegenDir.set(file(CODEGEN_DIR))
  useJavaGenerator.set(false)
  hermesCommand.set("$HERMES_DIR/%OS-BIN%/hermesc")
  cliPath.set("$REACT_NATIVE_DIR/cli.js")
}

//project.extensions.create("nawb", )


android {

  defaultConfig {
    buildToolsVersion = "30.0.2"
    minSdk = 21
    targetSdk = 29
    compileSdk = 30
    versionCode = 1
    versionName = "1.0"
    applicationId = "com.deskbtm.nawb"
  }

  splits {
    abi {
      reset()
      isEnable = true
      isUniversalApk = false
      include(*getArchitectures().toTypedArray())
    }
  }

  signingConfigs {

    getByName("debug") {
      storeFile = file("debug.keystore")
      storePassword = "android"
      keyAlias = "androiddebugkey"
      keyPassword = "android"
    }

    create("release") {
      val props = Properties()
      val keyFile = file("${projectDir}/key.properties")

      if (keyFile.exists()) {
        props.load(FileInputStream(keyFile))
      }

      storeFile = file(props.getProperty("storeFile"))
      storePassword = props.getProperty("storePassword")
      keyAlias = props.getProperty("keyAlias")
      keyPassword = props.getProperty("keyPassword")
    }
  }

  buildTypes {
    getByName("debug") {
      signingConfig = signingConfigs.findByName("debug")
    }

    getByName("release") {
      isMinifyEnabled = true
      signingConfig = signingConfigs.findByName("release")
      proguardFiles(
        getDefaultProguardFile("proguard-android.txt"),
        "proguard-rules.pro"
      )
    }
  }

  packagingOptions {
    jniLibs.pickFirsts.add("**/libhermes.so")
  }

  compileOptions {
    sourceCompatibility(JavaVersion.VERSION_11)
    targetCompatibility(JavaVersion.VERSION_11)
  }
}

// For each APK output variant, override versionCode with a combination of
// abiCodesMap * 1000 + variant.versionCode
androidComponents {
  onVariants { variant ->
    variant.outputs.forEach { output ->
      val name = output.filters.find { it.filterType == ABI }?.identifier
      val baseAbiCode = abiCodesMap[name]
      if (baseAbiCode != null) {
        output.versionCode.set(baseAbiCode * 1000 + (output.versionCode.get() ?: 0))
      }
    }
  }
}

dependencies {
  implementation(fileTree(mapOf("dir" to "libs", "include" to listOf("*.jar"))))
  api(project(":NawbEmbedded"))

  implementation("androidx.swiperefreshlayout:swiperefreshlayout:1.0.0")
  debugImplementation("com.facebook.flipper:flipper:${FLIPPER_VERSION}") {
    exclude(group = "com.facebook.fbjni")
  }

  debugImplementation("com.facebook.flipper:flipper-network-plugin:${FLIPPER_VERSION}") {
    exclude(group = "com.facebook.flipper")
    exclude(group = "com.squareup.okhttp3", module = "okhttp")
  }

  debugImplementation("com.facebook.flipper:flipper-fresco-plugin:${FLIPPER_VERSION}") {
    exclude(group = "com.facebook.flipper")
  }

  debugImplementation(files("$HERMES_DIR/android/hermes-debug.aar"))
  releaseImplementation(files("$HERMES_DIR/android/hermes-release.aar"))
}

//apply(from = file("$rootDir/node_modules/@react-native-community/cli-platform-android/native_modules.gradle"))
//val applyNativeModulesAppBuildGradle: Closure<Any> by ext
//applyNativeModulesAppBuildGradle(project)