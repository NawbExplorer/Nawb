buildscript {
  repositories {
    mavenCentral()
    mavenLocal()
    google()
  }
  dependencies {
    classpath("com.android.tools.build:gradle:4.2.1")
    classpath("de.undercouch:gradle-download-task:4.0.0")
  }
}

allprojects {

  // Making 3rd-party modules use fork
  configurations.all {
    resolutionStrategy {
      dependencySubstitution {
        substitute(module("com.facebook.react:react-native:+")).with(project(":ReactAndroid"))
      }
    }
  }

  repositories {
    maven(url = uri("$rootDir/third_party/react-native/android"))
    maven(url = uri("$rootDir/node_modules/detox/Detox-android"))
    mavenCentral()
    mavenLocal()
    google()
  }
}