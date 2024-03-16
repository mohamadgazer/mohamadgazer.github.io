'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a41c3dbbd1d8f4b6a8ee535e25d3dc2b",
"assets/AssetManifest.bin.json": "fa529696d61f927780363e2489e9ae56",
"assets/AssetManifest.json": "4cc598bd1fbfb70f9fb4544da1ff50e4",
"assets/assets/fonts/avenir_ff/AvenirLTStd-Black.otf": "b1abb878e2529cb5cb4450139844155d",
"assets/assets/fonts/avenir_ff/AvenirLTStd-Book.otf": "ecb0c2ae369ba2a89d9a1ec2a1b3187b",
"assets/assets/fonts/avenir_ff/AvenirLTStd-Roman.otf": "b1d7c6e085a31e9f5e4745c9aef6eb4b",
"assets/assets/fonts/Rubik/Rubik-Black.ttf": "2a3b9f77607c7b691e81090c4edba341",
"assets/assets/fonts/Rubik/Rubik-BlackItalic.ttf": "db5b8553106c0268251f65367ecfc3a0",
"assets/assets/fonts/Rubik/Rubik-Bold.ttf": "627d0e537f4a06a535ae956e4a87837f",
"assets/assets/fonts/Rubik/Rubik-BoldItalic.ttf": "dc069fd43e202359cfef038ce28b20ac",
"assets/assets/fonts/Rubik/Rubik-ExtraBold.ttf": "34215c81c17466f7aa764b441fa348df",
"assets/assets/fonts/Rubik/Rubik-ExtraBoldItalic.ttf": "5f439e081a4e2980f8368285f7d0f8c9",
"assets/assets/fonts/Rubik/Rubik-Italic.ttf": "17538a8196fb1d1fab888c5941acf9ec",
"assets/assets/fonts/Rubik/Rubik-Light.ttf": "86699cab89559b6f5ffd4887cb5c7a7c",
"assets/assets/fonts/Rubik/Rubik-LightItalic.ttf": "ac5353ac12658ccfd7eca99a25be7037",
"assets/assets/fonts/Rubik/Rubik-Medium.ttf": "e785acbf5775e9bec2129f4967a75472",
"assets/assets/fonts/Rubik/Rubik-MediumItalic.ttf": "4790a18709e781a0994dc17d04fd66f5",
"assets/assets/fonts/Rubik/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/assets/fonts/Rubik/Rubik-SemiBold.ttf": "742cf1e6b879de2de937aa287fddece4",
"assets/assets/fonts/Rubik/Rubik-SemiBoldItalic.ttf": "a8a77ad44dbe8c031ce7b5442661610f",
"assets/assets/icons/facebookIcon.png": "828bde99da1917001bb7db41856d7d44",
"assets/assets/icons/googleIcon.png": "4cfb5a7217a592e4cf598fa78c1feca8",
"assets/assets/images/home_01.png": "5ca9fd231e59be895d9bd4a9c0200b3c",
"assets/assets/images/home_w_01.png": "6576f375175fb79a6955bb20303a2fb4",
"assets/assets/images/home_w_02.png": "c9e6a06bfc1d4e61bee18359e64b0ac7",
"assets/assets/images/home_w_03.png": "c0d858a929cfecd6a775d0a0bba724c3",
"assets/assets/images/home_w_04.png": "873d8f4f1ae3050073f49c0a7d841432",
"assets/assets/images/home_w_05.png": "cdd04a25f756c99384f0a6e34fa0bbaa",
"assets/assets/images/laptop/01.png": "da2b033e378713dacab1e1aecc97c698",
"assets/assets/images/laptop/02.png": "be92ebe5f98704fb0f317f7e1fa8ed95",
"assets/assets/images/laptop/03.png": "2c5785d589bebf3f1eefed2477015e4a",
"assets/assets/images/laptop/04.png": "a72cafcdc7b48b50c2c8a5bfb46b8363",
"assets/assets/images/logo.png": "9ed0d6f1e312e1409685622d63d414b0",
"assets/assets/images/NA/01.png": "b79af0d6954222cea206935478e4bf8c",
"assets/assets/images/NA/02.png": "aab320e5e3f479893655e61f81cab346",
"assets/assets/images/NA/03.png": "ae92dd5d9c66e2960b4f08146fc667a4",
"assets/assets/images/NA/04.png": "3c36bed9ddc21bd533d1029f05e9c2a5",
"assets/assets/images/NC/01.png": "ecba1f01caae9750b3efa24b1ef96171",
"assets/assets/images/NC/02.png": "a837a69a5ab99713f063b1ce9c7e333b",
"assets/assets/images/NC/03.png": "ebe27d34b41d0dc431ca389072fef38d",
"assets/assets/images/NC/04.png": "2fe3eb44f17aee2674c4c4f3bb036f85",
"assets/assets/images/NC/05.png": "844c3fa552739c1699625e5feddd2889",
"assets/assets/images/onboarding/01.png": "52a7851ca678b9ebf781a58e51e18020",
"assets/assets/images/VI/01.png": "8c86c9ede48be107e382befc0d0056f9",
"assets/assets/images/VI/02.png": "3a2ec2b885ff6978f45c29e047550e47",
"assets/assets/images/VI/03.png": "1ac5e60a772362039b743caa823f20fc",
"assets/FontManifest.json": "6e93ec515888b0ac709d2a76c85681df",
"assets/fonts/MaterialIcons-Regular.otf": "464f83e94f5d41c54cb2f21cb3fece10",
"assets/NOTICES": "256073170e672a1b03493ed8fda0f578",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "56502a2ca103e71898ddf42b5d8e36d3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
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
"index.html": "e2c4da830a8d1cdc6b34feb8819aaeb0",
"/": "e2c4da830a8d1cdc6b34feb8819aaeb0",
"main.dart.js": "918bd554e9720edefe7fa8cbac95223f",
"manifest.json": "7c940331b7e780aeb97cba7dc4bdc887",
"splash/img/dark-1x.png": "fdfdde02bdcb9021bfc70a15aa4f738e",
"splash/img/dark-2x.png": "92f0c0ecbaef60053df885ecccdb4904",
"splash/img/dark-3x.png": "99d482b03f23727103ecdc1eb394bd13",
"splash/img/dark-4x.png": "1b199f638bfc50d3af770ff95de12cf1",
"splash/img/light-1x.png": "fdfdde02bdcb9021bfc70a15aa4f738e",
"splash/img/light-2x.png": "92f0c0ecbaef60053df885ecccdb4904",
"splash/img/light-3x.png": "99d482b03f23727103ecdc1eb394bd13",
"splash/img/light-4x.png": "1b199f638bfc50d3af770ff95de12cf1",
"version.json": "d8f753bec374000b902dc907903a6e0a"};
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
