//Galerie
let photoArray = [
    ["media/SitePictures/galeryPictures/main/gr_2.jpg", "media/SitePictures/galeryPictures/thumbn/gr_2_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/gr_3.jpg", "media/SitePictures/galeryPictures/thumbn/gr_3_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/gr_4.jpg", "media/SitePictures/galeryPictures/thumbn/gr_4_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/gr_7.jpg", "media/SitePictures/galeryPictures/thumbn/gr_7_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/gr_5.jpg", "media/SitePictures/galeryPictures/thumbn/gr_5_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/gr_9.jpg", "media/SitePictures/galeryPictures/thumbn/gr_9_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/gr_6.jpg", "media/SitePictures/galeryPictures/thumbn/gr_6_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/gr_10.jpg", "media/SitePictures/galeryPictures/thumbn/gr_10_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/gr_8.jpg", "media/SitePictures/galeryPictures/thumbn/gr_8_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/gr_11.jpg", "media/SitePictures/galeryPictures/thumbn/gr_11_tn.jpg", "greece"],
    ["media/SitePictures/galeryPictures/main/kg-1.jpg", "media/SitePictures/galeryPictures/thumbn/kg-1_tn.jpg", "kyrgyzstan"],
    ["media/SitePictures/galeryPictures/main/kg-2.jpg", "media/SitePictures/galeryPictures/thumbn/kg-2_tn.jpg", "kyrgyzstan"],
    ["media/SitePictures/galeryPictures/main/kg-2.jpg", "media/SitePictures/galeryPictures/thumbn/kg-2_tn.jpg", "kyrgyzstan"],
    ["media/SitePictures/galeryPictures/main/kg-3.jpg", "media/SitePictures/galeryPictures/thumbn/kg-3_tn.jpg", "kyrgyzstan"],
    ["media/SitePictures/galeryPictures/main/kg-4.jpg", "media/SitePictures/galeryPictures/thumbn/kg-4_tn.jpg", "kyrgyzstan"],
    ["media/SitePictures/galeryPictures/main/kg-5.jpg", "media/SitePictures/galeryPictures/thumbn/kg-5_tn.jpg", "kyrgyzstan"],
    ["media/SitePictures/galeryPictures/main/ua-2.jpg", "media/SitePictures/galeryPictures/thumbn/ua-2_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ua-3.jpg", "media/SitePictures/galeryPictures/thumbn/ua-3_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ua-1.jpg", "media/SitePictures/galeryPictures/thumbn/ua-1_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ua-4.jpg", "media/SitePictures/galeryPictures/thumbn/ua-4_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ua-5.jpg", "media/SitePictures/galeryPictures/thumbn/ua-5_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ua-6.jpg", "media/SitePictures/galeryPictures/thumbn/ua-6_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ua-7.jpg", "media/SitePictures/galeryPictures/thumbn/ua-7_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ua-8.jpg", "media/SitePictures/galeryPictures/thumbn/ua-8_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ua-9.jpg", "media/SitePictures/galeryPictures/thumbn/ua-9_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ua-10.jpg", "media/SitePictures/galeryPictures/thumbn/ua-10_tn.jpg", "ukraine"],
    ["media/SitePictures/galeryPictures/main/ir-1.jpg", "media/SitePictures/galeryPictures/thumbn/ir-1_tn.jpg", "iraq"],
    ["media/SitePictures/galeryPictures/main/ir-2.jpg", "media/SitePictures/galeryPictures/thumbn/ir-2_tn.jpg", "iraq"],
    ["media/SitePictures/galeryPictures/main/ir-3.jpg", "media/SitePictures/galeryPictures/thumbn/ir-3_tn.jpg", "iraq"],
    ["media/SitePictures/galeryPictures/main/ir-4.jpg", "media/SitePictures/galeryPictures/thumbn/ir-4_tn.jpg", "iraq"],
    ["media/SitePictures/galeryPictures/main/ir-5.jpg", "media/SitePictures/galeryPictures/thumbn/ir-5_tn.jpg", "iraq"],
    ["media/SitePictures/galeryPictures/main/ir-6.jpg", "media/SitePictures/galeryPictures/thumbn/ir-6_tn.jpg", "iraq"],
    ["media/SitePictures/galeryPictures/main/sd-1.jpg", "media/SitePictures/galeryPictures/thumbn/sd-1_tn.jpg", "sd"],
    ["media/SitePictures/galeryPictures/main/sd-2.jpg", "media/SitePictures/galeryPictures/thumbn/sd-2_tn.jpg", "sd"],
    ["media/SitePictures/galeryPictures/main/sd-3.jpg", "media/SitePictures/galeryPictures/thumbn/sd-3_tn.jpg", "sd"],
    ["media/SitePictures/galeryPictures/main/sd-4.jpg", "media/SitePictures/galeryPictures/thumbn/sd-4_tn.jpg", "sd"],
    ["media/SitePictures/galeryPictures/main/sd-5.jpg", "media/SitePictures/galeryPictures/thumbn/sd-5_tn.jpg", "sd"],
    ["media/SitePictures/galeryPictures/main/sd-6.jpg", "media/SitePictures/galeryPictures/thumbn/sd-6_tn.jpg", "sd"],
    ["media/SitePictures/galeryPictures/main/sd-7.jpg", "media/SitePictures/galeryPictures/thumbn/sd-7_tn.jpg", "sd"],
];


