async function invalid() {
    let url = 'http://localhost:9001/invalid'
    let response = await fetch(url)
    let element = document.getElementById("invalid")
    if (await response.json() == "invalid"){
        element.innerHTML += "Incorrect Password. Try Again."
    }
    else if (await response.json() == "unmatched"){
        element.innerHTML += "Not matching. Try Again."
    }
}

window.onload = function () {
    this.invalid()
}