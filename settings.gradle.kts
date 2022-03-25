/**
 * Nawb (c) by WangHan
 */

rootProject.name = "Nawb"

pluginManagement {
  repositories {
    gradlePluginPortal()
    mavenCentral()
    google()
  }
}

val REACT_NATIVE_DIR = "$rootDir/third_party/react-native"

// Android
include(":NawbAndroid")
project(":NawbAndroid").projectDir = File("$rootDir/android/mobile")

// Android Wear
//include(":NawbAndroidWear")
//project(":NawbAndroidWear").projectDir = File("$rootDir/android/wear")

// Embedded Framework
//include(":NawbEmbedded")
//project(":NawbEmbedded").projectDir = File("$rootDir/packages/embedded/android")

include(":ReactAndroid")
project(":ReactAndroid").projectDir = file("$REACT_NATIVE_DIR/ReactAndroid")

include(":ReactAndroid:hermes-engine")
project(":ReactAndroid:hermes-engine").projectDir = file("$REACT_NATIVE_DIR/ReactAndroid/hermes-engine")

include(":packages:react-native-codegen:android")
project(":packages:react-native-codegen:android").projectDir = File("$REACT_NATIVE_DIR/packages/react-native-codegen/android")

includeBuild("$REACT_NATIVE_DIR/packages/react-native-gradle-plugin")