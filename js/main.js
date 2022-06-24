
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
        movieList.innerHTML = ""
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
          const wrapper = document.createElement("div")
          wrapper.classList.add("movies")
          const poster = document.createElement("div")
          poster.classList.add("movie-card", "poster")
          const title = document.createElement("div")
          title.classList.add("movie-card", "title")
          const score = document.createElement("div")
          score.classList.add("movie-card", "score")
          const runtime = document.createElement("div")
          runtime.classList.add("movie-card", "runtime")
          const genre = document.createElement("div")
          genre.classList.add("movie-card", "genre")
          const watchlist = document.createElement("div")
          watchlist.classList.add("movie-card", "watchlist-btn")
          const plot = document.createElement("div")
          plot.classList.add("movie-card", "plot")
          wrapper.append(poster, title, score, runtime, genre, watchlist, plot)
          movieList.append(wrapper)
          const posterImage = document.createElement('img');
          poster.append(posterImage)
          posterImage.setAttribute('src', `${movie.Poster}`);
          plot.textContent =`${movie.Plot}`
          watchlist.innerHTML =`<img id= "${movie.imdbID}"  src="imgs/watchlist-btn.png" >watchlist`
          title.textContent =`${movie.Title}`
          genre.textContent =`${movie.Genre}`
          runtime.textContent =`${movie.Runtime}`
          score.innerHTML = `<img src=" imgs/star-score.png"> ${movie.imdbRating}`

            document.getElementById(movie.imdbID).addEventListener("click", function test(e) {
              console.log(e.target.id)
              movieID = e.target.id
              getWatchlist()
            })

         }))
       }



       async function getWatchlist() {

                let result = await fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=ea2329ec`)
                .then(r=> r.json())
                .then(result => {
                  favMovies.push(result)
                  console.log(result)
                localStorage.setItem("favMovies", JSON.stringify(favMovies))
      })
    }
