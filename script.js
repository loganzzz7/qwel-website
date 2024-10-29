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
    'images/freakbob.png',
    'images/heidicartman.png'
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

leftBtn.addEventListener("click", function() {
    if (qwelCurrentIndex > 0) {
        qwelCurrentIndex--;
        qwelPlaceHolderImg.src = images[qwelCurrentIndex];
    } else {
        qwelCurrentIndex = images.length - 1;
        qwelPlaceHolderImg.src = images[qwelCurrentIndex];
    }
});


rightBtn.addEventListener("click", function() {
    if (qwelCurrentIndex < images.length - 1) {
        qwelCurrentIndex++;
        qwelPlaceHolderImg.src = images[qwelCurrentIndex];
    } else {
        qwelCurrentIndex = 0;
        qwelPlaceHolderImg.src = images[qwelCurrentIndex];
    }
});