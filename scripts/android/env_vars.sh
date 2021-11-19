NODE_VERSION=14.x

export ANDROID_HOME=/opt/android
export ANDROID_SDK_ROOT=$ANDROID_HOME
export ANDROID_NDK=$ANDROID_HOME/ndk/$NDK_VERSION
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

export PATH=$ANDROID_NDK:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:/opt/buck/bin/:$PATH