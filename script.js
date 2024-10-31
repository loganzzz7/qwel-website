// qwel pic modal
let qwelCurrentIndex = 0;
let qwelModal = document.getElementById("qwelModal");
let qwelPlaceHolderImg = document.getElementById("qwelPlaceHolderImg");
let qwelPicture = document.querySelectorAll(".coolImage");

// qwel modal left right btn
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

const images = [
    'images/dinner.png',
    'images/freakbob.jpg',
    'images/heidicartman.jpg'
];

qwelPicture.forEach(function (image, index) {
    image.addEventListener("click", function () {
        qwelCurrentIndex = index;
        qwelModal.style.display = "block";
        qwelPlaceHolderImg.src = images[qwelCurrentIndex];

        document.getElementsByClassName("closeBtn")[0].onclick = function () {
            qwelModal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == qwelModal) {
                qwelModal.style.display = "none";
            }
        }
    })
});

leftBtn.addEventListener("click", function () {
    if (qwelCurrentIndex > 0) {
        qwelCurrentIndex--;
        qwelPlaceHolderImg.src = images[qwelCurrentIndex];
    } else {
        qwelCurrentIndex = images.length - 1;
        qwelPlaceHolderImg.src = images[qwelCurrentIndex];
    }
});


rightBtn.addEventListener("click", function () {
    if (qwelCurrentIndex < images.length - 1) {
        qwelCurrentIndex++;
        qwelPlaceHolderImg.src = images[qwelCurrentIndex];
    } else {
        qwelCurrentIndex = 0;
        qwelPlaceHolderImg.src = images[qwelCurrentIndex];
    }
});

// move cat
const moveCat = document.getElementById("movecat");
var count = 0;
const form = "<a href=\"https://forms.gle/nknQQvWBLdUcNTvXA\" target=\"_blank\">form</a>"
moveCat.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (window.innerWidth - 112) + 56);
    const j = Math.floor(Math.random() * (window.innerHeight - 112) + 56);
    moveCat.style.left = i + 'px';
    moveCat.style.top = j + 'px';
    count += 1;

    // msg update lol
    const boredMsg = document.querySelector(".qwelTxt");
    if (count > 0 && count <= 5) {
        boredMsg.innerHTML = "Yoo, isn't this kinda fun. You should keep trying to catch the cat";
        boredMsg.style.fontSize = "medium";
        moveCat.style.width = "6rem";
        moveCat.style.height = "6rem";
    } else if (count > 5 && count <= 10) {
        boredMsg.innerHTML = "Damn you're almost there. Keep going.";
        boredMsg.style.fontSize = "large";
        moveCat.style.width = "5rem";
        moveCat.style.height = "5rem";
    } else if (count > 10 && count <= 20) {
        boredMsg.innerHTML = "Almostttttt.";
        boredMsg.style.fontSize = "x-large";
        moveCat.style.width = "4rem";
        moveCat.style.height = "4rem";
    } else if (count > 20) {
        boredMsg.innerHTML = "Yay, you just spent more time rotting! You're definitely number one (out of the 10 Camilles). Please fill out this " + form + ".";
        boredMsg.style.fontSize = "xx-large";
        moveCat.style.width = "7rem";
        moveCat.style.height = "7rem";
    }
});