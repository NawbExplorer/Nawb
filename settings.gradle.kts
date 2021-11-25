rootProject.name = "Nawb"

pluginManagement {
  repositories {
    gradlePluginPortal()
    mavenCentral()
    google()
  }
}

val REACT_NATIVE_DIR = "$rootDir/node_modules/react-native"
//val RNCodegenAndroidPath = "$REACT_NATIVE_DIR/packages/react-native-codegen/android"
var RNGradlePlugin =  "$REACT_NATIVE_DIR/packages/react-native-gradle-plugin"

include(":NawbAndroid")
project(":NawbAndroid").projectDir = file("$rootDir/android")

// react native for android
include(":ReactAndroid")
project(":ReactAndroid").projectDir = file("$REACT_NATIVE_DIR/ReactAndroid")

includeBuild(RNGradlePlugin)

//include(":react-native-codegen:android")
//project(":react-native-codegen:android").projectDir = file(RNCodegenAndroidPath)
//
//includeBuild(RNCodegenAndroidPath)

//apply(from = file("$rootDir/node_modules/@react-native-community/cli-platform-android/native_modules.gradle"))
//
//val applyNativeModulesSettingsGradle: Closure<Any> by extra
//applyNativeModulesSettingsGradle(settings)

//
////fun demo(vararg demo: Any): Unit{
////  println(demo[10])
////}
////
////demo(1,2,3,4)
//
//
////val applyNativeModulesSettingsGradle by ext
//
//
////applyNativeModulesSettingsGradle(settings)
//
//

//open class Demo {
//  fun say() {
//    println("demo")
//  }
//
//  operator fun getValue(thisRef: Any?, property: KProperty<*>): String {
//    return "$thisRef, thank you for delegating '${property.name}' to me!"
//  }
//
//  operator fun setValue(thisRef: Any?, property: KProperty<*>, value: String) {
//    println("$value has been assigned to '${property.name}' in $thisRef.")
//  }
//}
//
//var demo = Demo()
//
//var d: String by demo {
//  "demo"
//}
//
//fun demo(function: () -> String): ReadWriteProperty<Settings_gradle, String> {
//  TODO("Not yet implemented")
//}
