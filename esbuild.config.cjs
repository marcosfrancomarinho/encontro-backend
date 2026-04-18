const { build } = require('esbuild');

build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  outfile: 'api/index.js', 
  minify: true,
  platform: 'node',
  format: 'esm',
  target: ['node18'],
  sourcemap: false,
}).catch(() => process.exit(1));