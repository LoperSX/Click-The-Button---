let Score = Number(localStorage.getItem("DataScore"));

document.querySelector(".Text2").innerText = Score
document.querySelector(".circle").onclick = function() {
    Score ++;
    document.querySelector(".Text2").innerText = Score;

    localStorage.setItem("DataScore", Score)
    //if (Score === 25) {
    //    document.querySelector(".circle").style.backgroundColor = "rgb(238, 227, 17)";
    //    document.querySelector(".circle").style.border = "3px solid rgb(121, 116, 11)";
    //    document.querySelector(".circle").style.boxShadow = "0 6px 0 rgb(121, 108, 11)";
    //}

    if (Score % 70 === 0) {
        document.querySelector("body").style.backgroundColor = 'white';
    } else if(Score % 100 === 0) {
        document.querySelector("body").style.backgroundColor = "rgb(39, 255, 111)";
    }
}