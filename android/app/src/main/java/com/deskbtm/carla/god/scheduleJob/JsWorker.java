package com.deskbtm.carla.god.scheduleJob;

import android.content.Context;

import androidx.annotation.NonNull;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

public class JsWorker extends Worker {
  Context context;
  
  
  public JsWorker(@NonNull Context ctx, @NonNull WorkerParameters workerParams) {
    super(ctx, workerParams);
    context = ctx;
  }

  @NonNull
  @Override
  public Result doWork() {
    return null;
  }
}
