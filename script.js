const img = document.querySelector("img");
const newImgBtn = document.querySelector(".new-img");
const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector("#item");
const form = document.querySelector(".form");

function fetchNewImg(searchValue = "cats") {
  fetchURL = `https://api.giphy.com/v1/gifs/translate?api_key=6laVh6xhrqkllMnPOOQWvozyaWq3K8Xv&s=${searchValue}`;

  fetch(fetchURL, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      console.log(e);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchNewImg();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchBar.value;
  fetchNewImg(searchValue);
});
