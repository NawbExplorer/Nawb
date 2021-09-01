buildscript {
  repositories {
    maven(url = "https://maven.aliyun.com/repository/google")
    maven(url = "https://maven.aliyun.com/repository/jcenter")
    maven(url = "http://maven.aliyun.com/nexus/content/groups/public")
    mavenCentral()
    mavenLocal()
    google()
  }
  dependencies {
    classpath("com.android.tools.build:gradle:4.2.1")
  }
}

allprojects {
  repositories {
    maven(url="$rootDir/third_party/react-native/android")
    
    maven(url = "https://maven.aliyun.com/repository/google")
    maven(url = "https://maven.aliyun.com/repository/jcenter")
    maven(url = "http://maven.aliyun.com/nexus/content/groups/public")
    mavenCentral()
    mavenLocal()
    google()
  }
}