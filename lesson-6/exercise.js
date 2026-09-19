const BASE_URL = 'https://mindx-mockup-server.vercel.app/api/resources'
const USER = '/users'
const FLAGS = '/flags'
const API_KEY = '?apiKey=6aa6ad283ae2617b94d2a9aa'

//1. User resource

const listUser = fetch(`${BASE_URL}${USER}${API_KEY}`).then(response => {
  response.json().then(data => {
    console.log(data.data);
  })
})

// Flag
const listFlags = fetch(`${BASE_URL}${FLAGS}${API_KEY}`).then(response => {
  response.json().then(data => {
    console.log(data.data);
  })
})