


let form = document.getElementById('input-container');
let input = document.querySelector('form input')
let container = document.querySelector('.todo-container')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("form was submitted");
    // get text from input
    console.log(input.value);
    // make a div an put it in the container
    container.innerHTML += `
        <div>
            <input type="checkbox">
            <p>${input.value}</p>
        </div> 
    `
    input.value = ''
})


const addTodo = () => {
    
}





// 4 ways to select elements using JS

// 1 getElementById
const navbar = document.getElementById('my-nav');

// 2 getElementsByClassName
const arrayOfNavbarButtons = document.getElementsByClassName('navbar-button')

// 3 querySelector (selects first element found that matches the css selector)
// uses css selector style
const firstNavbarButton = document.querySelector('nav .navbar-button');

// 4 querySelectorAll (selects all elements found that match css selector)
const allNavbarButtons = document.querySelector('nav .navbar-button');
