const active1 = document.getElementById("active1");
const active2 = document.getElementById("active2");
const active3 = document.getElementById("active3");
const active4 = document.getElementById("active4");
const active5 = document.getElementById("active5");
const active6 = document.getElementById("active6");
const active7 = document.getElementById("active7");
const click = document.getElementById("click");
const buttons = document.getElementById("buttons");
const about = document.getElementById("about");

function btn3() {
    active1.style.width = "130%"
    active1.style.height = "860px"

    active2.style.transform = "rotate(-3.2deg)"
    active2.style.marginRight = "15px"
    active2.style.marginTop = "120px"

    active4.style.top = "-550px"
    active4.style.right = "-550px"

    active5.style.right = "350px"
    active5.style.width = "60%"
    active5.style.height = "400px"

    active6.style.height = "330px"
    active6.style.width = "70%"
    active6.style.right = "300px"
    active6.style.marginTop = "250px"

    active7.style.top = "110px"
    active7.style.height = "450px"
    active7.style.right = "250px"
    active7.style.marginTop = "230px"

    click.style.opacity = "1"
    click.style.transition = "5s"
    buttons.style.display = "none"
}

function long() {
    active1.style.width = "100%"
    active1.style.height = "670px"

    active2.style.transform = "rotate(0deg)"
    active2.style.marginRight = "0"
    active2.style.marginTop = "0"
    active2.style.animationDelay = "14s"

    active4.style.top = "0"
    active4.style.right = "0"
    active5.style.right = "0"
    active5.style.width = "80%"
    active5.style.height = "720px"

    active6.style.height = "650px"
    active6.style.width = "80%"
    active6.style.right = "0"
    active6.style.marginTop = "0"

    active7.style.top = "50px"
    active7.style.height = "650px"
    active7.style.right = "0"
    active7.style.marginTop = "0"

    click.style.opacity = "0"
    click.style.transition = "5s"
    buttons.style.display = "block"
}

function btn1() {
    active1.style.width = "130%"
    active1.style.height = "860px"

    active2.style.marginTop = "50px"
    active2.style.animationDelay = "4s"

    active4.style.top = "100px"
    active4.style.right = "-1.5%"
    active4.style.width = "70%"
    active4.style.height = "520px"

    active5.style.right = "-2%"
    active5.style.width = "70%"
    active5.style.height = "620px"

    active6.style.height = "450px"
    active6.style.width = "70%"
    active6.style.right = "-2%"
    active6.style.marginTop = "200px"

    active7.style.top = "180px"
    active7.style.height = "650px"
    active7.style.right = "-5%"

    about.style.opacity = "1"
    about.style.transition = "4s"
}

function btn2() {
    active1.style.width = "100%"
    active1.style.height = "670px"

    active2.style.transform = "rotate(0deg)"
    active2.style.marginRight = "0"
    active2.style.marginTop = "0"

    active4.style.width = "80%"
    active4.style.height = "630px"
    active4.style.top = "0"
    active4.style.right = "0"

    active5.style.right = "0"
    active5.style.width = "80%"
    active5.style.height = "720px"

    active6.style.height = "650px"
    active6.style.width = "80%"
    active6.style.right = "0"
    active6.style.marginTop = "0"

    active7.style.top = "50px"
    active7.style.height = "650px"
    active7.style.right = "0"

    about.style.opacity = "0"
    about.style.transition = "4s"
}