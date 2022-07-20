/**
 * Nawb (c) by Nawbc
 */

buildscript {
  repositories {

    val repoMap = mapOf(
      "GOOGLE_REPO_URI" to google(),
      "CENTRAL_REPO_URI" to mavenCentral()
    )

    repoMap.forEach { repo ->
      if (System.getenv(repo.key) != null) {
        maven(url = uri(System.getenv(repo.key)))
      } else {
        repo.value
      }
    }

    mavenLocal()
  }

  dependencies {
    val AGP_VERSION: String by project
    val GDT_VERSION: String by project

    classpath("com.android.tools.build:gradle:$AGP_VERSION")
    classpath("de.undercouch:gradle-download-task:$GDT_VERSION")
  }
}

allprojects {
  // Set global variant
  ext.set("REACT_NATIVE_DIR", "$rootDir/third_party/react-native")

  // Making 3rd-party modules use fork
  configurations.all {
    resolutionStrategy {
      dependencySubstitution {
        substitute(module("com.facebook.react:react-native:+")).using(project(":ReactAndroid"))
      }
    }
  }

  repositories {
    maven(url = uri("https://www.jitpack.io"))
    // custom repo
    val repoMap = mapOf(
      "GOOGLE_REPO_URI" to google(),
      "CENTRAL_REPO_URI" to mavenCentral {
        content {
          excludeGroup("com.facebook.react")
        }
      }
    )

    repoMap.forEach { repo ->
      if (System.getenv(repo.key) != null) {
        maven(url = uri(System.getenv(repo.key)))
      } else {
        repo.value
      }
    }

    mavenLocal()
  }
}