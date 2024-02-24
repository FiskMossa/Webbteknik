
var imagePool = [
    "insta1.png",
    "insta2.png",
    "insta3.png",
    "insta4.png",
    "insta5.png",
    "insta6.png",
    "insta7.png",
    "insta8.png",
    "insta9.png",
    "insta10.png"
];

// Function to shuffle the array randomly
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the imagePool array
shuffleArray(imagePool);

// Select the first four images from the shuffled array and set their src attributes
document.getElementById("img1").src = imagePool[0];
document.getElementById("img2").src = imagePool[1];
document.getElementById("img3").src = imagePool[2];
document.getElementById("img4").src = imagePool[3];