'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "570f079017b71ce4c9990224fd53f4af",
"assets/AssetManifest.bin.json": "395d5f28ee6db9ed7fbed0d3c285e940",
"assets/AssetManifest.json": "30a65497264983d9c0cd122e65c86d1f",
"assets/assets/fonts/Proxima-Nova-bold.otf": "f8127b6e91f1ab6d8fa59919ddfb11c7",
"assets/assets/fonts/Proxima-Nova-regular.otf": "435b9c734a7fcc5bc8dd2894ebe4c7d5",
"assets/assets/fonts/Proxima-Nova-semibold.otf": "13b76c43ca9129695bd3996a37ad0d02",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "641763f7a2cdedcaee21a10accf1eaa6",
"assets/assets/fonts/SF-Pro-Text-Semibold.otf": "af544fdea7aa480045f38db4abe1a576",
"assets/assets/icon/Accessibility.svg": "38897dd376313d881f1d7869ac982621",
"assets/assets/icon/account.svg": "54ee6b83a4c9d59622f32a58f30042df",
"assets/assets/icon/Add%2520Account%2520Icon.svg": "cc6ea4f6f2089f0d1d7a237cc024ce6a",
"assets/assets/icon/ad_sign.svg": "82fe7d38831195102e5598bce641da20",
"assets/assets/icon/all_activity_Polygon.svg": "8a4cc32d96c6c2431747feccb90da6f1",
"assets/assets/icon/Balance.svg": "c4a38789317efc49c3631da53afa6402",
"assets/assets/icon/Beauty.svg": "a4d7a357f9066e728efae4002ba89596",
"assets/assets/icon/Bookmark%2520Icon%2520(1).svg": "c2f94424512c82a595c78697b62601b9",
"assets/assets/icon/bookmark.svg": "2c0048e6ce9a045b0f56051a9fe9af0c",
"assets/assets/icon/Broken%2520Heart%2520Icon.svg": "50996441ef4a6af4c5a469448bd78cd2",
"assets/assets/icon/Bubble.svg": "bd01ce6ad2f9d1f5b8d37afb94e7c387",
"assets/assets/icon/Camera%2520Stroke%2520Icon.svg": "35e26c99f9d279b9ce769a9dc283de4f",
"assets/assets/icon/Clipboard%2520Stroke%2520Icon.svg": "abc256286cab21f8938047952488c148",
"assets/assets/icon/Close%2520Icon%2520(1).svg": "cd804b748f9e9f02e463b65fd284ac5d",
"assets/assets/icon/close.svg": "5324e45c897fe258c2336efe037de2b7",
"assets/assets/icon/Content%2520preferences.svg": "2bc81f99e3296d23a3a0853037fa3312",
"assets/assets/icon/Data%2520Saver.svg": "4564a43318c60aaec1b5f2bca3658fea",
"assets/assets/icon/Digital%2520Wellbeing.svg": "bcc1e43964280d6d4ad2623ffdfb2636",
"assets/assets/icon/diractMessages.svg": "ffd3a71fec4b2f16fe5b54cfb9921e8c",
"assets/assets/icon/dot.svg": "4f7c5b4d4893fc6444a079e4746ab4c6",
"assets/assets/icon/Download%2520Icon.svg": "43ab397101f4068fcfba6f3fcfe4cd1b",
"assets/assets/icon/Duet%2520Icon.svg": "ea4d609603ca238a1c1edf981be3f430",
"assets/assets/icon/Effects_Illustration.svg": "bbe4116ef67f98a7c976caf9e0896974",
"assets/assets/icon/Ellipse%25201.svg": "13e5ddfa57e00a48f7bcaec64d178eb9",
"assets/assets/icon/emoji_stroke.svg": "9ac4cb6d9df45fdd9f3d0ebc82a278b3",
"assets/assets/icon/Facebook.svg": "5ef56d1b937026be1cf6fefff9cb8f67",
"assets/assets/icon/Filters.svg": "f04cf7b2b74a47296e1d61eeb060baac",
"assets/assets/icon/Flash.svg": "1d9a7022b9ae13587e664c32caae80bd",
"assets/assets/icon/Flip.svg": "2e17a9a727f9230032db569558c172eb",
"assets/assets/icon/Floating%2520Tones.svg": "273d89e26bdad4165605fa76b4ce970a",
"assets/assets/icon/Heart%2520Hide%2520Stroke%2520Icon.svg": "4b294aecd47590a5f04adf10e6115635",
"assets/assets/icon/Heart%2520Icon.svg": "8133aa486c8b36546fbd8fb93e2aef6b",
"assets/assets/icon/heart_stroke.svg": "354acf92a3ac2ca33d4a0544081c3320",
"assets/assets/icon/Help%2520Center.svg": "a09cbf3357ea06ea5d80ff5b8281e09e",
"assets/assets/icon/home.svg": "ece09038289a2b14dd29b758caae7898",
"assets/assets/icon/Instagram%2520Logo.svg": "cc56bc8c925ebe7fc2142f156b6b68f4",
"assets/assets/icon/invite_friend.svg": "1503cc0bdcde4191f6339671840d80e1",
"assets/assets/icon/Left%2520Arrow%2520Icon.svg": "d155b72688ddf88445eac5bd0ad7e06a",
"assets/assets/icon/Manage%2520my%2520account.svg": "296079b526c038ea1fe4332d2a1df142",
"assets/assets/icon/Menu%2520Icon.svg": "bffd5578f53ada3358708b449f9c9754",
"assets/assets/icon/Message%2520Logo.svg": "c295775b8bd9a0be304bbea75c694ff5",
"assets/assets/icon/message.svg": "01bc77bb012ffb00b74a96614df228ae",
"assets/assets/icon/messages_in_message_icon.svg": "6d762e48cac8685d72235373d8abd039",
"assets/assets/icon/Messenger%2520Logo.svg": "586cfb020857c1079a302ae245356847",
"assets/assets/icon/music.svg": "0bdb3910dd40f7f0b08157b4d940f960",
"assets/assets/icon/phone_icon.svg": "1acc0b8123c12504e22476de3ee84eb9",
"assets/assets/icon/play.svg": "ceeab66965b0017366593e184b4bd6d1",
"assets/assets/icon/Plus%2520Icon.svg": "00ccb9031984c7b7433c5aab98e91d81",
"assets/assets/icon/plus.svg": "edc3d3d372499d5951df255d78564f71",
"assets/assets/icon/Plusbutton.svg": "df567af9b9c188dc443c34bcad2c1231",
"assets/assets/icon/Privacy%2520and%2520safety.svg": "5e9a23d88542cc68c1c83ed93afe33e6",
"assets/assets/icon/qr.svg": "96c5da6d8d6cef33f0cda4f6ef0d2501",
"assets/assets/icon/React%2520Icon.svg": "10bdb15d153b068c0f63fdae1b856bcd",
"assets/assets/icon/Record_Button.svg": "2f609aec675630f9124cad71c2e76060",
"assets/assets/icon/Report%2520a%2520problem.svg": "483e28327df8dbf5ef48bbda2e579eb7",
"assets/assets/icon/Scanner%2520Icon.svg": "7f808950eb3aad5d56a2513c0f3091e3",
"assets/assets/icon/search.svg": "72c6441e7fa597394e2c621a8e0f4562",
"assets/assets/icon/send.svg": "a7a724c7c1da7b596750b0c7a02d86f5",
"assets/assets/icon/Share%2520profile.svg": "b4b4100f2d33d87602fae68b56fa319c",
"assets/assets/icon/share.svg": "744ecc68c42b597aca6cc6c97ffe801e",
"assets/assets/icon/SMS%2520Logo.svg": "c470e375ef47f8b5642b04b663fc96f0",
"assets/assets/icon/Sounds.svg": "49768b69a6099ed50a175fc807ed2ead",
"assets/assets/icon/Speed.svg": "6e450fc57c1910623f8fb7576a60c769",
"assets/assets/icon/Tabs%2520Icon.svg": "bad40cca944017b249c3e7287c3eed89",
"assets/assets/icon/TikCode.svg": "457944565e4f85f359af14efa2f1a1d2",
"assets/assets/icon/Timer.svg": "908743784b4791ece61c66e6847e2939",
"assets/assets/icon/Union.svg": "4ebcf40b3c62f4877aba6bcdbc47d9a3",
"assets/assets/icon/Upload_Illustration.svg": "2423085f5f8f7f8b6ec3bee8f2256023",
"assets/assets/icon/Videcamera%2520Stroke%2520Icon.svg": "ab20d746ec9041fa3832a0177a2acc29",
"assets/assets/icon/video_camera%2520Icon.svg": "56b761b6a6438c9548c862ac00f69fff",
"assets/assets/icon/WhatsApp%2520Logo.svg": "19e8da6ddb29772ef4994f38309f6d32",
"assets/assets/images/logo.png": "e796968943a9ee7f5c96a4412875f497",
"assets/FontManifest.json": "6f11e330201534572e872cc8f1b78d51",
"assets/fonts/MaterialIcons-Regular.otf": "0c4a456ef1becca7bba3d195197670a8",
"assets/NOTICES": "91dcd9730a834e28f1a94c2ae624b12b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ffa94985274288dff91890984855527",
"/": "5ffa94985274288dff91890984855527",
"main.dart.js": "67a37cb0f0e710c693f345079fe028fd",
"manifest.json": "e8cedf1f62f73dd084ccdfc606f396c9",
"splash/img/dark-1x.png": "07669957b99ddf945b14a22d8119dcf8",
"splash/img/dark-2x.png": "454250c76a5caa5392bd8ca214893ea6",
"splash/img/dark-3x.png": "75c2e3cddd3034b21fb968a625eac2f6",
"splash/img/dark-4x.png": "101d39ae66ad632f3f2c4508cdcd2bde",
"splash/img/light-1x.png": "07669957b99ddf945b14a22d8119dcf8",
"splash/img/light-2x.png": "454250c76a5caa5392bd8ca214893ea6",
"splash/img/light-3x.png": "75c2e3cddd3034b21fb968a625eac2f6",
"splash/img/light-4x.png": "101d39ae66ad632f3f2c4508cdcd2bde",
"version.json": "1da757b284eb5f470bea5a6e0601f906"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
