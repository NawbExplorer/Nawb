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
    val KOTLIN_VERSION: String by project
    val AGP_VERSION: String by project
    val GDT_VERSION: String by project
    
    classpath("com.android.tools.build:gradle:$AGP_VERSION")
    classpath("de.undercouch:gradle-download-task:$GDT_VERSION")
    classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$KOTLIN_VERSION")
  }
}

allprojects {
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
    // 自定义仓库镜像链接
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

