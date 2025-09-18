// let button = document.getElementById("Click");
// let apiButton = document.getElementById("api")
// let x = 0;

// button.addEventListener("click", function() {
//     // Change the background color when button is clicked
//     if(x/2==0){
//     document.body.style.background = "lightgreen";
//     x++;
// }else{
//     document.body.style.background = "lightblue";
//     x--;
// }
// });


let button = document.getElementById("Click");
let apiButton = document.getElementById("api")
let x = 0;

debugger; // Inspect initial state

button.addEventListener("click", function() {
    debugger; // Pause when button is clicked

    // Change the background color when button is clicked
    if(x/2==0){
        document.body.style.background = "lightgreen";
        x++;
    }else{
        document.body.style.background = "lightblue";
        x--;
    }

    debugger; // Inspect updated value of x and background
});


apiButton.addEventListener("click", ()=>{
// Using JSONPlaceholder API to fetch posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        // Create a container to display posts
        const container = document.createElement('div');
        container.id = 'posts-container';
        document.body.appendChild(container);

        // Display first 5 posts
        data.slice(0, 5).forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.style.border = '1px solid #ccc';
            postDiv.style.margin = '10px';
            postDiv.style.padding = '10px';
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            container.appendChild(postDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    
})
    
    document.getElementById('userForm').addEventListener('submit', function(e) {
    let valid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Age validation
    const age = document.getElementById('age').value.trim();
    if (age === '' || isNaN(age) || Number(age) < 1) {
        document.getElementById('ageError').textContent = 'Enter a valid age.';
        valid = false;
    } else {
        document.getElementById('ageError').textContent = '';
    }

    if (!valid) {
        e.preventDefault();
    }
});