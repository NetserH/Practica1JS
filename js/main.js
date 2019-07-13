document.getElementById("mensaje").innerHTML = "Hola Mundo!";
document.getElementById("mensaje").style.background = "#000";
document.getElementById("mensaje").style.color = "white";


function closePopup() { 
document.getElementById("popup").style.display = "none";
}

function showPopup() {
    document.getElementById("popup").style.display = "block"
}