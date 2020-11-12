function popimg(URL, DAT) {
    if (document.body.clientWidth < 480) return false;
    var full = document.getElementById("full");
    full.className = "show";
    full.title = DAT;
    full.src = URL;
    return true;
}
