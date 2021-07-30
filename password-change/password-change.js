async function invalid() {
    let url = 'http://localhost:9001/invalidpassword'
    let response = await fetch(url)
    let element = document.getElementById("invalid")
    let msg = await response.json();
    if (msg == "invalid"){
        element.innerHTML += "Old password incorrect"
    }
    else if (msg == "unmatched"){
        element.innerHTML += "Passwords do not match"
    }
}

window.onload = function () {
    this.invalid()
}