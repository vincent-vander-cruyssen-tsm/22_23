document.querySelector('video').playbackRate = 0.1;
var vidLength = Math.round(document.querySelector('video').duration) - 1;
var randPlay = Math.random() * vidLength;
document.querySelector('video').currentTime = randPlay;
console.log(randPlay);

shuffleOriginal();

function shuffleOriginal() {
    $('.child').hide();
    var shuffleOGin = Math.random() * 500;
    console.log('shuffleOGin', shuffleOGin);
    setTimeout(shuffleDiffuse, shuffleOGin);
}

function shuffleDiffuse() {
    $('.child').show();
    var shuffleDin = Math.random() * 500;
    console.log('shuffleDin', shuffleDin);
    setTimeout(shuffleOriginal, shuffleDin);
}