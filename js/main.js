
const searchTerm = document.querySelector(".searchTerm")
const movieList = document.getElementById("display-movie-list")
const searchButton = document.querySelector(".searchButton")
let searchInput
let movies = []
console.log(movies)
let favMovies = JSON.parse(localStorage.getItem('favMovies')) || [];
let movieID

movieList.innerHTML =

`<div class ="initialScreen">
    <div><img src="imgs/start-exploring.png"></div>
    <div><p>Start exlploring</p></div>
</div>
  `

searchTerm.addEventListener("keyup", (e) => {

    searchInput = e.target.value.toLowerCase()
  console.log(searchInput)
})

searchTerm.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    e.preventDefault()
    searchButton.click()
  }
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

      getMovieCard()

      }

      function getMovieCard() {
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
           <div class="movie-card watchlist-btn"><a id="link" href="#" onclick ="javascript: getWatchlist(movieID); return false;"><img src="imgs/watchlist-btn.png"></a> watchlist </div>
           <div class="movie-card plot"> ${movie.Plot} </div>
        </div>
             <hr>

         `
         movieID = movie.imdbID
         console.log(movieID)
         return movieID
       }))
        //  document.querySelector(".initialScreen").style.display = "none"

      }

    //  document.getElementById("link").addEventListener("click", getWatchlist)


      function getWatchlist(movieID) {
                console.log(movieID)
                fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=ea2329ec`)
                .then(r=> r.json())
                .then(data => {
                  favMovies.push(data)
                  console.log(data)
                  localStorage.setItem("favMovies", JSON.stringify(favMovies))
          })
        }
