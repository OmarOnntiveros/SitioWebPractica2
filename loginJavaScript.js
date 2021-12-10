function ocultarYmostar() {
    var x = document.getElementById("form");
    var y = document.getElementById("login");
    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none"
    }else{
        x.style.display = "none";
        y.style.display = "flex"
    }
}