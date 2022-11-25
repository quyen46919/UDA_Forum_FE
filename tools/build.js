const nextBuild = require('next/dist/build');
const path = require('path');
const withTM = require('next-transpile-modules')([]);
const config = withTM({
  cleanDistDir: false,
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
});
nextBuild
  .default(path.join(__dirname, './'), config)
  .then((res) => {
    console.log('build successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
