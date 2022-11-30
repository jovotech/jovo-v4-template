const { build } = require('esbuild');
const { esbuildDecorators } = require('@anatine/esbuild-decorators');


build({
  platform: 'node',
  target: 'node14',
  bundle: true,
  sourcemap: true,
  minify: true,
  keepNames: true,
  format: 'cjs',
  tsconfig: __dirname + '/tsconfig.json',
  entryPoints: [process.argv[2]],
  outfile: __dirname + '/bundle/index.js',
  external: ['aws-sdk', '@oclif/:*', '@jovotech/cli*', '@alexa/*'],
  plugins: [
    esbuildDecorators({
      tsconfig: __dirname + '/tsconfig.json',
      cwd: process.cwd(),
    }),
  ],
});
