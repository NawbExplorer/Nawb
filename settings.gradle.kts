//  import groovy.lang.Closure
rootProject.name = "nawb"

include("android")

apply {
//  from(file("$rootDir/node_modules/@react-native-community/cli-platform-android/native_modules.gradle"))

//  val applyNativeModulesSettingsGradle: Closure<Any> by ext
//  applyNativeModulesSettingsGradle(settings)
}

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
