package com.deskbtm.nawb.tools.fastImage;

import android.content.Context;
import com.bumptech.glide.load.model.GlideUrl;
import androidx.appcompat.widget.AppCompatImageView;

class FastImageViewWithUrl extends AppCompatImageView {
    public GlideUrl glideUrl;

    public FastImageViewWithUrl(Context context) {
        super(context);
    }
}
