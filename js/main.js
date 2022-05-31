
const searchTerm = document.querySelector(".searchTerm")
const movieList = document.getElementById("display-movie-list")
const searchButton = document.querySelector(".searchButton")
let searchInput
let movies = []



movieList.innerHTML =

`<div class ="initialScreen">
    <div><img src="imgs/start-exploring.png"></div>
    <div><p>Start exlploring</p></div>
</div>
  `

searchTerm.addEventListener("keyup", (e) => {
   searchInput = e.target.value.toLowerCase()
  console.log(searchInput)
  /*filteredMovies = movieSearch.filter(movie => {
  return movie.Title.toString().toLowerCase().includes(searchInput)
  })
  console.log(filteredMovies)*/
})

searchButton.addEventListener("click", getTitle)


  async function getTitle() {
      movieList.innerHTML =""
    let data = await fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=ea2329ec`)
      .then(res=> res.json())
      .then(data => {
        movies = data.Search
        console.log(movies)
        return movies
      })


      movies.map(movie => fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=ea2329ec`)
        .then(r => r.json())
        .then(movie => {
          console.log(movie)
          movieList.innerHTML += `
        <div class = "movies">
           <div class="movie-card poster"><img src= "${movie.Poster}"></div>
           <div class="movie-card title"> ${movie.Title} </div>
           <div class="movie-card score"><img src="imgs/star-score.png"> ${movie.imdbRating} </div>
           <div class="movie-card runtime"> ${movie.Runtime} </div>
           <div class="movie-card genre"> ${movie.Genre} </div>
           <div class="movie-card watchlist-btn"><a href= "javascript: getBusy()"><img src="imgs/watchlist-btn.png"></a> watchlist </div>
           <div class="movie-card plot"> ${movie.Plot} </div>
        </div>
             <hr>

         `

       }))

      document.querySelector(".initialScreen").style.display = "none"

      }

      function getBusy(){
        alert("get busy")
      }
