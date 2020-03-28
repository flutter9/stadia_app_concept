'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/games/assassins_creed_odyssey.jpg": "2d5bbf0a5f291b2f1247742edcb524c8",
"/assets/assets/games/apex_legends.jpg": "eaf288eda2e3c5307416056b23919ea8",
"/assets/assets/games/no_mans_sky.jpeg": "7dbdc7a3d4b56399adde11dff2fd056b",
"/assets/assets/games/pubg.png": "7d4ba336346de6fa26164ec5a62b1044",
"/assets/assets/games/dead_cells.jpg": "3112331b67173c091374048ea479b01a",
"/assets/assets/games/fortnite.jpg": "5aaaacc8152e8e73261cb8b11fabf5b1",
"/assets/assets/games/sekiro.png": "30361a5f4b2dd17120d302aa4e2e4243",
"/assets/assets/games/stardew_valley.jpeg": "d695388cbdc9f6915cc596ce93daacee",
"/assets/assets/images/stadia_logo.svg": "e062a9d2d4e9c047391eba3d13342e72",
"/assets/assets/images/stadia_dribbble.png": "c0b012202cb0a4f196355fb193ad2a47",
"/assets/assets/players/jeenie_duhe.jpg": "df16d23d0f64bde084dbf6f93f71c3c7",
"/assets/assets/players/trish_ammons.jpg": "d1281962156dcf42c002175f6b0bc7ba",
"/assets/assets/players/michelle_chong.jpg": "4d79e6a697777987e75e79b6a94f748e",
"/assets/assets/players/gena_sedgwick.jpg": "98511ee98a1930b8938e42caf0904d2d",
"/assets/assets/players/jon_snow.jpeg": "bf8466dc19c80a5e8c7bb5d4e8a12371",
"/assets/assets/fonts/Oxygen-Bold.ttf": "3ada7a9482cb9a123ad501e45053adb3",
"/assets/assets/fonts/Oxygen-Light.ttf": "dfefd7db6a479b1161e9f0f9cb0abb8d",
"/assets/assets/fonts/Oxygen-Regular.ttf": "61d9daf063ba38f2d05f8adb7267e6fd",
"/assets/FontManifest.json": "511a0c9c7d5fc45f52cecd159a6dd52b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "ff1e62ec0707b92747ed89e7ba4fda43",
"/assets/LICENSE": "52c1a42f8f6f25cebb79e1a9143d1d08",
"/main.dart.js": "bd859d5e6ba78facc1598bd657d95b16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
