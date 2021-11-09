rootProject.name = "nawb"

pluginManagement {
  repositories {
    gradlePluginPortal()
    mavenCentral()
    google()
  }
}





include("NawbAndroid")
project(":NawbAndroid").projectDir = file("$rootDir/android")



// react native for android
//include(":ReactAndroid")
//project(":ReactAndroid").projectDir = file("$rootDir/third_party/react-native/ReactAndroid")


//val RNCodegenAndroidPath = "$rootDir/third_party/react-native/packages/react-native-codegen/android"
//include(":react-native-codegen:android")
//project(":react-native-codegen:android").projectDir = file(RNCodegenAndroidPath)

//includeBuild("$rootDir/third_party/react-native/packages/react-native-gradle-plugin")

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