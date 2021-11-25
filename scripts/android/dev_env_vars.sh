NDK_VERSION=21.4.7075529

export ANDROID_HOME=~/Android/Sdk
export ANDROID_SDK_ROOT=$ANDROID_HOME
export ANDROID_NDK=$ANDROID_HOME/ndk/$NDK_VERSION
export JAVA_HOME=/usr/lib/jvm/default

export PATH=$ANDROID_NDK:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:/opt/buck/bin/:$PATH