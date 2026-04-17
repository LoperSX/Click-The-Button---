let Score = Number(localStorage.getItem("DataScore"));
let ShadowColor = 0;

let ScoreOnSecond = 0;
let ScoreOnMinute = 0;

function PlaySoundClick() {
    let ClickSoundEffect = new Audio("Sounds/ClickSound.mp3");
     ClickSoundEffect.play();
};

setInterval(function () {
    ScoreOnSecond = 0;
    document.querySelector(".ScoreInS").innerText = ScoreOnSecond + ": s/1";
}, 1000);

setInterval(function () {
    ScoreOnMinute = 0;
    document.querySelector(".ScoreInMin").innerText = ScoreOnMinute + ": s/60";
}, 60 * 1000);

document.querySelector(".Text2").innerText = Score;
document.querySelector(".circle").onclick = function() {
    PlaySoundClick()

    Score ++;
    ScoreOnSecond ++;
    ScoreOnMinute ++;

    document.querySelector(".Text2").innerText = Score;
    document.querySelector(".ScoreInS").innerText = ScoreOnSecond + ": s/1";
    document.querySelector(".ScoreInMin").innerText = ScoreOnMinute + ": s/60";

    localStorage.setItem("DataScore", Score);

    if (Score >= 10000) {
        document.querySelector(".circle").style.backgroundColor = "rgb(243, 243, 243)";
        document.querySelector(".circle").style.border = "3px solid rgb(179, 179, 179)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(179, 179, 179)";
        document.querySelector(".Text").style.color = "rgb(111, 111, 111)";
        document.querySelector(".Text2").style.color = "rgb(111, 111, 111)";
        document.querySelector("body").style.background = "rgb(44, 44, 44)";
        document.querySelector(".ScoreInS").style.color = "rgb(111, 111, 111)";
        document.querySelector(".ScoreInMin").style.color = "rgb(111, 111, 111)";
        document.querySelector(".circle2").style.backgroundColor = "rgb(61, 61, 61)";
        document.querySelector(".circle2").style.border = "3px solid rgb(93, 93, 93)";

        ShadowColor = "0 6px 0px rgb(179, 179, 179)";
    } else if (Score >= 5000) {
        document.querySelector(".circle").style.backgroundColor = "rgb(238, 17, 131)";
        document.querySelector(".circle").style.border = "3px solid rgb(121, 11, 57)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(121, 11, 70)";
        document.querySelector(".Text").style.color = "rgb(116, 6, 56)";
        document.querySelector(".Text2").style.color = "rgb(116, 6, 56)";
        document.querySelector("body").style.background = "rgb(238, 17, 131)";
        document.querySelector(".ScoreInS").style.color = "rgb(116, 6, 56)";
        document.querySelector(".ScoreInMin").style.color = "rgb(116, 6, 56)";

        ShadowColor = "0 6px 0px rgb(121, 11, 57)"
    } else if (Score >= 2500) {
        document.querySelector(".circle").style.backgroundColor = "rgb(194, 17, 238)";
        document.querySelector(".circle").style.border = "3px solid rgb(110, 11, 121)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(121, 11, 119)";
        document.querySelector(".Text").style.color = "rgb(114, 6, 116)";
        document.querySelector(".Text2").style.color = "rgb(114, 6, 116)";
        document.querySelector("body").style.background = "rgb(212, 17, 238)";
        document.querySelector(".ScoreInS").style.color = "rgb(114, 6, 116)";
        document.querySelector(".ScoreInMin").style.color = "rgb(114, 6, 116)";

        ShadowColor = "0 6px 0px rgb(110, 11, 121)";
    } else if (Score >= 1000) {
        document.querySelector(".circle").style.backgroundColor = "rgb(238, 157, 17)";
        document.querySelector(".circle").style.border = "3px solid rgb(121, 86, 11)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(121, 66, 11)";
        document.querySelector(".Text").style.color = "rgb(116, 89, 6)";
        document.querySelector(".Text2").style.color = "rgb(116, 89, 6)";
        document.querySelector("body").style.background = "rgb(238, 168, 17)";
        document.querySelector(".ScoreInS").style.color = "rgb(116, 89, 6)";
        document.querySelector(".ScoreInMin").style.color = "rgb(116, 89, 6)";

        ShadowColor = "0 6px 0px rgb(121, 86, 11)";
    } else if (Score >= 500) {
        document.querySelector(".circle").style.backgroundColor = "rgb(238, 17, 201)";
        document.querySelector(".circle").style.border = "3px solid rgb(121, 11, 97)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(121, 11, 106)";
        document.querySelector(".Text").style.color = "rgb(116, 6, 103)";
        document.querySelector(".Text2").style.color = "rgb(116, 6, 103)";
        document.querySelector("body").style.background = "rgb(238, 17, 227)";
        document.querySelector(".ScoreInS").style.color = "rgb(116, 6, 103)";
        document.querySelector(".ScoreInMin").style.color = "rgb(116, 6, 103)";

        ShadowColor = "0 6px 0px rgb(121, 11, 97)";
    } else if (Score >= 250) {
        document.querySelector(".circle").style.backgroundColor = "rgb(17, 238, 219)";
        document.querySelector(".circle").style.border = "3px solid rgb(11, 121, 105)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(11, 121, 110)";
        document.querySelector(".Text").style.color = "rgb(6, 116, 107)";
        document.querySelector(".Text2").style.color = "rgb(6, 116, 107)";
        document.querySelector("body").style.background = "rgb(17, 238, 223)";
        document.querySelector(".ScoreInS").style.color = "rgb(6, 116, 107)";
        document.querySelector(".ScoreInMin").style.color = "rgb(6, 116, 107)";       

        ShadowColor = "0 6px 0px rgb(11, 121, 105)";
    } else if (Score >= 100) {
        document.querySelector(".circle").style.backgroundColor = "rgb(238, 227, 17)";
        document.querySelector(".circle").style.border = "3px solid rgb(121, 116, 11)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(121, 108, 11)";
        document.querySelector(".Text").style.color = "rgb(112, 116, 6)";
        document.querySelector(".Text2").style.color = "rgb(112, 116, 6)";
        document.querySelector("body").style.background = "rgb(238, 227, 17)";
        document.querySelector(".ScoreInS").style.color = "rgb(112, 116, 6)";
        document.querySelector(".ScoreInMin").style.color = "rgb(112, 116, 6)";  

        ShadowColor = "0 6px 0px rgb(121, 116, 11)";
    } else {
        document.querySelector(".circle").style.backgroundColor = "rgb(39, 255, 111)";
        document.querySelector(".circle").style.border = "3px solid rgb(11, 121, 59)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(11, 121, 55)";
        document.querySelector(".Text").style.color = "rgb(6, 116, 56)";
        document.querySelector(".Text2").style.color = "rgb(6, 116, 56)";
        document.querySelector("body").style.background = "rgb(39, 255, 111)";
        document.querySelector(".ScoreInS").style.color = "rgb(6, 116, 56)";
        document.querySelector(".ScoreInMin").style.color = "rgb(6, 116, 56)";

        ShadowColor = "0 6px 0px rgb(11, 121, 59)";
    }
}

let button = document.querySelector(".circle");

button.addEventListener("pointerdown", function() {
    button.style.boxShadow = " 0 1px 0.2px rgb(8, 18, 16)";

    button.style.transform = "translate(-50%, -43%)";
})

button.addEventListener("pointerenter", function() {
    button.style.boxShadow = " 0 1px 0.2px rgb(8, 18, 16)";

    button.style.transform = "translate(-50%, -43%)";
})


button.addEventListener("pointerup", function() {
    button.style.boxShadow = ShadowColor;

    button.style.transform = "translate(-50%, -50%)";
})

button.addEventListener("pointerleave", function() {
    button.style.boxShadow = ShadowColor;

    button.style.transform = "translate(-50%, -50%)";
})
