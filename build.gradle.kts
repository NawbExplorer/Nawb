/**
 * Nawb (c) by Nawbc
 *
 * Nawb is licensed under a
 * Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 *
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-nc-nd/4.0/>.
 */

buildscript {
  repositories {
//    maven(url = uri("https://maven.aliyun.com/repository/central"))
//    maven(url = uri("https://maven.aliyun.com/repository/google"))
//    
    val repoMap = mapOf(
      "GOOGLE_REPO_URI" to google(),
      "CENTRAL_REPO_URI" to mavenCentral()
    )

    repoMap.forEach { m ->
      if (System.getenv(m.key) != null) {
        maven(url = uri(System.getenv(m.key)))
      } else {
        m.value
      }
    }
//    
    mavenLocal()

    if (System.getenv("CENTRAL_REPO_URI") != null) {
      maven(url = uri(System.getenv("CENTRAL_REPO_URI")))
    } else {
      mavenCentral()
    }

  }
  dependencies {
    val KOTLIN_VERSION: String by project
    val AGP_VERSION: String by project
    classpath("com.android.tools.build:gradle:$AGP_VERSION")
    classpath("de.undercouch:gradle-download-task:4.1.1")
    classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$KOTLIN_VERSION")
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

ext["REACT_NATIVE_DIR"] = "$rootDir/third_party/react-native"

//{
//  REACT_NATIVE_DIR = "$rootDir/third_party/react-native"
//  HERMES_DIR = "${rootDir}/node_modules/hermes-engine/android"
//}