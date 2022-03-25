### FQA

1. 构建出现react-native-codegen相关问题
```
Execution failed for task ':packages:rn-tester:android:app:generateCodegenSchemaFromJavaScript'.
Process 'command 'yarn'' finished with non-zero exit value 1
```

`/third_party/react-native/packages/react-native-codegen` 下手动执行下yarn build

2. Android下gradle没有触发hermes下载?
  react-native目录下手动执行 ./gradlew :ReactAndroid:hermes-engine:unzipHermes

3. 如果遇到boost, glog 等原生库网络问题?
可手动下载放在ReactAndroid/build/downloads下

