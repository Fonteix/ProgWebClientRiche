window.addEventListener("load", main);

function main() {

  var video = document.getElementById("video1");
  var i = 0;
  var url1 = "http://bc05.ajmn.me/665003303001/201710/374/665003303001_5617661718001_5617657878001.mp4";
  var url2 = "http://bc05.ajmn.me/665003303001/201705/3620/665003303001_5420202264001_5420192998001.mp4?playerId=2767704865001&videoId=5420192998001"
  var iURL = 1;

  document.getElementById('play').addEventListener('click', play);
  document.getElementById('pause').addEventListener('click', pause);
  document.getElementById('next').addEventListener('click', next);
  document.getElementById('previous').addEventListener('click', previous);
  document.getElementById('muteUnmute').addEventListener('click', mute);
  document.getElementById('volUp').addEventListener('click', volUp);
  document.getElementById('volDown').addEventListener('click', volDown);
  document.getElementById('add').addEventListener('click', add);
  document.getElementById('delete1').addEventListener('click', delete1); //On l'appel delete1 car delete est réservé
  document.getElementById('sourceVideo').src = url1;
  video.load();


  function play() {
    console.log("play");
    video.play();
  }

  function pause() {
    console.log("pause");
    video.pause();
  }

  function next() {
    console.log("next");
    iURL++;
    document.getElementById('sourceVideo').src = url2;
    video.load();
  }

  function previous() {
    console.log("previous");
    iURL--;
    document.getElementById('sourceVideo').src = url1;
    video.load();
  }
  function volUp() {
    console.log("Volume up");
    alterVolume('+');
  }

  function volDown() {
    console.log("Volume down");
    alterVolume('-');
  }

  var alterVolume = function(dir) {
    var video = document.getElementById('video1');
    var currentVolume = Math.floor(video.volume * 10)/10;
    if(dir === '+') {
      if(currentVolume<1) {
        video.volume += 0.1;
      }
    }
    else if(dir === '-') {
      if(currentVolume>0) {
        video.volume -= 0.1;
      }
    }
  }

  function mute() {
    console.log("mute");
    var video = document.getElementById('video1');
    video.muted = !video.muted;
  }

  function add() {
    var clone = document.getElementsByClassName("modeleVideo")[0];
    var divClone = clone.cloneNode(true);
    divClone.id = i;
    document.getElementsByClassName("modeleVideo")[0].parentNode.appendChild(divClone);
    divClone.getElementsByTagName("button")[0].addEventListener('click', delete1);
    i++;
  }

  function delete1() {
    console.log("delete1");
    var id = this.parentNode.id;
    document.getElementById(id).remove();
  }

}
