const isProd = process.env.NODE_ENV === 'production';

/**@ import() */
require('esbuild')
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    target: 'node12',
    external: ['rn-bridge', 'mobx'],
    outfile: './dist/index.js',
    platform: 'node',
    watch: isProd
      ? false
      : {
          onRebuild(error, result) {
            if (error) {
              console.error('watch build failed:', error);
            } else {
              if (result.warnings.length > 0) {
                console.log(result.warnings.join('/n'));
              }
              console.log('🚩🚩watch build succeeded');
            }
          },
        },
    minify: isProd,
    logLevel: 'error',
    format: 'cjs',
  })
  .catch(() => process.exit(1));
