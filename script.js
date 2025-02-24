function getBio() {
    let name = prompt("Enter your name:");
    while (!name) {
        name = prompt("Name cannot be empty! Please enter your name:");
    }

    let profession = prompt("Enter your profession:");
    while (!profession) {
        profession = prompt("Profession cannot be empty! Please enter your profession:");
    }

    let bio = prompt("Enter a short bio about yourself:");
    let photoUrl = prompt("Enter the URL of your profile picture:");

    alert(`Your Bio:\nName: ${name}\nProfession: ${profession}\nBio: ${bio}`);
    console.log(`Name: ${name}, Profession: ${profession}, Bio: ${bio}`);

    document.getElementById("name").textContent = name;
    document.getElementById("profession").textContent = profession;
    document.getElementById("bio").textContent = bio;
    document.getElementById("profile-pic").src = photoUrl;
}

function updateBio() {
    getBio();
}

getBio();
