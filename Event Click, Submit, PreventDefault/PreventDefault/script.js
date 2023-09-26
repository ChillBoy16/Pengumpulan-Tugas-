document.getElementById("input").addEventListener("submit", submitAktif);

function submitAktif() {
    console.log("submit aktif")
}

function submitAktif(event) {
    event.preventDefault();
    console.log("Submit aktif!")
}

function submitAktif(event) {
    event.preventDefault();
    if (input.value == "Javascript") {
        console.log("data dikirim ke server");
    } else {
        console.log("data gagal dikirim")
    }
}