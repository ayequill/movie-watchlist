const cardContainer = document.querySelector('.movie-card')
const searchBtn = document.getElementById('searchBtn')
const searchText = document.getElementById('searchText')
const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&query=spiderman&page=1&include_adult=false'


async function renderMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    const movies = data.results.slice(10)


    movies.map((movie)=>{
    
    cardContainer.innerHTML += `<div class="card">
   <div class="icons">
     <i  class="fa-solid fa-circle-info"></i>
 </div>
 <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"alt="">
 <p class="title">${movie.original_title}</p>
 <p class="review">imdb Rating: ${movie.vote_average}</p>
 </div>`
   })

   document.querySelectorAll('.icons').forEach((btn)=>{
    btn.addEventListener('click', () =>{
        console.log('clicked');
    })
})
}

renderMovies(discoverUrl)



document.addEventListener('click', (e)=>{
    if (e.target.id === 'searchBtn'){
        cardContainer.innerHTML = ''
        renderMovies(`https://api.themoviedb.org/3/search/movie?api_key=ba3d1895317548c2e4d01a7e948e60ae&language=en-US&query=${searchText.value}&page=1&include_adult=false`)

infoBtn.forEach((x)=> console.log(x))

    }

}) 

