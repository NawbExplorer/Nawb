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
include(":NawbAndroidWear")
project(":NawbAndroidWear").projectDir = File("$rootDir/android/wear")

// Embedded Framework
include(":NawbEmbedded")
project(":NawbEmbedded").projectDir = File("$rootDir/packages/embedded/android")

// React Native
includeBuild("$REACT_NATIVE_DIR")