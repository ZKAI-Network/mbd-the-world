/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

function inject_mbd() {
  var tweets = document.querySelectorAll('[role="article"]');
  // console.log(tweets);
  
  if (tweets.length === 0) {
      tweets = document.querySelectorAll('.tweet')
  }
  
  let br = document.createElement('br');

  let last_div = document.createElement('div')
  last_div.id = "mbd-extension"
  last_div.style.display = 'none'

  let close_div = document.createElement('div')
  close_div.id = 'mbd-close'
  close_div.innerHTML = '<p style="font-family: monospace;" href="#">Close</p>'
  close_div.style="position: fixed;top: 35px;right: 9px;z-index: 2147483646;padding: 0px 5px;"

  close_div.onclick = async() => {
    document.getElementById('mbd-extension').style.display = 'none'
  }
  
  last_div.appendChild(close_div)
  document.getElementsByTagName('html')[0].appendChild(last_div)

  for (let i = 0; i < tweets.length; ++i) {
      let mbd_action = document.createElement('a')
      let tweet = tweets[i].querySelectorAll('[data-testid="tweetText"]')[0]
      // mbd_action.href = "http://localhost:8501/?text_to_mbd=" + encodeURIComponent(tweet.textContent)
      // mbd_action.target = "_blank"
    
      mbd_action.onclick = async () => {
        
        let element = document.getElementById("mbd-app");
        if (element != null){
          element.parentNode.removeChild(element);
        }
        

        let mbd_sidebar = document.createElement('iframe')
        mbd_sidebar.id = 'mbd-app'

        // mbd_sidebar.src= "https://app.mbd.xyz/?text_to_mbd=" + encodeURIComponent(tweet.textContent)

        const params = new URLSearchParams({
          'text_to_mbd' : tweets[i].querySelectorAll('[data-testid="tweetText"]')[0].textContent,
          'data_source' : "twitter",
          'item_id' : tweets[i].querySelectorAll('[data-testid=User-Name]')[0].getElementsByTagName('a')[2].href.split('/')[5],
          'user_id' : tweets[i].querySelectorAll('[data-testid=User-Name]')[0].textContent.split('@')[0],
          'username' : tweets[i].querySelectorAll('[data-testid=User-Name]')[0].textContent.split('@')[0],
          'avatar_url' : tweets[i].querySelectorAll('[data-testid=Tweet-User-Avatar]')[0].getElementsByTagName('img')[0].src,
          'published_at' : tweets[i].querySelectorAll('[data-testid=User-Name]')[0].getElementsByTagName('time')[0].dateTime,
          'replies_count' : 10,
          'recasts_count' : 1,
          'reactions_count' : 1,
          'item_url': tweets[i].querySelectorAll('[data-testid=User-Name]')[0].getElementsByTagName('a')[2].href,
        });

        mbd_sidebar.src= "https://2e4a-2603-8000-ae00-351-98b1-7859-32ae-e548.ngrok-free.app/?text_to_mbd=" + params.toString();
        mbd_sidebar.style="position: fixed;top: 0px;right: 0px;z-index: 2147483645;width: 575px;height: 100%;border-width: 0px 0px 0px 1px;border-top-style: initial;border-right-style: initial;border-bottom-style: initial;border-left-style: solid;border-top-color: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: lightgray;border-image: initial;background: rgb(239, 232, 251);"
        
        // add sidebar after <body> tag
        last_div.appendChild(mbd_sidebar)

        last_div.style.display = 'block'
        const response = await chrome.runtime.sendMessage({greeting: "hello"});
        // do something with response here, not outside the function
        console.log(response);
      };
      // mbd_action.textContent = "'mbd tweet"
  
      // add image to mbd_action element
      // mbd_img = document.createElement('img')
      // mbd_img.src = "https://i.imgur.com/8NoGBxJ.png"
      // mbd_img.style = "width: 20px; height: 20px;"
      // mbd_action.appendChild(mbd_img)
  
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
  
      tweet.appendChild(br)
      tweet.appendChild(mbd_action)
  }
}

setTimeout(inject_mbd, 5000);

/******/ })()
;