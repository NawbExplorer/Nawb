plugins {
  id("com.android.application")
}

import com . android . build . OutputFile

var react: Any by ext

react = mapOf("root" to "../")

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
  
  
  
}
