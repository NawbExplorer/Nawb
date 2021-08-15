package com.deskbtm.nawb.fs;

import android.os.Environment;

import androidx.annotation.UiThread;

import com.facebook.infer.annotation.ThreadConfined;
import com.facebook.react.bridge.ReactContext;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

class PathProvider {
  private ReactContext reactContext;

  public PathProvider(ReactContext ctx) {
    this.reactContext = ctx;
  }

  private final String RNFSDocumentDirectoryPath = "RNFSDocumentDirectoryPath";
  private final String RNFSExternalDirectoryPath = "RNFSExternalDirectoryPath";
  private final String RNFSExternalStorageDirectoryPath = "RNFSExternalStorageDirectoryPath";
  private final String RNFSPicturesDirectoryPath = "RNFSPicturesDirectoryPath";
  private final String RNFSDownloadDirectoryPath = "RNFSDownloadDirectoryPath";
  private final String RNFSTemporaryDirectoryPath = "RNFSTemporaryDirectoryPath";
  private final String RNFSCachesDirectoryPath = "RNFSCachesDirectoryPath";
  private final String RNFSExternalCachesDirectoryPath = "RNFSExternalCachesDirectoryPath";
  private final String RNFSDocumentDirectory = "RNFSDocumentDirectory";

  private final String RNFSFileTypeRegular = "RNFSFileTypeRegular";
  private final String RNFSFileTypeDirectory = "RNFSFileTypeDirectory";

  public Map<String, Object> createConstantsPath() {

    final Map<String, Object> constants = new HashMap<>();

    constants.put(RNFSDocumentDirectory, 0);
    constants.put(RNFSDocumentDirectoryPath, reactContext.getFilesDir().getAbsolutePath());
    constants.put(RNFSTemporaryDirectoryPath, reactContext.getCacheDir().getAbsolutePath());
    constants.put(RNFSPicturesDirectoryPath, Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES).getAbsolutePath());
    constants.put(RNFSCachesDirectoryPath, reactContext.getCacheDir().getAbsolutePath());
    constants.put(RNFSDownloadDirectoryPath, Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).getAbsolutePath());
    constants.put(RNFSFileTypeRegular, 0);
    constants.put(RNFSFileTypeDirectory, 1);

    File externalStorageDirectory = Environment.getExternalStorageDirectory();
    if (externalStorageDirectory != null) {
      constants.put(RNFSExternalStorageDirectoryPath, externalStorageDirectory.getAbsolutePath());
    } else {
      constants.put(RNFSExternalStorageDirectoryPath, null);
    }

    File externalDirectory = reactContext.getExternalFilesDir(null);
    if (externalDirectory != null) {
      constants.put(RNFSExternalDirectoryPath, externalDirectory.getAbsolutePath());
    } else {
      constants.put(RNFSExternalDirectoryPath, null);
    }

    File externalCachesDirectory = reactContext.getExternalCacheDir();
    if (externalCachesDirectory != null) {
      constants.put(RNFSExternalCachesDirectoryPath, externalCachesDirectory.getAbsolutePath());
    } else {
      constants.put(RNFSExternalCachesDirectoryPath, null);
    }

    return constants;
  }

}
