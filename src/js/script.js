import { renderMovies, renderMini } from "./utils.js";
const cardContainer = document.querySelector(".movie-card");
const searchText = document.getElementById("searchText");
const discoverUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const trendingUrl =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=ba3d1895317548c2e4d01a7e948e60ae";

let lib = [];

renderMovies(trendingUrl);

if (JSON.parse(localStorage.getItem("id"))) {
  lib = JSON.parse(localStorage.getItem("id"));
  // rendering all favorited items by looping over each dataset id
  setTimeout(() => {
    lib.forEach((id) => {
      const favContainer = document.querySelector(`[data-favorite="${id}"]`);
      if (favContainer) {
        favContainer.innerHTML =
          '<i class="fa-solid fa-square-check"></i> Added';
        favContainer.classList.toggle("added");
      }
    });
  }, 1000);
}

document.addEventListener("click", (e) => {
  if (e.target.id === "searchBtn") {
    document.querySelector(".movie").innerHTML = "";
    document.querySelector(".movie").classList.toggle = "hidden";
    cardContainer.innerHTML = "";
    cardContainer.classList.toggle("hidden");

    renderMovies(
      `https://api.themoviedb.org/3/search/movie?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&query=${searchText.value}&page=1&include_adult=false`
    );
  }
  if (e.target.dataset.info) {
    renderMini(e.target.dataset.info);
    renderMovies(
      `https://api.themoviedb.org/3/movie/${e.target.dataset.info}/recommendations?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&page=1`
    );
  }
  if (e.target.dataset.image) {
    renderMini(e.target.dataset.image);
    renderMovies(
      `https://api.themoviedb.org/3/movie/${e.target.dataset.image}/similar?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&page=1`
    );
  }
  if (e.target.id === "backBtn") {
    document.querySelector(".movie").innerHTML = "";
    document.querySelector(".movie").classList.toggle = "hidden";
    renderMovies(discoverUrl);
  }
  if (e.target.dataset.favorite) {
    // checking if movie ID already exits in my library Array
    if (!lib.includes(e.target.dataset.favorite)) {
      // adding to array to and saving to local storage
      lib.unshift(e.target.dataset.favorite);
      localStorage.setItem("id", JSON.stringify(lib));

      const favContainer = document.querySelector(
        `[data-favorite="${e.target.dataset.favorite}"]`
      );
      favContainer.innerHTML = '<i class="fa-solid fa-square-check"></i> Added';
      favContainer.classList.toggle("added");
    } else console.log("it does");
  }
});
