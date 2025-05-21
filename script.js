const img = document.querySelector("img");
const newImgBtn = document.querySelector(".new-img");
const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector("#item");
const form = document.querySelector(".form");
const message = document.querySelector(".message");

function fetchNewImg(searchValue = "cats") {
  fetchURL = `https://api.giphy.com/v1/gifs/translate?api_key=6laVh6xhrqkllMnPOOQWvozyaWq3K8Xv&s=${searchValue}`;

  fetch(fetchURL, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((response) => {
      if (!response.data || !response.data.images) {
        img.src = "https://placehold.co/300x200?text=No+GIF+Found";
        message.textContent = `No GIF found for "${searchValue}". Try something else!`;
      } else {
        message.textContent = "";
        img.src = response.data.images.original.url + `?cb=${Date.now()}`;
      }
    })
    .catch((e) => {
      console.log("Fetch error:" + e);
      img.src = "https://placehold.co/300x200?text=Error+Loading+GIF";
      message.textContent = "Something went wrong. Please try again later.";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchNewImg();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchBar.value.trim();
  fetchNewImg(searchValue);
});

newImgBtn.addEventListener("click", () => {
  fetchNewImg();
});
