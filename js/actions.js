var bgBlack = false;
var dialogLeft = true;
var dialogHidden = false

function toggleColor() {
    let canvas = document.getElementById("canvas");
    let bgToggle = document.getElementById("bg-toggle")
    bgBlack = !bgBlack;
    if (bgBlack) {
        canvas.style.background = "black";
        bgToggle.title = "Set white background";
    } else {
        canvas.style.background = "white";
        bgToggle.title = "Set black background";
    }
}

function toggleSide() {
    let dialog = document.getElementById("dialog");
    let moveButton = document.getElementById("move-dialog");
    let hideButton = document.getElementById("hide-dialog");
    dialogLeft = !dialogLeft;
    if (dialogLeft) {
        dialog.style.left = 0;
        dialog.style.right = "";
        moveButton.style.transform = "rotate(0deg)";
        hideButton.style.right = "";
    } else {
        dialog.style.left = "";
        dialog.style.right = 0;
        moveButton.style.transform = "rotate(180deg)";
        hideButton.style.right = "0";
    }
    hideBtnRotation();
}

function toggleHide() {
    let settings = document.getElementById("settings");
    let button = document.getElementById("hide-dialog");
    dialogHidden = !dialogHidden;
    if (dialogHidden) {
        settings.style.width = "0px";
        button.title = "Show dialog";
    } else {
        settings.style.width = "";
        button.title = "Hide dialog";
    }
    hideBtnRotation();

    recognition.start();
    console.log('Ready to receive a color command.');
}

function hideBtnRotation() {
    let button = document.getElementById("hide-dialog");
    if (dialogHidden == dialogLeft) {
        button.style.transform = "rotate(180deg)";
    } else {
        button.style.transform = "rotate(0deg)";
    }
}

function resetCanvas() {
    boxes = [];
}