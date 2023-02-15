const submitButton = document.getElementById("submit");
const ratingButtons = [];
const containerRating = document.getElementById("container-rating")
const starContainer = document.getElementById("star");
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const thankYou = document.getElementById("thank-you");
const imageContainer = document.getElementById("image-container");
const selectedInfo = document.getElementById("selected-info");
const selectedText = document.getElementById("selected-text");

selectedInfo.style.display = "none";

let clickedButton = 0;

for (var i = 1; i <= 5; i++) {
    ratingButtons.push(document.getElementById("rating-button-" + i));
}

//Event listeners
submitButton.addEventListener("click", submitClick);
for (var i = 0; i <= 5; i++) {
    ratingButtons[i].addEventListener("click", (function(index) {
        return function() {
            buttonClicked(index);
        }
    })(i));
}

function submitClick() {
    submitButton.style.backgroundColor="#ffffff";
    submitButton.style.color= "hsl(25, 97%, 53%)";
    thankYouState();
}

function buttonClicked(buttonIndex) {
    for (var i = 0; i <= 5; i++) {
        if (i == buttonIndex) {
            ratingButtons[i].style.backgroundColor = "hsl(25, 97%, 53%)";
            clickedButton = i + 1;

        } else {
            ratingButtons[i].style.backgroundColor = "#262f38";
        }
    }
}

function thankYouState() {
    submitButton.style.display = "none";
    containerRating.style.display = "none"

    title.innerHTML = "Thank you!";
    title.style.textAlign = "center";
    title.style.fontWeight = "600";

    paragraph.innerHTML = "We appreciate you taking the time to give a rating. If you need more support, don't hesitate to get in touch!";
    paragraph.style.textAlign = "center";
    paragraph.style.paddingBottom = "0.6rem";

    starContainer.style.display = "none";

    thankYou.src = "./images/illustration-thank-you.svg";
    thankYou.style.marginLeft = "auto";
    thankYou.style.marginRight = "auto";
    thankYou.style.width = "50%"

    imageContainer.style.maxHeight = "100%"
    imageContainer.style.maxWidth = "100%"
    imageContainer.style.borderRadius = 0;
    imageContainer.style.backgroundColor = "inherit";

    selectedInfo.style.display = "block";
    selectedInfo.style.backgroundColor = "#262e38";
    selectedInfo.style.borderRadius = "2rem";
    selectedInfo.style.Width = "50%";
    selectedInfo.style.marginLeft = "auto";
    selectedInfo.style.marginRight = "auto";

    selectedInfo.style.paddingTop = "0.4rem";
    selectedInfo.style.paddingBottom = "0.4rem";
    selectedInfo.style.paddingLeft = "0.8rem";
    selectedInfo.style.paddingRight = "0.8rem";

    selectedText.innerHTML = "You selected " + clickedButton + " out of 5";
    selectedText.style.color = "hsl(25, 97%, 53%)";
    selectedText.style.textAlign = "center";
    selectedText.style.fontWeight = "400";
    selectedText.style.paddingTop = "4px";
}
