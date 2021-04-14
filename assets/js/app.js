$(document).ready(function () {
    $('.header').height($(window).height());

})
// var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//     myInput.focus()
// })

var myModal = document.getElementById('myModal')
var modal = bootstrap.Modal.getInstance(myModal)
// console.log(modal) // null