let Score = Number(localStorage.getItem("DataScore"));
let ShadowColor = 0

document.querySelector(".Text2").innerText = Score
document.querySelector(".circle").onclick = function() {
    Score ++;
    document.querySelector(".Text2").innerText = Score;

    localStorage.setItem("DataScore", Score)

    if (Score >= 250) {
        document.querySelector(".circle").style.backgroundColor = "rgb(17, 238, 219)";
        document.querySelector(".circle").style.border = "3px solid rgb(11, 121, 105)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(11, 121, 110)";
        document.querySelector(".Text").style.color = "rgb(6, 116, 105)";
        document.querySelector(".Text2").style.color = "rgb(6, 116, 107)";
        document.querySelector("body").style.background = "rgb(17, 238, 223)";

        ShadowColor = "0 6px 0px rgb(11, 121, 110)"
    } else if (Score >= 100) {
        document.querySelector(".circle").style.backgroundColor = "rgb(238, 227, 17)";
        document.querySelector(".circle").style.border = "3px solid rgb(121, 116, 11)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(121, 108, 11)";
        document.querySelector(".Text").style.color = "rgb(112, 116, 6)";
        document.querySelector(".Text2").style.color = "rgb(112, 116, 6)";
        document.querySelector("body").style.background = "rgb(238, 227, 17)";

        ShadowColor = "0 6px 0px rgb(121, 112, 11)"
    } else {
        document.querySelector(".circle").style.backgroundColor = "rgb(17, 238, 102)";
        document.querySelector(".circle").style.border = "3px solid rgb(11, 121, 59)";
        document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(11, 121, 55)";
        document.querySelector(".Text").style.color = "rgb(6, 116, 56)";
        document.querySelector(".Text2").style.color = "rgb(6, 116, 61)";
        document.querySelector("body").style.background = "rgb(17, 238, 98)";

        ShadowColor = "0 6px 0px rgb(11, 121, 57)"
    }
}

let button = document.querySelector(".circle")

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
