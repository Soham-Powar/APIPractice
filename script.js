const img = document.querySelector("img");

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
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      console.log(e);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchNewImg();
});
