/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//YouTube字幕の取得
let param = location.search;
console.log(param)
fetch('https://oudi6xgb04.execute-api.ap-northeast-1.amazonaws.com/default/GetYoutubeInfo/' + param, {method: 'GET', mode: 'cors'})
.then(res => res.json())
.then(data => {
    let textModMsg = document.getElementById('text-mod-msg');
    textModMsg.textContent = data[0]['text'];
    console.log(data[0]['text'])
})

//YouTube動画情報の取得
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//YouTube動画の埋め込み
var player;
var youtubeid = param.slice(7)
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		width: '640',
		height: '360',
		videoId: youtubeid,
		playerVars: {
			autoplay: 1 //自動再生の設定
		}
	});
}

//パラメータの設定
function update(){
    param.set(param, '?=lPVqtC8bxH0');
};
