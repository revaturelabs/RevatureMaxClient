async function invalid() {
    let url = 'http://localhost:5000/invalid'
    let response = await fetch(url)
    let element = document.getElementById("invalid")
}

window.onload = function () {
    this.invalid()
}