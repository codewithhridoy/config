export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/mjs/index.mjs',
      format: 'esm',
      compact: true,
    },
    {
      file: 'dist/cjs/index.cjs',
      format: 'cjs',
      compact: true,
    },
  ],
}
