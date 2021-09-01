plugins {
  id("com.android.application")
//  id("$rootDir/")
}

apply {
  println(rootDir)
//  from(file("$rootDir/third_party/react-native/react.gradle"))
}


android {
  defaultConfig {
    buildToolsVersion = "30.0.2"
    applicationId("com.deskbtm.nawb")
    minSdkVersion(21)

    targetSdkVersion(targetSdkVersion = 30)
    versionCode(1)
    versionName("1.0")
  }
}
