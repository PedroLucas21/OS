var win = false;
var clicado_rufus = false;
var pendrive = false;
function rufus() {
    let R = document.getElementById("winR");
    clicado_rufus = !clicado_rufus
    if (clicado_rufus) {
        R.style.visibility = "visible";
    }
    if (clicado_rufus == false) {
        R.style.visibility = "hidden"
    }
}
function progress_btn() {
    let zorin = document.getElementById("zorin");
    let lubuntu = document.getElementById("lubuntu");
    let kali = document.getElementById("kali-linux");
    let debian = document.getElementById("debian");
    let ubuntu = document.getElementById("ubuntu");
    let xenialpup = document.getElementById("xenialpup");
    let tinycore = document.getElementById("tinycore");
    let bodhi = document.getElementById("bodhi");

    let mbr = document.getElementById("mbr");
    let gpt = document.getElementById("gpt");

    let pr = document.getElementById("progress0");

    if (kali.checked) {
        zorin.checked = false;
        lubuntu.checked = false;
        zorin.checked = false;
        debian.checked = false;
        ubuntu.checked = false;
        xenialpup.checked = false;
        tinycore.checked = false;
        bodhi.checked = false;
        if (mbr.checked || gpt.checked) {
            pr.style.backgroundColor = "green";
            pendrive = true;
        }
    }
}
function windowR() {
    passou = false
    var down = false;
    var x;
    var y;
    var movedor = document.getElementById("movedor");
    let R = document.getElementById("winR");
    window.addEventListener('mousedown', function (e) {
        if (passou) {
            down = true;
        }
        passou = true;
});
    window.addEventListener('mousemove', function (e) {
        if (down == false) {
            x = e.clientX + 'px';
            y = e.clientY + 'px';
            R.style.left = x;
            R.style.top = y;
        }
    });
}
function reiniciar() {
    let reinicia = document.getElementById("reiniciar");
    win = !win;
    if (win) {
        reinicia.style.visibility = "visible";
    } else {
        reinicia.style.visibility = "hidden"
    }
}
function boot() {
    if (pendrive) {
        let janela_rufus = document.getElementById("winR");
        let bot = document.getElementById("boot");
        let rei = document.getElementById("rei");
        let windows10 = document.getElementById("windows10");
        windows10.style.visibility = "hidden";
        rei.style.visibility = "hidden";
        janela_rufus.style.visibility = "hidden";
        bot.style.visibility = "visible";
        document.addEventListener("keydown", (event) => {
            if (event.key === 'F8') {
                bootar();
            }
        });
    }
}
function bootar() {
    var n_tecla = 0;
    let bot = document.getElementById("boot");
    let menu_boot = document.getElementById("menu_boot");
    let drive1 = document.getElementById("drive1");
    let drive2 = document.getElementById("drive2");
    bot.style.visibility = "hidden";
    menu_boot.style.visibility = "visible";
    document.addEventListener("keydown", (event) => {
        if (event.key === 'ArrowDown') {
            if (n_tecla > 1) {
                n_tecla = 0;
            } else {
                n_tecla++;
            }
        }
        if (n_tecla == 0) {
            drive2.style.backgroundColor = "transparent";
            drive1.style.backgroundColor = "blue";
        } else {
            drive1.style.backgroundColor = "transparent";
            drive2.style.backgroundColor = "blue";
        }
        if (n_tecla == 1) {
            if (event.key === 'Enter') {
                window.open("Kali.html", "_self");
            }
        } else {
            if (event.key === 'Enter') {
                window.open("Asus.html", "_self");
            }
        }
    });
}