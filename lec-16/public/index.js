function getCommentData(){
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then( (res) => {
        console.log(res.data)
    })

    .catch( (err) =>{
        console.log(err.message)
    })
}

getCommentData()

async function getCommentDataAsync(){
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
        console.log(res.data)
    }

    catch(err){
        console.log(err.message)
    }
}

getCommentDataAsync()

function addUser(email , password){

    axios.post('/users', {
    email: email,
    password: password
    })
    .then(function (response) {
    console.log(response.data);
    })
    .catch(function (error) {
    console.log(error.message);
    });
}

addUser("ritesh@gmail.com" , "1234")