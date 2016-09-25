'strict'

// this.addEventListener('DOMContentLoaded', e => {
//   var frontCard = document.getElementsByClassName('frontCard')[0]
//   var backCard = document.getElementsByClassName('backCard')[0]
//
//   frontCard.addEventListener('click', ev => {
//     ev.target.className = ev.target.className === 'frontCard' ? 'backCard' : 'frontCard'
//   })
//
//   backCard.addEventListener('click', ev => {
//     ev.target.className = ev.target.className === 'frontCard' ? 'backCard' : 'frontCard'
//   })
// })

this.addEventListener('DOMContentLoaded', event => {
  $('#draggable').draggable()
  var flipCard = document.getElementsByClassName('flipCard')[0]
  $(flipCard).draggable()
  flipCard.addEventListener('click', e => {
    flipCard.className = flipCard.className === 'flipCard' ? 'flipCardBack' : 'flipCard'
  }, true)
})
