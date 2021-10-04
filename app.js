console.log("Let's get this party started!");

const search = document.querySelector('#search');
const addBtn = document.querySelector('#add');
const deleteAllImagesBtn = document.querySelector('#delete');

addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    getImage(search.value);
});

deleteAllImagesBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const allImages = document.querySelectorAll('img');

    for (let img of allImages) {
        img.remove();
    }
});

async function getImage (searchParam) {

    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {q: searchParam, api_key: 'ylxksjw4WuYfXBcqqFOx3dT7oeycBq30'}});

    const urlArray = response.data.data;

    const randomURL = urlArray[getRandomIndex(urlArray)].images.fixed_height.url;

    addImage(randomURL);
}

function getRandomIndex (array) {
    return Math.round(array.length*Math.random())
}

function addImage (source) {
    const newIMG = document.createElement('img');
    newIMG.setAttribute('src', source);

    document.querySelector('body').append(newIMG);
}