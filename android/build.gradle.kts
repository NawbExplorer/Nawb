import java.util.Properties
import java.io.FileInputStream
import com.android.build.api.variant.FilterConfiguration.FilterType;
import groovy.lang.Closure

plugins {
  id("com.android.application")
}


//var react: Map<String, Any> by ext
//
//react = mapOf(
//  Pair("root", "../"),
//  Pair("enableHermes", true)
//)

val FLIPPER_VERSION:String by project;
//val GLIDE_VERSION:String by project;


val abiCodes = mapOf(
  "armeabi-v7a" to 1,
  "x86" to 2,
  "arm64-v8a" to 3,
  "x86_64" to 4
)

//apply {
//  //  config react-native
//  from(file("$rootDir/scripts/gradle/react.gradle"))
//}

android {
  defaultConfig {
    buildToolsVersion = "30.0.2"
    minSdk = 21
    targetSdk = 29
    versionCode = 1
    versionName = "1.0"
    compileSdk = 30
    applicationId = "com.deskbtm.nawb"
  }

  splits {
    abi {
      reset()
      isEnable = true
      isUniversalApk = false
      include("armeabi-v7a", "x86", "arm64-v8a", "x86_64")
    }
  }

  signingConfigs {

    getByName("debug") {
      storeFile = file("debug.keystore")
      storePassword = "password"
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
  
  // 打包不同abi
  androidComponents {
    onVariants { variant ->
      variant.outputs.forEach { output ->
        val name = output.filters.find { it.identifier == FilterType.ABI.name }?.identifier
        val baseAbiCode = abiCodes[name]
        if (baseAbiCode != null) {
          output.versionCode.set(baseAbiCode * 1000 + (output.versionCode.get() ?: 0))
        }
      }
    }
  }
}


dependencies {
  implementation(fileTree(mapOf("dir" to "libs", "include" to listOf("*.jar"))))
  implementation(project(":ReactAndroid"))
  
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
  
  val hermesPath = "${rootDir}/node_modules/react-native/node_modules/hermes-engine/android"

  debugImplementation(files("$hermesPath/hermes-debug.aar"))
  releaseImplementation(files("$hermesPath/hermes-release.aar"))
}

//apply(from = file("$rootDir/node_modules/@react-native-community/cli-platform-android/native_modules.gradle"))
//val applyNativeModulesAppBuildGradle: Closure<Any> by ext
//applyNativeModulesAppBuildGradle(project)