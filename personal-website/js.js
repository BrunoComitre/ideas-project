var i = setInterval(function () {

    clearInterval(i);

    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 2000);

function move() {
    var elem = document.getElementById("wd");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 85) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move1() {
    var elem = document.getElementById("wd1");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move2() {
    var elem = document.getElementById("wd2");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move3() {
    var elem = document.getElementById("wd3");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 35) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move4() {
    var elem = document.getElementById("wd4");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 15) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move5() {
    var elem = document.getElementById("wd5");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 20) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move6() {
    var elem = document.getElementById("wd6");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move7() {
    var elem = document.getElementById("wd7");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move8() {
    var elem = document.getElementById("wd8");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move9() {
    var elem = document.getElementById("wd9");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 20) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move10() {
    var elem = document.getElementById("wd10");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 30) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move11() {
    var elem = document.getElementById("wd11");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move12() {
    var elem = document.getElementById("wd12");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 20) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move13() {
    var elem = document.getElementById("wd13");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 15) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move14() {
    var elem = document.getElementById("wd14");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move15() {
    var elem = document.getElementById("wd15");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function move16() {
    var elem = document.getElementById("wd16");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
var time = setTimeout(function inicia() {
    return move(), move1(), move2(), move3(), move4(), move5(), move6(), move7(), move8(),
	move9(), move10(), move11(), move12(), move13(), move14(), move15(), move16();
}, 3000)
