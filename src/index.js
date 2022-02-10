// id="ramen-menu" id for the images.

function getThePics () {fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => data.forEach (renderImages))};

    getThePics()

function renderImages (data) {
let parentDiv = document.querySelector('#ramen-menu')

let photo = document.createElement('img')
photo.className = 'pics'
photo.src = data.image;
// photo.setAttribute(title, data.name); not sure how to access the names of the JSON element #BRANDON:)


// adding photo into the big space
photo.addEventListener('click', function (e) {
    let bigImage = document.querySelector('.detail-image')
    bigImage.src =e.target.src;

    // JSON.parse(e.target) ????
    // console.log(e.target['name']) HOW DO WE TARGET STUFF IN the JSON
    

    // adding the details underneath the big photo
    let ratingArea = document.querySelector('#rating-display')
    ratingArea.textContent = e.target.rating;
    

    let commentArea = document.querySelector('comment-display')
    // commentArea.textContent = e.target.comment;  HOW DO WE DO THIS? 

    

    let bigName = document.querySelector('#bigName')
    // bigName.innerText = e.target['name'];
    let resturantName = document.querySelector('.restaurant')
    
    })

    parentDiv.appendChild(photo)
}

function createNewPhoto () {
let formHolder = document.querySelector('#new-ramen')
let newResturant = document.querySelector('#new-restaurant')
let newImage = document.querySelector('#new-image')
let newRating = document.querySelector('#new-rating')
let newComment = document.querySelector('#new-comment')

let submitButton = document.querySelector('#submit')

submitButton.addEventListener("click", function(e) {
console.log('clicked!')
e.preventDefault()
    
});
}



// photo.addEventListener('click', function (e) {
//     let bigImage = document.querySelector('.detail-image')
//     bigImage.src =e.target.src;












// function dynamicNames () {
//     let bigName = document.querySelector('#bigName')
//     let resturantName = document.querySelector('.restaurant')
//     console.log(resturantName)
// }

// dynamicNames()



// function moveImageToCenter() {
//     let bigImage = document.querySelector('.detail-image')
//     bigImage.src 
//     // bigImage.append(photo)

// }


// element.addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   });




//     const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);