
const searchTerm = document.querySelector(".searchTerm")
const movieList = document.getElementById("display-movie-list")
const searchButton = document.querySelector(".searchButton")
let searchInput
let movieId = []



movieList.innerHTML =

`<div class ="initialScreen">
    <div><img src="imgs/start-exploring.png"></div>
    <div><p>Start exlploring</p></div>
</div>
  `

searchTerm.addEventListener("keyup", (e) => {
   searchInput = e.target.value.toLowerCase()
  console.log(searchInput)
/*  const filteredMovies = movieSearch.filter(movie => {
  return movie.Title.toString().toLowerCase().includes(searchInput)
  })
  console.log(filteredMovies)*/
})

//searchButton.addEventListener("click", getMovies)


//function getMovies() {

  async function getTitle() {

    const urlMovie = await fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=ea2329ec`)
    const urlID = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=ea2329ec`)

      Promise.all([urlMovie, urlID]).then(values => {
        return Promise.all(values.map(r => r.json()))
      }).then(([urlMovie,urlID]) => {
        console.log(urlMovie)
        console.log(urlID)
      }).catch(e => {
        console.log("nope")
        console.log(e)
      })

    }
  //}

  /*  try {
      const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=ea2329ec`
      const res = await fetch(url)
      const data  = await res.json()
      return data

    } catch(err) {
      console.error(err)
      alert(err)
    }
  }

getTitle().then(data => {
  console.log(data.Search)
  movieSearch =  data.Search
  movieId = movieSearch.map(movie => {

  /*  movieList.innerHTML +=
    `
  <div class="movies">
   <div class="poster"><img src= "${movie.Poster}"></div>
   <div class="title"> ${movie.Title} </div>
   <div class="runtime"> ${movie.Year} </div>
  </div>
    <hr>
   `
   console.log(movie.imdbID)
   return movie.imdbID

   })
      console.log(movieId)
    })


}

   async function getMovieId() {

    try {
      const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=ea2329ec`
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      return data

  } catch(err) {
    console.error(err)
    alert(err)
     }




  getMMovieId().then(data => {
     movieList.innerHTML += `
   <div class="movies">
    <div class="poster"><img src= "${data.Poster}"></div>
    <div class="title"> ${data.Title} </div>
    <div class="score"><img src="star-score.png"> ${data.imdbRating} </div>
    <div class="runtime"> ${data.Runtime} </div>
    <div class="genre"> ${data.Genre} </div>
    <div class="watchlist-btn"><a href="#"><img src="watchlist-btn.png"></a> watchlist </div>
    <div class="plot"> ${data.Plot} </div>
  </div>
        <hr>
    `
    })
 document.querySelector(".initialScreen").style.display = "none"
 }
*/
