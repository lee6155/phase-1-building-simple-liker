// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.getElementsByClassName('like-glyph')
heartArray = [...hearts]
heartArray.forEach(function(item){
  item.addEventListener('click', tryFunction)
  })
  
function tryFunction (e) {
    let heart = document.getElementById(e.target.id)
    mimicServerCall()
    .then(heart.textContent = '♥')
    .then(heart.style.color = "red")
    .then(heart.addEventListener('click', function(){
      heart.textContent = '♡'
      heart.style.color = "rgb(170,184,194)"
    }))
    .catch(function(){
      document.getElementById('modal').hidden = false
      document.getElementById('modal-message').textContent = 'Random server error. Try again.'
      setTimeout(() => document.getElementById('modal').hidden = true, 3000)
      })
    }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
