async function renderMovies(i){const e=await fetch(i),a=(await e.json()).results;console.log(a);a.map((i=>{document.querySelector(".movie-card").innerHTML+=`<div class="card animate__animated animate__bounceInUp">\n    <div class="card-img">\n      <img data-image="${i.id}"src="https://image.tmdb.org/t/p/w500/${i.poster_path}" alt="">\n    </div>\n    <div class="movie-details">\n      <div class="card-title">\n        <p class="title">${i.original_title} <span><i class="bi bi-star-fill"></i>${i.vote_average}</span></p>\n      </div>\n      <div class="genre-details">\n        <p class="runtime">117min</p>\n        <p class="genre">Drama, Action, Sci-fi</p>\n        <p data-favorite="${i.id}" class="add"><i class="fa-brands fa-plus"></i> Watchlist</p>\n      </div>\n      <div class="overview">\n        <p >${i.overview}</p>\n      </div>\n    </div>\n   </div>\n   <div class="divider"></div>`}))}async function renderLibrary(i){const e=await fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US`),a=await e.json();document.querySelector(".movie-card").innerHTML+=`<div class="card animate__animated animate__bounceInUp">\n    <div class="card-img">\n      <img data-image="${a.id}"src="https://image.tmdb.org/t/p/w500/${a.poster_path}" alt="">\n    </div>\n    <div class="movie-details">\n      <div class="card-title">\n        <p class="title">${a.original_title} <span><i class="bi bi-star-fill"></i>${a.vote_average}</span></p>\n      </div>\n      <div class="genre-details">\n        <p class="runtime">117min</p>\n        <p class="genre">Drama, Action, Sci-fi</p>\n        <p data-remove="${a.id}" class="add"><i class="bi bi-dash"></i> Remove</p>\n      </div>\n      <div class="overview">\n        <p >${a.overview}</p>\n      </div>\n    </div>\n   </div>\n   <div class="divider"></div>`}async function renderMini(i){const e=await fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US`),a=await e.json();document.querySelector(".movie-card").innerHTML="",document.querySelector(".movie-card").classList.toggle("hidden"),document.getElementById("libBtn").style.display="block",document.querySelector(".movie").innerHTML=`\n   <i id="backBtn" class="bi bi-backspace-fill"></i>\n   <div class="movie-img-container">\n   <img class="backdrop" src="https://image.tmdb.org/t/p/original/${a.backdrop_path}" alt="">\n   <img class="movie-img\n    " src="https://image.tmdb.org/t/p/w500/${a.poster_path}" alt="">\n    </div>\n   <p class="movie-title">${a.original_title}</p>\n   <p class="movie-overview">${a.overview}</p>\n   <p class="movie-release">${a.release_date}</p>\n \n   <p class="movie-review">imdb Rating: ${a.vote_average.toFixed(2)}</p>\n `}export{renderMovies,renderLibrary,renderMini};