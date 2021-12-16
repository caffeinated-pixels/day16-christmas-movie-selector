const ageSelector = document.getElementById('age-selector')
const genreSelector = document.getElementById('genre-selector')

const btn = document.getElementById('btn')
const suggestedMovie = document.getElementById('suggested-movie')

const moviesArr = [
  {
    name: 'Die Hard',
    age: '18+',
    genre: 'Action',
  },
  {
    name: 'Bad Santa',
    age: '18+',
    genre: 'Comedy',
  },
  {
    name: 'Scrooged',
    age: 'PG',
    genre: 'Comedy',
  },
  {
    name: 'Merry Christmas Mr. Lawrence',
    age: '15',
    genre: 'War',
  },
  {
    name: 'Raiders of the Lost Ark',
    age: 'PG',
    genre: 'Action',
  },
  {
    name: "National Lampoon's Christmas Vacation",
    age: 'PG',
    genre: 'Comedy',
  },
  {
    name: "It's a Wonderful Life",
    age: 'U',
    genre: 'Drama',
  },
  {
    name: "On Her Majesty's Secret Service",
    age: 'PG',
    genre: 'Romance',
  },
  {
    name: "Yogi's First Christmas",
    age: 'U',
    genre: 'Family',
  },
]

// Task:
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals:
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc.
