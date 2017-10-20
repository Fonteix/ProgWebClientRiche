window.addEventListener("load", main);

function main() {
    document.getElementById('play').addEventListener('click', play);
    document.getElementById('pause').addEventListener('click', pause);
    document.getElementById('next').addEventListener('click', next);
    document.getElementById('previous').addEventListener('click', previous);
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
