/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
console.log("injecting mbd");

function inject_mbd() {
  console.log("injecting mbd");

  let buttonHolder = document.querySelector('ytd-menu-renderer.ytd-watch-metadata');

  if (buttonHolder) {
    let mbd_action = document.createElement('a')

    

    mbd_action.onclick = async () => {

      let last_div = document.createElement('div')
      last_div.id = "pixiebrix-extension"
      let title = document.querySelector('h1 > yt-formatted-string').textContent;
      let username = document.querySelector('ytd-channel-name a').textContent;
      let img = document.querySelector('ytd-video-owner-renderer img').src;

      let mbd_sidebar = document.createElement('iframe')
      const params = new URLSearchParams({
        text_to_mbd: title,
        username: username,        
        avatar_url: img, 
      });

      // mbd_sidebar.src="http://localhost:8501/?text_to_mbd=" + encodeURIComponent(tweet.textContent)
      mbd_sidebar.src="https://app.mbd.xyz/?" + params.toString();
      mbd_sidebar.style="position: fixed;top: 0px;right: 0px;z-index: 2147483645;width: 550px;height: 100%;border-width: 0px 0px 0px 1px;border-top-style: initial;border-right-style: initial;border-bottom-style: initial;border-left-style: solid;border-top-color: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: lightgray;border-image: initial;background: rgb(239, 232, 251);"
      
      // add sidebar after <body> tag
      last_div.appendChild(mbd_sidebar)

      document.getElementsByTagName('html')[0].appendChild(last_div)
      


      const response = await chrome.runtime.sendMessage({greeting: "hello"});
      // do something with response here, not outside the function
      console.log(response);
    };

    mbd_action.target = "_blank"
    // mbd_action.textContent = "'mbd video"

    let mbd_svg = document.createElement('div')
    mbd_svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 220.000000 100.000000" preserveAspectRatio="xMidYMid meet">'+
    '<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">'+
    '<path fill="#e01296" d="M191 754 c-24 -31 -25 -35 -9 -69 13 -28 45 -41 77 -30 17 5 21 2 21 -15 0 -34 -18 -58 -58 -80 -25 -14 -29 -19 -12 -14 77 20 120 71 120 140 0 82 -92 127 -139 68z"/>'+
    '<path d="M1070 495 l0 -285 45 0 c38 0 45 3 45 20 0 23 7 25 29 6 21 -18 77 -36 111 -36 40 0 111 27 138 53 48 44 64 93 60 178 -3 68 -7 82 -34 116 -62 77 -168 104 -249 63 -22 -11 -41 -20 -42 -20 -2 0 -3 43 -3 95 l0 95 -50 0 -50 0 0 -285z m290 27 c37 -27 54 -89 40 -142 -17 -63 -49 -90 -105 -90 -52 0 -82 12 -107 44 -24 28 -24 132 -2 165 36 51 121 62 174 23z"/>'+
    '<path d="M1880 681 l0 -98 -47 24 c-95 49 -218 11 -267 -82 -32 -61 -29 -166 6 -225 51 -88 170 -124 261 -77 44 23 47 23 47 6 0 -16 8 -19 45 -19 l45 0 0 285 0 285 -45 0 -45 0 0 -99z m-39 -167 c51 -49 51 -144 -1 -196 -24 -23 -37 -28 -79 -28 -41 0 -56 5 -82 28 -41 36 -52 116 -24 168 36 68 130 82 186 28z"/>'+
    '<path d="M423 609 c-70 -34 -83 -75 -83 -252 l0 -147 50 0 50 0 0 139 c0 132 1 141 23 167 20 23 32 27 72 27 40 0 52 -4 72 -27 22 -26 23 -35 23 -167 l0 -139 50 0 50 0 0 133 c0 86 5 141 13 157 17 34 74 52 122 39 54 -15 65 -50 65 -204 l0 -126 48 3 47 3 -1 145 c-1 163 -12 203 -68 243 -25 18 -45 22 -101 22 -66 0 -74 -3 -123 -38 l-53 -38 -32 27 c-68 58 -150 70 -224 33z"/>'+
    '</g>'+
    '</svg>'
    mbd_action.appendChild(mbd_svg)

    buttonHolder.prepend(mbd_action)
  } else {
    console.log("buttonHolder not found");
  }
}

setTimeout(inject_mbd, 8000);

/******/ })()
;