async function invalid() {
    let url = 'http://localhost:9001/invalidpassword'
    let response = await fetch(url)
    let element = document.getElementById("invalid")
    if (await response.json() == "invalid"){
        element.innerHTML += "Old password incorrect"
    }
    else if (await response.json() == "unmatched"){
        element.innerHTML += "Passwords do not match"
    }
}

window.onload = function () {
    this.invalid()
}