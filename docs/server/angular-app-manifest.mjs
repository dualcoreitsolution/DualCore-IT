
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://dualcoreitsolution.github.io/DualCore-IT/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/DualCore-IT"
  },
  {
    "renderMode": 2,
    "route": "/DualCore-IT/about"
  },
  {
    "renderMode": 2,
    "route": "/DualCore-IT/service"
  },
  {
    "renderMode": 2,
    "route": "/DualCore-IT/technologies"
  },
  {
    "renderMode": 2,
    "route": "/DualCore-IT/blog"
  },
  {
    "renderMode": 2,
    "route": "/DualCore-IT/contact"
  },
  {
    "renderMode": 2,
    "route": "/DualCore-IT/career"
  },
  {
    "renderMode": 2,
    "route": "/DualCore-IT/project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 118259, hash: 'ff662d59fb9cf1f11655884f8571f8f48a791cd2773770b2cc5a9c1c15b53a8b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 113457, hash: '60702ca636b303a4c4a926cd3f5edc113abaedb93b0651c9ff7588e79d563a17', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 133322, hash: '499e309be3d9afdb03cbe661a9d7b636e07993a37f6453f7ed87926932c94033', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 147104, hash: '794206949a81dd6d6c06f626580cbab4a65caffd04cadb42c198b6c9a49fa8c6', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 139685, hash: '58ef5ff1e7fb769bc184a471e0f4edddf50741548eff27cdb5c6f234099da0a0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 146522, hash: 'c55b5c84e99c76584483aad4788d61bb001ae32c33a290fade753d8e67b7b26b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 140402, hash: 'b981184ec6dfc0efe1cef94179c21a20e7a8b55b9f70259583e1047db584e420', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 129626, hash: '1173d80e4742b67fc09ad1102f30df41b2b3bc553192a8caef8a299326d79d2c', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 141325, hash: '79e76fc87b44d3c86e0bbcf19b2d73c2265ded422a24ca7c79e2834c8dec74ae', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'technologies/index.html': {size: 135061, hash: '6fdb7401cebfc547c491f9f8dd2cfc0581b3b8a40f85489da2a292cc0aceb3ab', text: () => import('./assets-chunks/technologies_index_html.mjs').then(m => m.default)},
    'styles-ORW7T2EF.css': {size: 260732, hash: 'HVnsaMlEopc', text: () => import('./assets-chunks/styles-ORW7T2EF_css.mjs').then(m => m.default)}
  },
};
