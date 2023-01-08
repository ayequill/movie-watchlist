import { renderMovies, renderLibrary, renderMini } from "./utils.js";

let collection = [];
console.log("hello");

if (JSON.parse(localStorage.getItem("id"))) {
  collection = JSON.parse(localStorage.getItem("id"));
  collection.forEach((id) => renderLibrary(id));
}

document.addEventListener("click", (e) => {
  if (e.target.dataset.image) {
    renderMini(e.target.dataset.image);
    renderMovies(
      `https://api.themoviedb.org/3/movie/${e.target.dataset.image}/similar?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&page=1`
    );
  }
  if (e.target.id === "backBtn") {
    document.querySelector(".movie-card").innerHTML = "";
    document.querySelector(".movie").innerHTML = "";
    collection.forEach((id) => renderLibrary(id));
  }
  if (e.target.dataset.remove) {
    collection = collection.filter((item) => item !== e.target.dataset.remove);
    localStorage.setItem("id", JSON.stringify(collection));
    document.querySelector(".movie-card").innerHTML = "";
    document.querySelector(".movie").innerHTML = "";
    collection.forEach((id) => renderLibrary(id));
  }
});
