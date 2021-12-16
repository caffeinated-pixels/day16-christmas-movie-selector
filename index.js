const ageSelector = document.getElementById('age-selector')
const genreSelector = document.getElementById('genre-selector')

const btn = document.getElementById('btn')
const suggestedMovie = document.getElementById('suggested-movie')

ageSelector.addEventListener('change', recommendMovie)
genreSelector.addEventListener('change', recommendMovie)

const moviesArr = [
  {
    name: 'Die Hard',
    age: '18+',
    genre: 'Action',
    imdbUrl: 'https://www.imdb.com/title/tt0095016',
  },
  {
    name: 'Bad Santa',
    age: '18+',
    genre: 'Comedy',
    imdbUrl: 'https://www.imdb.com/title/tt0307987',
  },
  {
    name: 'Scrooged',
    age: 'PG',
    genre: 'Comedy',
    imdbUrl: 'https://www.imdb.com/title/tt0096061',
  },
  {
    name: 'Merry Christmas Mr. Lawrence',
    age: '15',
    genre: 'War',
    imdbUrl: 'https://www.imdb.com/title/tt0085933',
  },
  {
    name: 'Raiders of the Lost Ark',
    age: 'PG',
    genre: 'Action',
    imdbUrl: 'https://www.imdb.com/title/tt0082971/',
  },
  {
    name: "National Lampoon's Christmas Vacation",
    age: 'PG',
    genre: 'Comedy',
    imdbUrl: 'https://www.imdb.com/title/tt0097958',
  },
  {
    name: "It's a Wonderful Life",
    age: 'PG',
    genre: 'Drama',
    imdbUrl: 'https://www.imdb.com/title/tt0038650',
  },
  {
    name: "On Her Majesty's Secret Service",
    age: 'PG',
    genre: 'Romance',
    imdbUrl: 'https://www.imdb.com/title/tt0064757',
  },
  {
    name: "Yogi's First Christmas",
    age: 'PG',
    genre: 'Family',
    imdbUrl: 'https://www.imdb.com/title/tt0199161',
  },
]

function recommendMovie(e) {
  if (ageSelector.value && genreSelector.value) {
    const filteredMovies = filterMovies(ageSelector.value, genreSelector.value)
    const choosenMovie = chooseFromFilteredMovies(filteredMovies)
    displayMovie(choosenMovie)
  }
}

function filterMovies(age, genre) {
  return moviesArr.filter((movie) => movie.age === age && movie.genre === genre)
}

function chooseFromFilteredMovies(movies) {
  const numOfMovies = movies.length

  if (numOfMovies > 1) {
    const randomIndex = Math.floor(Math.random() * numOfMovies)
    return movies[randomIndex]
  }

  if (numOfMovies === 0) {
    return { name: 'no suitable movie', imbdUrl: '' }
  }

  return movies[0]
}

function displayMovie(movie) {
  const movieLink = document.createElement('a')
  movieLink.textContent = movie.name
  movieLink.href = movie.imdbUrl

  suggestedMovie.textContent = ''
  suggestedMovie.appendChild(movieLink)
}

// Task:
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals:
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc.
