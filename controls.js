var a = false;
var d = false;

document.addEventListener("keydown", press);
document.addEventListener("keyup", press);

function press(e) {
    // console.log("Pressed space" + e.keyCode);

    if (e.keyCode == 65) {
        a = true;

    }

    if (e.keyCode == 68) {
        d = true;
    }
}

function release (e) {
    if (e.keyCode == 65) {
        a = false;

    }

    if (e.keyCode == 68) {
        d = false;
    }
}

