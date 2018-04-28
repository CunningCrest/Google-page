search_button.onclick = function() {
    document.getElementById("find").removeAttribute("href");
    var text = document.getElementById("search_text").value;
    var strLink = "https://www.google.com/search?source=hp&ei=pG_jWsm8LYbg6ASDhIngCA&q=" + text + "&oq=" + text + "&gs_l=psy-ab.13..0i131k1l2j0l8.133885.141678.0.143867.23.13.7.0.0.0.167.1231.9j3.13.0....0...1c.1.64.psy-ab..3.19.1193.6..35i39k1j0i10i1k1j0i10i1i67k1j0i10i42k1j0i10k1j0i30k1j0i10i30k1j0i13k1j0i13i10i1k1j0i13i10k1j0i13i10i1i42k1j0i67k1.97.LiOBxn65Zs0";
    document.getElementById("find").setAttribute("href", strLink);
};

function myFunc() {
    if (document.getElementById("language").innerHTML == "Беларуская") {

        document.getElementById("language").innerHTML = "Русский";
        document.getElementById("messages").innerHTML = "Gmail";
        document.getElementById("pictures").innerHTML = "Вiдарысы";
        document.getElementById("find").innerHTML = "Пошук Google";
        document.getElementById("luck").innerHTML = "Мне пашанцуе!";
        document.getElementById("advertising").innerHTML = "Advertising";
        document.getElementById("business").innerHTML = "Business";
        document.getElementById("information").innerHTML = "Наконт";
        document.getElementById("confidentiality").innerHTML = "Privacy";
        document.getElementById("conditions").innerHTML = "Terms";
        document.getElementById("settings").innerHTML = "Накладкi";
    } else {
        document.getElementById("language").innerHTML = "Беларуская";
        document.getElementById("messages").innerHTML = "Почта";
        document.getElementById("pictures").innerHTML = "Картинки";
        document.getElementById("find").innerHTML = "Поиск в гугл";
        document.getElementById("luck").innerHTML = "Мне повезет!";
        document.getElementById("advertising").innerHTML = "Реклама";
        document.getElementById("business").innerHTML = "Для бизнеса";
        document.getElementById("information").innerHTML = "Всё о Google";
        document.getElementById("confidentiality").innerHTML = "Конфиденциальность";
        document.getElementById("conditions").innerHTML = "Условия";
        document.getElementById("settings").innerHTML = "Настройки";
    }
}

