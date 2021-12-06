/**
 * Nawb (c) by Nawbc
 *
 * Nawb is licensed under a
 * Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 *
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-nc-nd/4.0/>.
 */

rootProject.name = "Nawb"

pluginManagement {
  repositories {
    gradlePluginPortal()
    mavenCentral()
    google()
  }
}

val REACT_NATIVE_DIR = "$rootDir/third_party/react-native"

include(":NawbAndroid")
project(":NawbAndroid").projectDir = File("$rootDir/android")

// react native for android
include(":ReactAndroid")
project(":ReactAndroid").projectDir = File("$REACT_NATIVE_DIR/ReactAndroid")


include(":rn-tester")
project(":rn-tester").projectDir = File("$REACT_NATIVE_DIR/packages/rn-tester/android/app")

includeBuild("$REACT_NATIVE_DIR/packages/react-native-gradle-plugin")