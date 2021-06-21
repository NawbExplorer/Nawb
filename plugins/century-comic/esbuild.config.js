const isProd = process.env.NODE_ENV === 'production';

require('esbuild')
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    target: 'node12',
    external: ['rn-bridge'],
    outdir: 'dist',
    // outfile: './.carla/index.js',
    platform: 'node',
    watch: !isProd,
    minify: isProd,
    format: 'cjs',
  })
  .catch(() => process.exit(1));
