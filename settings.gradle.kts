  import groovy.lang.Closure

rootProject.name = "nawb"

include("android")

apply {
  from(file("$rootDir/node_modules/@react-native-community/cli-platform-android/native_modules.gradle"))

//  val applyNativeModulesSettingsGradle: Closure<Any> by ext
//  applyNativeModulesSettingsGradle(settings)
}


//fun demo(vararg demo: Any): Unit{
//  println(demo[10])
//}
//
//demo(1,2,3,4)


//val applyNativeModulesSettingsGradle by ext


//applyNativeModulesSettingsGradle(settings)


