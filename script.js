const img = document.querySelector("img");
const newImgBtn = document.querySelector(".new-img");
const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector("#item");
const form = document.querySelector(".form");

function fetchNewImg() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=6laVh6xhrqkllMnPOOQWvozyaWq3K8Xv&s=cats",
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log("done");
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      console.log(e);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchNewImg();
});

newImgBtn.addEventListener("click", () => {
  fetchNewImg();
});
