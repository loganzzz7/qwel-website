// pirate pic modal
let pirateCurrentIndex = 0;
let pirateModal = document.getElementById("pirateModal");
let piratePlaceHolderImg = document.getElementById("piratePlaceHolderImg");
let strawHatPicture = document.querySelectorAll(".pirateImage");

// pirate modal left right btn
let leftBtnPirate = document.getElementById("leftBtnPirate");
let rightBtnPirate = document.getElementById("rightBtnPirate");

const images = [
    'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg',
    'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg',
    'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg'
    ];

strawHatPicture.forEach(function (image, index) {
    image.addEventListener("click", function () {
        pirateCurrentIndex = index;
        pirateModal.style.display = "block";
        piratePlaceHolderImg.src = strawHatPicture[pirateCurrentIndex].src;

        document.getElementsByClassName("closeBtnPirate")[0].onclick = function () {
            pirateModal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == pirateModal) {
                pirateModal.style.display = "none";
            }
        }
    })
});

leftBtnPirate.addEventListener("click", function() {
    if (pirateCurrentIndex > 0) {
        pirateCurrentIndex--;
        piratePlaceHolderImg.src = strawHatPicture[pirateCurrentIndex].src;
    } else {
        pirateCurrentIndex = strawHatPicture.length -2;
        piratePlaceHolderImg.src = strawHatPicture[pirateCurrentIndex].src;
    }
});


rightBtnPirate.addEventListener("click", function() {
    if (pirateCurrentIndex < strawHatPicture.length -2) {
        pirateCurrentIndex++;
        piratePlaceHolderImg.src = strawHatPicture[pirateCurrentIndex].src;
    } else {
        pirateCurrentIndex = 0;
        piratePlaceHolderImg.src = strawHatPicture[pirateCurrentIndex].src;
    }
});