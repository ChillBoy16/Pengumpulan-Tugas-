function klik() {
    alert("OK");
}

inputButton.onclick = klik;

function gantiRed (){
    inputButton.style.backgroundColor = "red";
}

function gantiBlack (){
    inputButton.style.backgroundColor = "black";
}

inputButton.addEventListener("mouseover", gantiRed);
inputButton.addEventListener("mouseover", gantiBlack);