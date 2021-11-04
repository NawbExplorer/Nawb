import java.util.Properties
import java.io.FileInputStream
import com.android.build.OutputFile
import groovy.lang.Closure

plugins {
  id("com.android.application")
}

//import com.android.build.OutputFile
//import ex

var react: Map<String, Any> by ext

react = mapOf(
  Pair("root", "../"),
  Pair("enableHermes", true)
)

val FLIPPER_VERSION:String by project;
val GLIDE_VERSION:String by project;


val abiCodes = mapOf(
  "armeabi-v7a" to 1,
  "x86" to 2,
  "arm64-v8a" to 3,
  "x86_64" to 4
)

apply {
  //  config react-native
  from(file("$rootDir/scripts/gradle/react-native.gradle"))
}

android {
  defaultConfig {
    buildToolsVersion = "30.0.2"
    applicationId("com.deskbtm.nawb")
    minSdkVersion(21)
    compileSdkVersion(30)
    targetSdkVersion(targetSdkVersion = 30)
    versionCode(1)
    versionName("1.0")
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
      signingConfig = signingConfigs.getByName("debug")
    }

    getByName("release") {
      minifyEnabled(true)
      signingConfig = signingConfigs.getByName("release")
      proguardFiles = mutableListOf(
        file(getDefaultProguardFile("proguard-android.txt")),
        file("proguard-rules.pro")
      )
    }
  }
  
  // 打包不同abi
  androidComponents {
    onVariants { variant ->
      variant.outputs.forEach { output ->
        val name = output.filters.find { it.identifier == OutputFile.ABI }?.identifier
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
  implementation(":ReactAndroid")
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


  val hermesPath = "${rootDir}/node_modules/hermes-engine/android"

  debugImplementation(files("$hermesPath/hermes-debug.aar"))
  releaseImplementation(files("$hermesPath/hermes-release.aar"))
}

//apply(from = file("$rootDir/node_modules/@react-native-community/cli-platform-android/native_modules.gradle"))
//val applyNativeModulesAppBuildGradle: Closure<Any> by ext
//applyNativeModulesAppBuildGradle(project)