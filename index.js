


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