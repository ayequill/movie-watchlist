const cardContainer = document.querySelector('.movie-card')
const searchBtn = document.getElementById('searchBtn')
const searchText = document.getElementById('searchText')
const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'

const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&query=spiderman&page=1&include_adult=false'


async function renderMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    const movies = data.results

    movies.map((movie)=>{
    
    cardContainer.innerHTML += `<div class="card">
   <div class="icons">
     <i data-info="${movie.id}" class="bi bi-info-circle-fill"></i>
    <i class="bi bi-star"></i>
 </div>
 <img data-image="${movie.id}"src="https://image.tmdb.org/t/p/w500${movie.poster_path}"alt="">
 <p class="title">${movie.original_title}</p>
 <p class="review">imdb Rating: ${movie.vote_average}</p>
 </div>`
   })
}

renderMovies(discoverUrl)



document.addEventListener('click', (e)=>{
    if (e.target.id === 'searchBtn'){
        document.querySelector('.movie').innerHTML = ''
        document.querySelector('.movie').classList.toggle = ('hidden')
        cardContainer.innerHTML = ''
        cardContainer.classList.toggle('hidden')

        renderMovies(`https://api.themoviedb.org/3/search/movie?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&query=${searchText.value}&page=1&include_adult=false`)
    }
    if (e.target.dataset.info){
        renderMini(e.target.dataset.info)
        renderMovies(`https://api.themoviedb.org/3/movie/${e.target.dataset.info}/recommendations?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&page=1`)  
    }if (e.target.dataset.image){
        renderMini(e.target.dataset.image)
        renderMovies(`https://api.themoviedb.org/3/movie/${e.target.dataset.image}/similar?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&page=1`) 
    }

}) 

async function renderMini (id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US`)
    const movie = await res.json()

    cardContainer.innerHTML = ''
    cardContainer.classList.toggle('hidden')

   document.querySelector('.movie').innerHTML = `
   <div class="movie-img-container">
   <img class="backdrop" src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="">
   <img class="movie-img
    " src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
    </div>
   <p class="movie-title">${movie.original_title}</p>
   <p class="movie-overview">${movie.overview}</p>
   <p class="movie-release">${movie.release_date}</p>
 
   <p class="movie-review">imdb Rating: ${movie.vote_average.toFixed(2)}</p>
 `
   
}

async function renderSimilarMovies (id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&page=1`)
    const data = await res.json()
}