let galeryContainer = document.getElementById("photoContainer")
    // let img = document.createElement("img");


// let mergedArray = [...photoArray, ...thumbs];
// console.log(mergedArray)

let section = document.createElement("section");

let article = document.createElement("article")
let a = document.createElement("a");
let figure = document.createElement("figure");
let figcapture = document.createElement("figcapture")
let img = document.createElement("img");
figure.appendChild(img)
figcapture.appendChild(a)
figure.appendChild(figcapture)
img.setAttribute('width', 250)
img.setAttribute('class', 'galImg')
article.setAttribute('class', 'galery-article')
article.appendChild(figure)

for (let i = 0; i < photoArray.length; i++) {
    let newArticle = article.cloneNode(true);
    newArticle.querySelector('a').setAttribute("href", photoArray[i][0]);
    newArticle.querySelector('a').innerHTML = photoArray[i][2];
    newArticle.querySelector('img').setAttribute('src', photoArray[i][1]);
    section.appendChild(newArticle);
}
galeryContainer.appendChild(section)

let greece = document.getElementById("greece").addEventListener('click', () => { filter("greece") })
let ukraine = document.getElementById("ukraine").addEventListener('click', () => { filter("ukraine") })
let iraq = document.getElementById("iraq").addEventListener('click', () => { filter("iraq") })
let sudan = document.getElementById("sd").addEventListener('click', () => { filter("sd") })
let drc = document.getElementById("drc").addEventListener('click', () => { filter("drc") })
let chad = document.getElementById("chad").addEventListener('click', () => { filter("chad") })
let kyrgyzstan = document.getElementById("kg").addEventListener('click', () => { filter("kyrgyzstan") })

// let greece = document.getElementById("greece").addEventListener('click', filter)

function bigPicture(index) {
    for (let i = 0; i < photoArray.length; i++) {
        return photoArray[i][index]
    }
}

function filter(country = null) {

    // galeryContainer = document.getElementById("photoContainer")
    // let section = document.createElement("section")
    // let article = document.createElement("article")
    galeryContainer.innerHTML = ""
    let section = document.createElement("section")
    for (let i = 0; i < photoArray.length; i++) {

        if (country == null || photoArray[i][2] == country) {
            let img = document.createElement("img");
            img.setAttribute('src', photoArray[i][1])
            let a = document.createElement("a");
            let article = document.createElement("article")
            let figure = document.createElement("figure");
            let figcapture = document.createElement("figcapture")
                // let newArray [i, ...uganda]=photoArray
                // section.setAttribute('class', 'galSection')
            a.setAttribute("href", photoArray[i][0])
            a.innerHTML = photoArray[i][2];
            img.setAttribute('class', 'galImg')
            img.setAttribute('width', 400)
            article.setAttribute('class', 'galery-article')
            figure.appendChild(img)
            figcapture.appendChild(a)
            figure.appendChild(figcapture)
            galeryContainer.appendChild(section)
            article.appendChild(figure)
            section.appendChild(article)
        }

    }
}