const editContactInfo = document.getElementById("editContactInfo")
const cancelContactInfo = document.getElementById("cancelContactInfo")
const submitContactInfo = document.getElementById("submitContactInfo")
const editBio = document.getElementById("editBio")
const cancelBio = document.getElementById("cancelBio")
const submitBio = document.getElementById("submitBio")
const editFavTechnologies = document.getElementById("editFavTechnologies")
const cancelFavTechnologies = document.getElementById("cancelFavTechnologies")
const submitFavTechnologies = document.getElementById("submitFavTechnologies")

const firstName = document.getElementById("userFirstName")
const lastName = document.getElementById("userLastName")
const email = document.getElementById("userEmail")

editContactInfo.onclick = function(){
    const editFirstName = document.getElementById("editFirstName")
    const editLastName = document.getElementById("editLastName")
    const editEmail = document.getElementById("editEmail")
    this.style.display = "none"
    cancelContactInfo.style.display = "inline"
    submitContactInfo.style.display = "inline"
    firstName.style.display = "none"
    editFirstName.style.display = "inline"
    editFirstName.value = firstName.innerText
    lastName.style.display = "none"
    editLastName.style.display = "inline"
    editLastName.value = lastName.innerText
    email.style.display = "none"
    editEmail.style.display = "inline"
    editEmail.value = email.innerText
}

cancelContactInfo.onclick = function(){
    const editFirstName = document.getElementById("editFirstName")
    const editLastName = document.getElementById("editLastName")
    const editEmail = document.getElementById("editEmail")
    this.style.display = "none"
    editContactInfo.style.display = "inline"
    submitContactInfo.style.display = "none"
    firstName.style.display = "inline"
    editFirstName.style.display = "none"
    lastName.style.display = "inline"
    editLastName.style.display = "none"
    email.style.display = "inline"
    editEmail.style.display = "none"
}

editBio.onclick = function(){
    const bio = document.getElementById("userBio")
    const newBio = document.getElementById("newBio")
    this.style.display = "none"
    submitBio.style.display = "inline"
    cancelBio.style.display = "inline"
    bio.style.display = "none"
    newBio.style.display = "block"
    newBio.innerText = bio.innerText
}

cancelBio.onclick = function(){
    const bio = document.getElementById("userBio")
    const newBio = document.getElementById("newBio")
    this.style.display = "none"
    submitBio.style.display = "none"
    editBio.style.display = "inline"
    bio.style.display = "block"
    newBio.style.display = "none"
}

submitBio.onclick = function(){
    const bio = document.getElementById("userBio")
    const newBio = document.getElementById("newBio")
    this.style.display = "none"
    cancelBio.style.display = "none"
    editBio.style.display = "inline"
    bio.style.display = "block"
    bio.innerText = newBio.value
    bio.style.height = "fit-content"
    newBio.style.display = "none"
}

editFavTechnologies.onclick = function(){
    const tech1 = document.getElementById("tech1")
    const editTech1 = document.getElementById("editTech1")
    const tech2 = document.getElementById("tech2")
    const editTech2 = document.getElementById("editTech2")
    const tech3 = document.getElementById("tech3")
    const editTech3 = document.getElementById("editTech3")
    const preference = document.getElementById("userPreference")
    const editPreference = document.getElementById("editPreference")
    editFavTechnologies.style.display = "none"
    submitFavTechnologies.style.display = "inline"
    cancelFavTechnologies.style.display = "inline"
    tech1.style.display = "none"
    tech2.style.display = "none"
    tech3.style.display = "none"
    preference.style.display = "none"
    editTech1.style.display = "block"
    editTech1.value = tech1.innerText
    editTech2.style.display = "block"
    editTech2.value = tech2.innerText
    editTech3.style.display = "block"
    editTech3.value = tech3.innerText
    editPreference.style.display = "inline"
    editPreference.value = preference.innerText
}

cancelFavTechnologies.onclick = function(){
    const tech1 = document.getElementById("tech1")
    const editTech1 = document.getElementById("editTech1")
    const tech2 = document.getElementById("tech2")
    const editTech2 = document.getElementById("editTech2")
    const tech3 = document.getElementById("tech3")
    const editTech3 = document.getElementById("editTech3")
    const preference = document.getElementById("userPreference")
    const editPreference = document.getElementById("editPreference")
    editFavTechnologies.style.display = "inline"
    submitFavTechnologies.style.display = "none"
    cancelFavTechnologies.style.display = "none"
    tech1.style.display = "block"
    tech2.style.display = "block"
    tech3.style.display = "block"
    preference.style.display = "inline"
    editTech1.style.display = "none"
    editTech2.style.display = "none"
    editTech3.style.display = "none"
    editPreference.style.display = "none"
}

submitFavTechnologies.onclick = function(){
    const tech1 = document.getElementById("tech1")
    const editTech1 = document.getElementById("editTech1")
    const tech2 = document.getElementById("tech2")
    const editTech2 = document.getElementById("editTech2")
    const tech3 = document.getElementById("tech3")
    const editTech3 = document.getElementById("editTech3")
    const preference = document.getElementById("userPreference")
    const editPreference = document.getElementById("editPreference")
    editFavTechnologies.style.display = "inline"
    submitFavTechnologies.style.display = "none"
    cancelFavTechnologies.style.display = "none"
    tech1.style.display = "block"
    tech2.style.display = "block"
    tech3.style.display = "block"
    preference.style.display = "inline"
    editTech1.style.display = "none"
    editTech2.style.display = "none"
    editTech3.style.display = "none"
    editPreference.style.display = "none"
}

function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
  }