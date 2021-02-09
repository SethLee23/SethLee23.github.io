/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/06/14/a/index.html",
    "revision": "c30c6fcdf4502cdc476638af79303a35"
  },
  {
    "url": "2020/06/14/按需加载element-ui/index.html",
    "revision": "20ad36ddbc8246a2bba6e4a468a1b826"
  },
  {
    "url": "2020/08/13/关于打印注意事项/index.html",
    "revision": "d9288c6ede011302de078cf2e706fcdb"
  },
  {
    "url": "404.html",
    "revision": "ba38abc882ab7053549f471ad4e9cb22"
  },
  {
    "url": "assets/css/0.styles.fea375a4.css",
    "revision": "66c29f7144768743d0901b7910eb08f5"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "1c46aa914db721f1d260a9bb7e5c030d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.60a917eb.js",
    "revision": "fffc2831e1ebebd44d9c6c0313839c97"
  },
  {
    "url": "assets/js/11.dc635c3e.js",
    "revision": "80d8016d6efb19acc6659c504057024e"
  },
  {
    "url": "assets/js/12.7dc54b94.js",
    "revision": "9befdbab850125bff33eace64f76acef"
  },
  {
    "url": "assets/js/13.e43b27bc.js",
    "revision": "b3421467b4ab9a55551c7f1d5702bc8f"
  },
  {
    "url": "assets/js/14.38780ef8.js",
    "revision": "e449be917d6bf44cc99c519cbf3dabc0"
  },
  {
    "url": "assets/js/15.6e84b14f.js",
    "revision": "f2a989e5e4628f16243180190b218687"
  },
  {
    "url": "assets/js/16.56df5765.js",
    "revision": "dbbf22154bc46ded6525e28edaa342f3"
  },
  {
    "url": "assets/js/17.61074d3f.js",
    "revision": "ae647b9f96ba566d0a5463360c6df269"
  },
  {
    "url": "assets/js/3.84e94218.js",
    "revision": "6bf42ed90e09af161370610adb82b927"
  },
  {
    "url": "assets/js/4.cc55c3b8.js",
    "revision": "925d836226e3438c52da966ae29a3309"
  },
  {
    "url": "assets/js/5.449f2c68.js",
    "revision": "3b102b3cc00c089760aefd55f625461f"
  },
  {
    "url": "assets/js/6.31825f4c.js",
    "revision": "9512776eefba8f4d4ad28242847926be"
  },
  {
    "url": "assets/js/7.ab15836a.js",
    "revision": "7a7320db188f7bec7561f2d698bd0d07"
  },
  {
    "url": "assets/js/8.6cbcdf4a.js",
    "revision": "7c9f1801844146bcf0e3c0b0d1b454f1"
  },
  {
    "url": "assets/js/9.02368342.js",
    "revision": "2f3e9204d49e3d00cf6f11fa52acfb5b"
  },
  {
    "url": "assets/js/app.8baaf182.js",
    "revision": "d440eb76794af65aa400fc2a9d28db57"
  },
  {
    "url": "assets/js/vuejs-paginate.924fa262.js",
    "revision": "0668fdf4d492ab1f1ce4b0ef8b4b558b"
  },
  {
    "url": "baidu_verify_eA8vmXZFiJ.html",
    "revision": "1309c2e8b49a493e00081198571b11a8"
  },
  {
    "url": "compo/demo.html",
    "revision": "c5e0d17ac66f52376bf7c8e642e7fde6"
  },
  {
    "url": "icon/android-icon-192x192-dunplab-manifest-1314.png",
    "revision": "2424ca8a0ac6c1e03dfd8862f86729f9"
  },
  {
    "url": "icon/apple-icon-114x114-dunplab-manifest-1314.png",
    "revision": "6026ab5e77534b3dbc8e507a73a587a1"
  },
  {
    "url": "icon/apple-icon-120x120-dunplab-manifest-1314.png",
    "revision": "dc86201955ee5b5697feda19361c8dbe"
  },
  {
    "url": "icon/apple-icon-144x144-dunplab-manifest-1314.png",
    "revision": "58dacfe12c6037945024c5b709eb2877"
  },
  {
    "url": "icon/apple-icon-152x152-dunplab-manifest-1314.png",
    "revision": "b65bdf4dfcaa8b7565e9f01057497683"
  },
  {
    "url": "icon/apple-icon-180x180-dunplab-manifest-1314.png",
    "revision": "d245957d83e85e7749e714999bdb31f5"
  },
  {
    "url": "icon/apple-icon-57x57-dunplab-manifest-1314.png",
    "revision": "49e4cff5c4fff58c2ac0f4436b52162c"
  },
  {
    "url": "icon/apple-icon-60x60-dunplab-manifest-1314.png",
    "revision": "ef5d66161f2a0dba46cdc570784fa883"
  },
  {
    "url": "icon/apple-icon-72x72-dunplab-manifest-1314.png",
    "revision": "5fd481120160eca6dd7a66f385f6c3f9"
  },
  {
    "url": "icon/apple-icon-76x76-dunplab-manifest-1314.png",
    "revision": "86ca8e8e86592ce586efcb60b6da91d2"
  },
  {
    "url": "icon/favicon-16x16-dunplab-manifest-1314.png",
    "revision": "d71d3fedae4894dd080af3aeff4c3dc7"
  },
  {
    "url": "icon/favicon-32x32-dunplab-manifest-1314.png",
    "revision": "4d09ba4dddaab5818e2146fe883acfe8"
  },
  {
    "url": "icon/favicon-96x96-dunplab-manifest-1314.png",
    "revision": "19626836392b772ad6b4f15ed9387198"
  },
  {
    "url": "index.html",
    "revision": "e485924d499565bb0e4dc2c62594e454"
  },
  {
    "url": "tag/Element UI/index.html",
    "revision": "688651942251fdd0b598c0e37582da4d"
  },
  {
    "url": "tag/index.html",
    "revision": "2189f6b53e642a75a60ab0fdd18cfe59"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "729bef0d86136af2b1ca5eeaf94b6952"
  },
  {
    "url": "tag/js/index.html",
    "revision": "34f42fc913eb4a81553d54832c1fd393"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "09ea1ecae5fe0e579d12be804b69777d"
  },
  {
    "url": "tag/SEO/index.html",
    "revision": "98631f0d0fe7a8551e3f67cf6ed43e7a"
  },
  {
    "url": "tag/Vssue/index.html",
    "revision": "f454ee2dbadda195406408ef40a00fd0"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "8b47480ecc08c943935518bd058f9926"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
