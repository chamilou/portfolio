function expand() {
    let chkbox = document.getElementById("checkbox");


}

function Person(name, age) {
    this.name = name;
    this.age = age;

}
//Galerie
photoArray = [
    ["images/class_pictures/PortraitPictures/Abdul.jpg", "Abdul", "Geneva", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Ali.jpg", "Ali", "Bern", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Ari.jpg", "Ari", "Biel", "+4178956342", "F"],
    ["images/class_pictures/PortraitPictures/Arwa.jpg", "Arwa", "Geneva", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Baris.jpg", "Baris", "Lausanne", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Bilal.jpg", "Bilal", "Basel", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Emin.jpg", "Emin", "Zurich", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Enes.jpg", "Enes", "Aargau", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Fati.jpg", "Fati", "Bern", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Hassan.jpg", "Hassan", "Zurich", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Ibrahim.jpg", "Ibrahim", "Bern", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Ismet.jpg", "Ismet", "Geneva", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Julia.jpg", "Julia", "Lauzanne", "+4178956342", "F"],
    ["images/class_pictures/PortraitPictures/Jyoti.jpg", "Jyoti", "Aargau", "+4178956342", "F"],
    ["images/class_pictures/PortraitPictures/Murad.jpg", "Murad", "Zurich", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Olena.jpg", "Olena", "Bern", "+4178956342", "F"],
    ["images/class_pictures/PortraitPictures/Ozi.jpg", "Ozi", "Unknown", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Sadredin.jpg", "Sadredin", "Geneva ", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Sarkan.jpg", "Sarkan", "Solothurn", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Senay.jpg", "Senay", "Aargau", "+4178956342", "F"],
    ["images/class_pictures/PortraitPictures/Serkan.jpg", "Serkan", "Nyon", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Sevim.jpg", "Sevim", "Neuchatel", "+4178956342", "F"],
    ["images/class_pictures/PortraitPictures/Shamil.jpg", "Shamil", "Bern", "+4178956342", "M"],
    ["images/class_pictures/PortraitPictures/Tuba.jpg", "Tuba", "Unknown", "+4178956342", "F"],
    ["images/class_pictures/PortraitPictures/Yousef.jpg", "Yousef", "", "+4178956342", "M"]
];
let galeryContainer = document.getElementById("photoContainer")
for (let i = 0; i < photoArray.length; i++) {
    let section = document.createElement("section")
    let article = document.createElement("article")
    section.setAttribute('class', 'galSection')

    let img = document.createElement("img");
    img.setAttribute('src', photoArray[i][0])
    img.setAttribute('width', 250)
    img.setAttribute('class', 'galImg')

    galeryContainer.appendChild(section)
    article.setAttribute('class', 'galery-article')
    article.appendChild(img)

    section.appendChild(article)
}
let filter1 = document.getElementById("three").addEventListener('click', filterM)
let filter2 = document.getElementById("two").addEventListener('click', filterF)
let filter3 = document.getElementById("one").addEventListener('click', filterM)

function filterF() {

    galeryContainer = document.getElementById("photoContainer")
    let section = document.createElement("section")
    let article = document.createElement("article")
    section.setAttribute('class', 'galSection')
    for (let i = 0; i < photoArray.length; i++) {
        galeryContainer.innerHTML = ""

        if (photoArray[i][4] == "F") {
            let img = document.createElement("img");
            img.setAttribute('src', photoArray[i][0])
            img.setAttribute('width', 250)
            img.setAttribute('class', 'galImg')
            section.appendChild(article)
            galeryContainer.appendChild(section)
            article.setAttribute('class', 'galery-article')
            article.appendChild(img)
        } else if (photoArray[i][4] == "F") {
            galeryContainer.innerHTML = ""
            let img = document.createElement("img");
            img.setAttribute('src', photoArray[i][0])
            img.setAttribute('width', 250)
            img.setAttribute('class', 'galImg')
            section.appendChild(article)
            galeryContainer.appendChild(section)
            article.setAttribute('class', 'galery-article')
            article.appendChild(img)
        }

    }
}

function filterM() {

    galeryContainer = document.getElementById("photoContainer")
    let section = document.createElement("section")
    let article = document.createElement("article")
    section.setAttribute('class', 'galSection')
    for (let i = 0; i < photoArray.length; i++) {
        galeryContainer.innerHTML = ""

        if (photoArray[i][4] == "M") {
            let img = document.createElement("img");
            img.setAttribute('src', photoArray[i][0])
            img.setAttribute('width', 250)
            img.setAttribute('class', 'galImg')
            section.appendChild(article)
            galeryContainer.appendChild(section)
            article.setAttribute('class', 'galery-article')
            article.appendChild(img)
        } else if (photoArray[i][4] == "F") {
            galeryContainer.innerHTML = ""
            let img = document.createElement("img");
            img.setAttribute('src', photoArray[i][0])
            img.setAttribute('width', 250)
            img.setAttribute('class', 'galImg')
            section.appendChild(article)
            galeryContainer.appendChild(section)
            article.setAttribute('class', 'galery-article')
            article.appendChild(img)
        }

    }
}

function sendEmail() {
    window.open('mailto:shamil@idrisov.ch');
}