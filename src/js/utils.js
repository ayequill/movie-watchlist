async function renderMovies(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const movies = data.results;

    console.log(movies);
    let str = "";
    movies.map((movie) => {
      document.querySelector(
        ".movie-card"
      ).innerHTML += `<div class="card animate__animated animate__bounceInUp">
      <div class="card-img">
        <img data-image="${movie.id}"src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
      </div>
      <div class="movie-details">
        <div class="card-title">
          <p class="title">${movie.original_title} <span><i class="bi bi-star-fill"></i>${movie.vote_average}</span></p>
        </div>
        <div class="genre-details">
          <p class="runtime">117min</p>
          <p class="genre">Drama, Action, Sci-fi</p>
          <p data-favorite="${movie.id}" class="add"><i class="fa-brands fa-plus"></i> Watchlist</p>
        </div>
        <div class="overview">
          <p >${movie.overview}</p>
        </div>
      </div>
     </div>
     <div class="divider"></div>`;
    });
  } catch (err) {
    console.log(err);
  }
}

async function renderLibrary(id) {

  try{
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US`
    );
    const movie = await res.json();
  
    document.querySelector(
      ".movie-card"
    ).innerHTML += `<div class="card animate__animated animate__bounceInUp">
      <div class="card-img">
        <img data-image="${movie.id}"src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
      </div>
      <div class="movie-details">
        <div class="card-title">
          <p class="title">${movie.original_title} <span><i class="bi bi-star-fill"></i>${movie.vote_average}</span></p>
        </div>
        <div class="genre-details">
          <p class="runtime">117min</p>
          <p class="genre">Drama, Action, Sci-fi</p>
          <p data-remove="${movie.id}" class="add"><i class="bi bi-dash"></i> Remove</p>
        </div>
        <div class="overview">
          <p >${movie.overview}</p>
        </div>
      </div>
     </div>
     <div class="divider"></div>`;
  } catch(error){
    console.log(error);
  }
} 
async function renderMini(id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US`
    );
    const movie = await res.json();

    document.querySelector(".movie-card").innerHTML = "";
    document.querySelector(".movie-card").classList.toggle("hidden");
    document.getElementById("libBtn").style.display = "block";

    document.querySelector(".movie").innerHTML = `
     <i id="backBtn" class="bi bi-backspace-fill"></i>
     <div class="movie-img-container">
     <img class="backdrop" src="https://image.tmdb.org/t/p/original/${
       movie.backdrop_path
     }" alt="">
     <img class="movie-img
      " src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
      </div>
     <p class="movie-title">${movie.original_title}</p>
     <p class="movie-overview">${movie.overview}</p>
     <p class="movie-release">${movie.release_date}</p>
   
     <p class="movie-review">imdb Rating: ${movie.vote_average.toFixed(2)}</p>
     <div class="divider"></div>
     <h2 class="similar">Similar Movies</h2>`;
  } catch (error) {
    console.log(error);
  }
}

async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { renderMovies, renderLibrary, renderMini };
