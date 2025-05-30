// NawbFsModule.java

package com.deskbtm.nawb.fs;

import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.database.Cursor;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Environment;
import android.os.StatFs;
import android.provider.MediaStore;
import android.util.Base64;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.RCTNativeAppEventEmitter;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.RandomAccessFile;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Map;


public class NawbFSModule extends ReactContextBaseJavaModule {

  private static final String MODULE_NAME = "NawbFs";

  private final ReactApplicationContext reactContext;

  public NawbFSModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return MODULE_NAME;
  }

  private Uri getFileUri(String filepath, boolean isDirectoryAllowed) throws Exception {
    Uri uri = Uri.parse(filepath);
    if (uri.getScheme() == null) {
      // No prefix, assuming that provided path is absolute path to file
      File file = new File(filepath);
      if (!isDirectoryAllowed && file.isDirectory()) {
        throw new Exception("EISDIR: illegal operation on a directory, read '" + filepath + "'");
      }
      uri = Uri.parse("file://" + filepath);
    }
    return uri;
  }

  private String getOriginalFilepath(String filepath, boolean isDirectoryAllowed) throws Exception {
    Uri uri = getFileUri(filepath, isDirectoryAllowed);
    String originalFilepath = filepath;
    if (uri.getScheme().equals("content")) {
      try {
        Cursor cursor = reactContext.getContentResolver().query(uri, null, null, null, null);
        if (cursor.moveToFirst()) {
          originalFilepath = cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA));
        }
        cursor.close();
      } catch (IllegalArgumentException ignored) {
      }
    }
    return originalFilepath;
  }

  private InputStream getInputStream(String filepath) throws Exception {
    Uri uri = getFileUri(filepath, false);
    InputStream stream;
    try {
      stream = reactContext.getContentResolver().openInputStream(uri);
    } catch (FileNotFoundException ex) {
      throw new Exception("ENOENT: " + ex.getMessage() + ", open '" + filepath + "'");
    }
    if (stream == null) {
      throw new Exception("ENOENT: could not open an input stream for '" + filepath + "'");
    }
    return stream;
  }

  private OutputStream getOutputStream(String filepath, boolean append) throws Exception {
    Uri uri = getFileUri(filepath, false);
    OutputStream stream;
    try {
      stream = reactContext.getContentResolver().openOutputStream(uri, append ? "wa" : "w");
    } catch (FileNotFoundException ex) {
      throw new Exception("ENOENT: " + ex.getMessage() + ", open '" + filepath + "'");
    }
    if (stream == null) {
      throw new Exception("ENOENT: could not open an output stream for '" + filepath + "'");
    }
    return stream;
  }

  private static byte[] getInputStreamBytes(InputStream inputStream) throws IOException {
    byte[] bytesResult;
    ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();
    int bufferSize = 1024;
    byte[] buffer = new byte[bufferSize];
    try {
      int len;
      while ((len = inputStream.read(buffer)) != -1) {
        byteBuffer.write(buffer, 0, len);
      }
      bytesResult = byteBuffer.toByteArray();
    } finally {
      try {
        byteBuffer.close();
      } catch (IOException ignored) {
      }
    }
    return bytesResult;
  }

  @ReactMethod
  public void writeFile(String filepath, String base64Content, ReadableMap options, Promise promise) {
    try {
      byte[] bytes = Base64.decode(base64Content, Base64.DEFAULT);

      OutputStream outputStream = getOutputStream(filepath, false);
      outputStream.write(bytes);
      outputStream.close();

      promise.resolve(null);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void appendFile(String filepath, String base64Content, Promise promise) {
    try {
      byte[] bytes = Base64.decode(base64Content, Base64.DEFAULT);

      OutputStream outputStream = getOutputStream(filepath, true);
      outputStream.write(bytes);
      outputStream.close();

      promise.resolve(null);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void write(String filepath, String base64Content, int position, Promise promise) {
    try {
      byte[] bytes = Base64.decode(base64Content, Base64.DEFAULT);

      if (position < 0) {
        OutputStream outputStream = getOutputStream(filepath, true);
        outputStream.write(bytes);
        outputStream.close();
      } else {
        RandomAccessFile file = new RandomAccessFile(filepath, "rw");
        file.seek(position);
        file.write(bytes);
        file.close();
      }

      promise.resolve(null);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void exists(String filepath, Promise promise) {
    try {
      File file = new File(filepath);
      promise.resolve(file.exists());
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void readFile(String filepath, Promise promise) {
    try {
      InputStream inputStream = getInputStream(filepath);
      byte[] inputData = getInputStreamBytes(inputStream);
      String base64Content = Base64.encodeToString(inputData, Base64.NO_WRAP);

      promise.resolve(base64Content);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void read(String filepath, int length, int position, Promise promise) {
    try {
      InputStream inputStream = getInputStream(filepath);
      byte[] buffer = new byte[length];
      inputStream.skip(position);
      int bytesRead = inputStream.read(buffer, 0, length);

      String base64Content = Base64.encodeToString(buffer, 0, bytesRead, Base64.NO_WRAP);

      promise.resolve(base64Content);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void readFileAssets(String filepath, Promise promise) {
    InputStream stream = null;
    try {
      // ensure isn't a directory
      AssetManager assetManager = getReactApplicationContext().getAssets();
      stream = assetManager.open(filepath, 0);
      if (stream == null) {
        reject(promise, filepath, new Exception("Failed to open file"));
        return;
      }

      byte[] buffer = new byte[stream.available()];
      stream.read(buffer);
      String base64Content = Base64.encodeToString(buffer, Base64.NO_WRAP);
      promise.resolve(base64Content);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    } finally {
      if (stream != null) {
        try {
          stream.close();
        } catch (IOException ignored) {
        }
      }
    }
  }

  @ReactMethod
  public void readFileRes(String filename, Promise promise) {
    InputStream stream = null;
    try {
      int res = getResIdentifier(filename);
      stream = getReactApplicationContext().getResources().openRawResource(res);
      if (stream == null) {
        reject(promise, filename, new Exception("Failed to open file"));
        return;
      }

      byte[] buffer = new byte[stream.available()];
      stream.read(buffer);
      String base64Content = Base64.encodeToString(buffer, Base64.NO_WRAP);
      promise.resolve(base64Content);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filename, ex);
    } finally {
      if (stream != null) {
        try {
          stream.close();
        } catch (IOException ignored) {
        }
      }
    }
  }

  private int getResIdentifier(String filename) {
    String suffix = filename.substring(filename.lastIndexOf(".") + 1);
    String name = filename.substring(0, filename.lastIndexOf("."));
    Boolean isImage = suffix.equals("png") || suffix.equals("jpg") || suffix.equals("jpeg") || suffix.equals("bmp") || suffix.equals("gif") || suffix.equals("webp") || suffix.equals("psd") || suffix.equals("svg") || suffix.equals("tiff");
    return getReactApplicationContext().getResources().getIdentifier(name, isImage ? "drawable" : "raw", getReactApplicationContext().getPackageName());
  }

  @ReactMethod
  public void hash(String filepath, String algorithm, Promise promise) {
    try {
      Map<String, String> algorithms = new HashMap<>();

      algorithms.put("md5", "MD5");
      algorithms.put("sha1", "SHA-1");
      algorithms.put("sha224", "SHA-224");
      algorithms.put("sha256", "SHA-256");
      algorithms.put("sha384", "SHA-384");
      algorithms.put("sha512", "SHA-512");

      if (!algorithms.containsKey(algorithm)) throw new Exception("Invalid hash algorithm");

      File file = new File(filepath);

      if (file.isDirectory()) {
        rejectFileIsDirectory(promise);
        return;
      }

      if (!file.exists()) {
        rejectFileNotFound(promise, filepath);
        return;
      }

      MessageDigest md = MessageDigest.getInstance(algorithms.get(algorithm));

      FileInputStream inputStream = new FileInputStream(filepath);
      byte[] buffer = new byte[1024 * 10]; // 10 KB Buffer

      int read;
      while ((read = inputStream.read(buffer)) != -1) {
        md.update(buffer, 0, read);
      }

      StringBuilder hexString = new StringBuilder();
      for (byte digestByte : md.digest())
        hexString.append(String.format("%02x", digestByte));

      promise.resolve(hexString.toString());
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void moveFile(final String filepath, String destPath, ReadableMap options, final Promise promise) {
    try {
      final File inFile = new File(filepath);

      if (!inFile.renameTo(new File(destPath))) {
        new CopyFileTask() {
          @Override
          protected void onPostExecute(Exception ex) {
            if (ex == null) {
              inFile.delete();
              promise.resolve(true);
            } else {
              ex.printStackTrace();
              reject(promise, filepath, ex);
            }
          }
        }.execute(filepath, destPath);
      } else {
        promise.resolve(true);
      }
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void copyFile(final String filepath, final String destPath, ReadableMap options, final Promise promise) {
    new CopyFileTask() {
      @Override
      protected void onPostExecute(Exception ex) {
        if (ex == null) {
          promise.resolve(null);
        } else {
          ex.printStackTrace();
          reject(promise, filepath, ex);
        }
      }
    }.execute(filepath, destPath);
  }

  private class CopyFileTask extends AsyncTask<String, Void, Exception> {
    protected Exception doInBackground(String... paths) {
      try {
        String filepath = paths[0];
        String destPath = paths[1];

        InputStream in = getInputStream(filepath);
        OutputStream out = getOutputStream(destPath, false);

        byte[] buffer = new byte[1024];
        int length;
        while ((length = in.read(buffer)) > 0) {
          out.write(buffer, 0, length);
          Thread.yield();
        }
        in.close();
        out.close();
        return null;
      } catch (Exception ex) {
        return ex;
      }
    }
  }

  @ReactMethod
  public void readDir(String directory, Promise promise) {
    try {
      File file = new File(directory);

      if (!file.exists()) throw new Exception("Folder does not exist");

      File[] files = file.listFiles();

      WritableArray fileMaps = Arguments.createArray();

      for (File childFile : files) {
        WritableMap fileMap = Arguments.createMap();

        fileMap.putDouble("mtime", (double) childFile.lastModified() / 1000);
        fileMap.putString("name", childFile.getName());
        fileMap.putString("path", childFile.getAbsolutePath());
        fileMap.putDouble("size", (double) childFile.length());
        fileMap.putInt("type", childFile.isDirectory() ? 1 : 0);

        fileMaps.pushMap(fileMap);
      }

      promise.resolve(fileMaps);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, directory, ex);
    }
  }

  @ReactMethod
  public void readDirAssets(String directory, Promise promise) {
    try {
      AssetManager assetManager = getReactApplicationContext().getAssets();
      String[] list = assetManager.list(directory);

      WritableArray fileMaps = Arguments.createArray();
      for (String childFile : list) {
        WritableMap fileMap = Arguments.createMap();

        fileMap.putString("name", childFile);
        String path = directory.isEmpty() ? childFile : String.format("%s/%s", directory, childFile); // don't allow / at the start when directory is ""
        fileMap.putString("path", path);
        int length = 0;
        boolean isDirectory = true;
        try {
          AssetFileDescriptor assetFileDescriptor = assetManager.openFd(path);
          if (assetFileDescriptor != null) {
            length = (int) assetFileDescriptor.getLength();
            assetFileDescriptor.close();
            isDirectory = false;
          }
        } catch (IOException ex) {
          //.. ah.. is a directory or a compressed file?
          isDirectory = !ex.getMessage().contains("compressed");
        }
        fileMap.putInt("size", length);
        fileMap.putInt("type", isDirectory ? 1 : 0); // if 0, probably a folder..

        fileMaps.pushMap(fileMap);
      }
      promise.resolve(fileMaps);

    } catch (IOException e) {
      reject(promise, directory, e);
    }
  }

  @ReactMethod
  public void copyFileAssets(String assetPath, String destination, Promise promise) {
    AssetManager assetManager = getReactApplicationContext().getAssets();
    try {
      InputStream in = assetManager.open(assetPath);
      copyInputStream(in, assetPath, destination, promise);
    } catch (IOException e) {
      // Default error message is just asset name, so make a more helpful error here.
      reject(promise, assetPath, new Exception(String.format("Asset '%s' could not be opened", assetPath)));
    }
  }

  @ReactMethod
  public void copyFileRes(String filename, String destination, Promise promise) {
    try {
      int res = getResIdentifier(filename);
      InputStream in = getReactApplicationContext().getResources().openRawResource(res);
      copyInputStream(in, filename, destination, promise);
    } catch (Exception e) {
      reject(promise, filename, new Exception(String.format("Res '%s' could not be opened", filename)));
    }
  }

  @ReactMethod
  public void existsAssets(String filepath, Promise promise) {
    try {
      AssetManager assetManager = getReactApplicationContext().getAssets();

      try {
        String[] list = assetManager.list(filepath);
        if (list != null && list.length > 0) {
          promise.resolve(true);
          return;
        }
      } catch (Exception ignored) {
        //.. probably not a directory then
      }

      // Attempt to open file (win = exists)
      InputStream fileStream = null;
      try {
        fileStream = assetManager.open(filepath);
        promise.resolve(true);
      } catch (Exception ex) {
        promise.resolve(false); // don't throw an error, resolve false
      } finally {
        if (fileStream != null) {
          try {
            fileStream.close();
          } catch (Exception ignored) {
          }
        }
      }
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void existsRes(String filename, Promise promise) {
    try {
      int res = getResIdentifier(filename);
      if (res > 0) {
        promise.resolve(true);
      } else {
        promise.resolve(false);
      }
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filename, ex);
    }
  }

  /**
   * Internal method for copying that works with any InputStream
   *
   * @param in          InputStream from assets or file
   * @param source      source path (only used for logging errors)
   * @param destination destination path
   * @param promise     React Callback
   */
  private void copyInputStream(InputStream in, String source, String destination, Promise promise) {
    OutputStream out = null;
    try {
      out = getOutputStream(destination, false);

      byte[] buffer = new byte[1024 * 10]; // 10k buffer
      int read;
      while ((read = in.read(buffer)) != -1) {
        out.write(buffer, 0, read);
      }

      // Success!
      promise.resolve(null);
    } catch (Exception ex) {
      reject(promise, source, new Exception(String.format("Failed to copy '%s' to %s (%s)", source, destination, ex.getLocalizedMessage())));
    } finally {
      if (in != null) {
        try {
          in.close();
        } catch (IOException ignored) {
        }
      }
      if (out != null) {
        try {
          out.close();
        } catch (IOException ignored) {
        }
      }
    }
  }

  @ReactMethod
  public void setReadable(String filepath, Boolean readable, Boolean ownerOnly, Promise promise) {
    try {
      File file = new File(filepath);

      if (!file.exists()) throw new Exception("File does not exist");

      file.setReadable(readable, ownerOnly);

      promise.resolve(true);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void stat(String filepath, Promise promise) {
    try {
      String originalFilepath = getOriginalFilepath(filepath, true);
      File file = new File(originalFilepath);

      if (!file.exists()) throw new Exception("File does not exist");

      WritableMap statMap = Arguments.createMap();
      statMap.putInt("ctime", (int) (file.lastModified() / 1000));
      statMap.putInt("mtime", (int) (file.lastModified() / 1000));
      statMap.putDouble("size", (double) file.length());
      statMap.putInt("type", file.isDirectory() ? 1 : 0);
      statMap.putString("originalFilepath", originalFilepath);

      promise.resolve(statMap);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void unlink(String filepath, Promise promise) {
    try {
      File file = new File(filepath);

      if (!file.exists()) throw new Exception("File does not exist");

      DeleteRecursive(file);

      promise.resolve(null);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  private void DeleteRecursive(File fileOrDirectory) {
    if (fileOrDirectory.isDirectory()) {
      for (File child : fileOrDirectory.listFiles()) {
        DeleteRecursive(child);
      }
    }

    fileOrDirectory.delete();
  }

  @ReactMethod
  public void mkdir(String filepath, ReadableMap options, Promise promise) {
    try {
      File file = new File(filepath);

      file.mkdirs();

      boolean exists = file.exists();

      if (!exists) throw new Exception("Directory could not be created");

      promise.resolve(null);
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  private void sendEvent(ReactContext reactContext, String eventName, WritableMap params) {
    reactContext
      .getJSModule(RCTNativeAppEventEmitter.class)
      .emit(eventName, params);
  }


  @ReactMethod
  public void pathForBundle(String bundleNamed, Promise promise) {
    // TODO: Not sure what equivalent would be?
  }

  @ReactMethod
  public void pathForGroup(String bundleNamed, Promise promise) {
    // TODO: Not sure what equivalent would be?
  }

  @ReactMethod
  public void getFSInfo(Promise promise) {
    File path = Environment.getDataDirectory();
    StatFs stat = new StatFs(path.getPath());
    StatFs statEx = new StatFs(Environment.getExternalStorageDirectory().getPath());
    long totalSpace;
    long freeSpace;
    long totalSpaceEx = 0;
    long freeSpaceEx = 0;
    if (android.os.Build.VERSION.SDK_INT >= 18) {
      totalSpace = stat.getTotalBytes();
      freeSpace = stat.getFreeBytes();
      totalSpaceEx = statEx.getTotalBytes();
      freeSpaceEx = statEx.getFreeBytes();
    } else {
      long blockSize = stat.getBlockSize();
      totalSpace = blockSize * stat.getBlockCount();
      freeSpace = blockSize * stat.getAvailableBlocks();
    }
    WritableMap info = Arguments.createMap();
    info.putDouble("totalSpace", (double) totalSpace);   // Int32 too small, must use Double
    info.putDouble("freeSpace", (double) freeSpace);
    info.putDouble("totalSpaceEx", (double) totalSpaceEx);
    info.putDouble("freeSpaceEx", (double) freeSpaceEx);
    promise.resolve(info);
  }

  @ReactMethod
  public void touch(String filepath, double mtime, double ctime, Promise promise) {
    try {
      File file = new File(filepath);
      promise.resolve(file.setLastModified((long) mtime));
    } catch (Exception ex) {
      ex.printStackTrace();
      reject(promise, filepath, ex);
    }
  }

  @ReactMethod
  public void getAllExternalFilesDirs(Promise promise) {
    File[] allExternalFilesDirs = this.getReactApplicationContext().getExternalFilesDirs(null);
    WritableArray fs = Arguments.createArray();
    for (File f : allExternalFilesDirs) {
      if (f != null) {
        fs.pushString(f.getAbsolutePath());
      }
    }
    promise.resolve(fs);
  }

  @ReactMethod
  public void scanFile(String path, final Promise promise) {
    MediaScannerConnection.scanFile(this.getReactApplicationContext(),
      new String[]{path},
      null,
      new MediaScannerConnection.MediaScannerConnectionClient() {
        @Override
        public void onMediaScannerConnected() {
        }

        @Override
        public void onScanCompleted(String path, Uri uri) {
          promise.resolve(path);
        }
      }
    );
  }

  private void reject(Promise promise, String filepath, Exception ex) {
    if (ex instanceof FileNotFoundException) {
      rejectFileNotFound(promise, filepath);
      return;
    }
    if (ex instanceof Exception) {
      Exception ioRejectionException = (Exception) ex;
      promise.reject(ioRejectionException.getMessage());
      return;
    }

    promise.reject(null, ex.getMessage());
  }

  private void rejectFileNotFound(Promise promise, String filepath) {
    promise.reject("ENOENT", "ENOENT: no such file or directory, open '" + filepath + "'");
  }

  private void rejectFileIsDirectory(Promise promise) {
    promise.reject("EISDIR", "EISDIR: illegal operation on a directory, read");
  }

  @Override
  public Map<String, Object> getConstants() {
    return new PathProvider(reactContext).createConstantsPath();
  }
}
