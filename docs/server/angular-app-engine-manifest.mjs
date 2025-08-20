
export default {
  basePath: 'https://dualcoreitsolution.github.io/DualCore-IT',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
