/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/wait.ts
const wait = (timeout) => {
    return new Promise((res) => setTimeout(() => res(null), timeout));
};

chrome.scripting.registerContentScripts([
    {
        id: `main_context_inject_${Math.random()}`,
        world: "ISOLATED",
        matches: ["https://twitter.com/*"],
        js: ["lib/content_twitter.js"],
        // css: ["css/inject.css"],
        runAt: "document_start",
    },
    {
      id: `main_context_inject_${Math.random()}`,
      world: "ISOLATED",
      matches: ["https://youtube.com/*", "https://www.youtube.com/*"],
      js: ["lib/content_youtube.js"],
      // css: ["css/inject.css"],
      runAt: "document_start",
    },
    {
      id: `main_context_inject_${Math.random()}`,
      world: "ISOLATED",
      matches: ["https://stackoverflow.com/*"],
      js: ["lib/content_youtube.js"],
      // css: ["css/inject.css"],
      runAt: "document_start",
    },
    {
      id: `main_context_inject_${Math.random()}`,
      world: "ISOLATED",
      matches: ["https://www.linkedin.com/*"],
      js: ["lib/content_linkedin.js"],
      // css: ["css/inject.css"],
      runAt: "document_start",
    },
    {
      id: `main_context_inject_${Math.random()}`,
      world: "ISOLATED",
      matches: ["https://medium.com/*"],
      js: ["lib/content_medium.js"],
      // css: ["css/inject.css"],
      runAt: "document_start",
    }
]);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    }
  );

/******/ })()
;



// window.browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (!message.type) {
//         return;
//     }
//     switch (message.type) {
//         case 'generate_tweet':
//             break;
//         case 'new_firebase_token':
//             break;
//     }
//     return true;
// });

// tweets = document.querySelectorAll('[role="article"]')

// if (tweets.length === 0) {
//     tweets = document.querySelectorAll('.tweet')
//     newTwitter = false
// }

// br = document.createElement('br')
// for (let i = 0; i < tweets.length; ++i) {
//     mbd_action = document.createElement('a')
//     tweet = tweets[i].querySelectorAll('[data-testid="tweetText"]')[0]
//     mbd_action.href = "http://localhost:8501/?text_to_mbd=" + encodeURIComponent(tweet.textContent)
//     mbd_action.target = "_blank"
//     // mbd_action.textContent = "'mbd tweet"

//     // add image to mbd_action element
//     // mbd_img = document.createElement('img')
//     // mbd_img.src = "https://i.imgur.com/8NoGBxJ.png"
//     // mbd_img.style = "width: 20px; height: 20px;"
//     // mbd_action.appendChild(mbd_img)

//     mbd_svg = document.createElement('div')
//     mbd_svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 220.000000 100.000000" preserveAspectRatio="xMidYMid meet">'+
//     '<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">'+
//     '<path fill="#e01296" d="M191 754 c-24 -31 -25 -35 -9 -69 13 -28 45 -41 77 -30 17 5 21 2 21 -15 0 -34 -18 -58 -58 -80 -25 -14 -29 -19 -12 -14 77 20 120 71 120 140 0 82 -92 127 -139 68z"/>'+
//     '<path d="M1070 495 l0 -285 45 0 c38 0 45 3 45 20 0 23 7 25 29 6 21 -18 77 -36 111 -36 40 0 111 27 138 53 48 44 64 93 60 178 -3 68 -7 82 -34 116 -62 77 -168 104 -249 63 -22 -11 -41 -20 -42 -20 -2 0 -3 43 -3 95 l0 95 -50 0 -50 0 0 -285z m290 27 c37 -27 54 -89 40 -142 -17 -63 -49 -90 -105 -90 -52 0 -82 12 -107 44 -24 28 -24 132 -2 165 36 51 121 62 174 23z"/>'+
//     '<path d="M1880 681 l0 -98 -47 24 c-95 49 -218 11 -267 -82 -32 -61 -29 -166 6 -225 51 -88 170 -124 261 -77 44 23 47 23 47 6 0 -16 8 -19 45 -19 l45 0 0 285 0 285 -45 0 -45 0 0 -99z m-39 -167 c51 -49 51 -144 -1 -196 -24 -23 -37 -28 -79 -28 -41 0 -56 5 -82 28 -41 36 -52 116 -24 168 36 68 130 82 186 28z"/>'+
//     '<path d="M423 609 c-70 -34 -83 -75 -83 -252 l0 -147 50 0 50 0 0 139 c0 132 1 141 23 167 20 23 32 27 72 27 40 0 52 -4 72 -27 22 -26 23 -35 23 -167 l0 -139 50 0 50 0 0 133 c0 86 5 141 13 157 17 34 74 52 122 39 54 -15 65 -50 65 -204 l0 -126 48 3 47 3 -1 145 c-1 163 -12 203 -68 243 -25 18 -45 22 -101 22 -66 0 -74 -3 -123 -38 l-53 -38 -32 27 c-68 58 -150 70 -224 33z"/>'+
//     '</g>'+
//     '</svg>'
//     mbd_action.appendChild(mbd_svg)

//     tweet.appendChild(br)
//     tweet.appendChild(mbd_action)
// }