window.addEventListener("load", main);

function main() {
    document.getElementById('play').addEventListener('click', play);
    document.getElementById('pause').addEventListener('click', pause);
    document.getElementById('next').addEventListener('click', next);
    document.getElementById('previous').addEventListener('click', previous);
    document.getElementById('mute/unmute').addEventListener('click', mute);
	document.getElementById('volUp').addEventListener('click', volUp);
	document.getElementById('volDown').addEventListener('click', volDown);
}

function play() {
    console.log("play");
}

function pause() {
    console.log("pause");
}

function next() {
    console.log("next");
}

function previous() {
    console.log("previous");
}
function volUp() {
	alterVolume('+');
}

function volDown() {
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
	var video = document.getElementById('video1');
	video.muted = !video.muted;
}
