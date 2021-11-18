buildscript {
  repositories {
    mavenCentral()
    mavenLocal()
    google()
  }
  dependencies {
    classpath("com.android.tools.build:gradle:4.2.2")
    classpath("de.undercouch:gradle-download-task:4.1.1")
  }
}

allprojects {

  // Making 3rd-party modules use fork
  configurations.all {
    resolutionStrategy {
      dependencySubstitution {
        substitute(module("com.facebook.react:react-native:+")).using(project(":ReactAndroid"))
      }
    }
  }

  repositories {
//    maven(url = uri("$rootDir/node_modules/react-native/android"))
//    maven(url = uri("$rootDir/node_modules/detox/Detox-android"))
    mavenCentral {
      content {
        excludeGroup("com.facebook.react")
      }
    }
    maven { url 'https://www.jitpack.io' }
    mavenLocal()
    google()
  }
}

