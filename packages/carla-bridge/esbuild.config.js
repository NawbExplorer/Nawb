const isProd = process.env.NODE_ENV === 'production';

require('esbuild')
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    target: 'node12',
    external: ['rn-bridge', './lib/yarn'],
    sourcemap: true,
    outfile: isProd
      ? '../../nodejs-assets/nodejs-project/boot.js'
      : './dist/boot.js',
    platform: 'node',
    watch: isProd
      ? false
      : {
          onRebuild(error, result) {
            if (error) {
              console.error('watch build failed:', error);
            } else {
              if (result.warnings.length > 0) {
                console.log(result.warnings);
              }
              console.log('🚩🚩watch build succeeded');
            }
          },
        },
    minify: isProd,
    format: 'cjs',
    plugins: [
      {
        name: 'exclude-path',
        setup(build) {
          // Match an import called "./shared" and mark it as external
          build.onResolve({ filter: /^\.\/lib\/yarn$/ }, () => ({
            external: true,
          }));
        },
      },
    ],
  })
  .catch(() => process.exit(1));
