const signupform  = document.querySelector("#signup");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

function addUser(email, password) {
    let newuser = {
        email: email,
        password: password
    };

    fetch('/adduser', {
        method: 'POST',
        body: JSON.stringify(newuser),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data.success) {
            alert("User added successfully");
            signupform.reset();
        } else {
            alert(data.error);
            signupform.reset();
        }
    })
    .catch(err => {
        console.log(err);
    });
}

signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    addUser(email.value, password.value);
});
