buildscript {
  repositories {
    maven(url = uri("https://maven.aliyun.com/repository/central"))
    maven(url = uri("https://maven.aliyun.com/repository/google"))
//    mavenCentral()
//    google()
    mavenLocal()
    if (System.getenv("GOOGLE_REPO_URI") != null) {
      maven(url = uri(System.getenv("GOOGLE_REPO_URI")))
    }else {
      google()
    }
    
    if (System.getenv("CENTRAL_REPO_URI") != null) {
      maven(url = uri(System.getenv("CENTRAL_REPO_URI")))
    }else {
      google()
    }

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
    maven(url = uri("https://www.jitpack.io"))
    maven(url = uri("https://maven.aliyun.com/repository/google"))
//    mavenLocal()
//    google()
  }
}

