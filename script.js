window.addEventListener("load", main);

/*
Vidéos à lire :
http://techslides.com/demos/sample-videos/small.mp4
http://bc05.ajmn.me/665003303001/201710/374/665003303001_5617661718001_5617657878001.mp4
http://bc05.ajmn.me/665003303001/201705/3620/665003303001_5420202264001_5420192998001.mp4
http://bc05.ajmn.me/665003303001/201704/2247/665003303001_5396941777001_5396902528001.mp4
http://bc05.ajmn.me/665003303001/201703/3355/665003303001_5377676222001_5377493501001.mp4

document.getElementById("p1").innerHTML = "New text!";
*/

function main() {

  var video = document.getElementById("video1");
  var i = 0;
  var playlistIndex = 0;
  var tabPlaylist = [];

  document.getElementById('play').addEventListener('click', play);
  document.getElementById('pause').addEventListener('click', pause);
  document.getElementById('next').addEventListener('click', next);
  document.getElementById('previous').addEventListener('click', previous);
  document.getElementById('muteUnmute').addEventListener('click', mute);
  document.getElementById('addTab').addEventListener('click', addTab);
  document.getElementById('deleteTab').addEventListener('click', deleteTab);
  document.getElementById('move').addEventListener('click', move);
  document.getElementById('fs').addEventListener('click', fullscreen);
  document.getElementById('sourceVideo').src = "";
  video.load();
  video.onended = function() {
    next();
    deleteTab();
  };
  video.autoplay = true;


  function addTab() {
    //ajout de l'input url au tableau
    if (document.getElementById('urlToAdd').value === "") {
      console.log("Empty input");
    }
    else {
      tabPlaylist.push(document.getElementById('urlToAdd').value);
      playtlistView();

      //si la playlist est vide, on lit le 1er url instant
      if (tabPlaylist.length == 1) {
        document.getElementById('sourceVideo').src = tabPlaylist[0];
        video.load();
      }
      consoleDebug();
    }
  }

  function deleteTab() {
    var indexToDelete = document.getElementById("indexToDelete").value;

    //suppression dans le tableau
    tabPlaylist.splice(indexToDelete, 1);

    playtlistView();
    consoleDebug();
  }

  function move() {
    var currentIndex = document.getElementById("currentIndex").value;
    var newIndex = document.getElementById("newIndex").value;

    if (newIndex >= tabPlaylist.length) {
        var k = newIndex - tabPlaylist.length;
        while ((k--) + 1) {
            tabPlaylist.push(undefined);
        }
    }
    tabPlaylist.splice(newIndex, 0, tabPlaylist.splice(currentIndex, 1)[0]);

    playtlistView();
    consoleDebug();
  }

  function up() {
    console.log("up");
  }
  function down() {
    console.log("down");
  }

  function play() {
    console.log("play");
    video.play();
  }
  function pause() {
    console.log("pause");
    video.pause();
  }

  function next() {
    playlistIndex++;
    //si on arrive à la fin de la playlist
    if (playlistIndex >= tabPlaylist.length) {
      playlistIndex = 0;
    }
    document.getElementById('sourceVideo').src = tabPlaylist[playlistIndex];
    video.load();
  }
  function previous() {
    //si on arrive au début de la playlist
    if (playlistIndex <=0) {
      playlistIndex = tabPlaylist.length;
    }
    playlistIndex--;
    document.getElementById('sourceVideo').src = tabPlaylist[playlistIndex];
    video.load();
  }

  window.SetVolume = function(val)
  {
    video.volume = val / 100;
    console.log('Volume : ' + video.volume);
  };

  function mute() {
    console.log("mute");
    var video = document.getElementById('video1');
    video.muted = !video.muted;
  }

  function fullscreen() {
	var fullscreen = document.getElementById('fs');
	var video = document.getElementById('video1');
	
	var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video1').webkitRequestFullScreen);
								
	if (!fullScreenEnabled) {
		fullscreen.style.display = 'none';
	}
	
	fs.addEventListener('click', function(e) {
		handleFullscreen();
	});

	var handleFullscreen = function() {
	   if (isFullScreen()) {
		  if (document.exitFullscreen) document.exitFullscreen();
		  else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
		  else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
		  else if (document.msExitFullscreen) document.msExitFullscreen();
		  setFullscreenData(false);
	   }
	   else {
		  if (video.requestFullscreen) video.requestFullscreen();
		  else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
		  else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();
		  else if (video.msRequestFullscreen) video.msRequestFullscreen();
		  setFullscreenData(true);
	   }
	};

	var isFullScreen = function() {
		return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
	};

	var setFullscreenData = function(state) {
	   video.setAttribute('data-fullscreen', !!state);
	};

	document.addEventListener('fullscreenchange', function(e) {
	   setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
	});
	document.addEventListener('webkitfullscreenchange', function() {
	   setFullscreenData(!!document.webkitIsFullScreen);
	});
	document.addEventListener('mozfullscreenchange', function() {
	   setFullscreenData(!!document.mozFullScreen);
	});
	document.addEventListener('msfullscreenchange', function() {
	   setFullscreenData(!!document.msFullscreenElement);
	});
  }

  function playtlistView() {
    //On affiche la liste dans l'HTML pour l'utilisateur
    var iForA;
    var text = "<tr>"+
                  "<th>"+
                    "Rank"+
                  "</th>"+
                  "<th>"+
                    "URL"+
                  "</th>"+
                "</tr>";
    for (iForA=0; iForA < tabPlaylist.length; iForA++) {
      //text = text + "<br>Rank : " + iForA + "<br>URL : " + tabPlaylist[iForA] + "<br>";
      text = text + "<tr>" +
                      "<td>" + iForA + "</td>" +
                      "<td>" + tabPlaylist[iForA] + "</td>" +
                      //"<td>" + "<button id=" + "deleteTabTest" + " type=" + "submit" + " onclick=" + "getId(this)" + ">Delete</button>" + "</td>" +
                    "</tr>";
    }
    //document.getElementById("liste").innerHTML = text;
    document.getElementById("table").innerHTML = text;
  }

  function getId() {
    console.log("row" + element.closest('tr').rowIndex + " -column" + element.closest('td').cellIndex);
  }

  function consoleDebug() {
    //affichage pour débogage
    var iFor;
    console.log("La playlist est composée de : ");
    for (iFor=0; iFor < tabPlaylist.length; iFor++) {
      console.log(tabPlaylist[iFor]);
    }
  }







  //problème avec le splice & la suppression dans l'affichagen, tout se décale
  /*
    function addTab() {
      //ajout de l'input url au tableau
      tabPlaylist.push(document.getElementById('urlToAdd').value);

      var clone = document.getElementsByClassName("modeleVideo")[0];
      var divClone = clone.cloneNode(true);
      divClone.id = i;
      document.getElementsByClassName("modeleVideo")[0].parentNode.appendChild(divClone);
      divClone.getElementsByTagName("button")[2].addEventListener('click', deleteTab);
      i++;

      //affichage du rang et de l'url
      document.getElementById("rankIndex").innerHTML = i;
      document.getElementById("urlTable").innerHTML = document.getElementById('urlToAdd').value;

      //si la playlist est vide, on lit le 1er url instant
      if (tabPlaylist.length == 1) {
        document.getElementById('sourceVideo').src = tabPlaylist[0];
        video.load();
      }

      //affichage pour debogage
      var iFor;
      console.log("La playlist est composée de : ");
      for (iFor=0; iFor < tabPlaylist.length; iFor++) {
        console.log(tabPlaylist[iFor]);
      }
  }
  */

  /*
    function deleteTab() {
      console.log("DELETE");

      //suppression en affichage
      var id = this.parentNode.id;
      document.getElementById(id).remove();

      //suppression dans le tableau
      console.log("l'ID de cet objet est ---- : " + id);
      tabPlaylist.splice(id, 1);

      //affichage pour débogage
      var iFor;
      console.log("La playlist est composée de : ");
      for (iFor=0; iFor < tabPlaylist.length; iFor++) {
        console.log(tabPlaylist[iFor]);
      }
    }
  */

}
