let edit = document.querySelector(".edit")
let delete1 = document.querySelector(".delete")

// parent sibling child

//1.next elementSibling
//2. previousElementSibling

console.log(edit.nextElementSibling); // <button class="delete">Delete</button>
console.log(edit.previousElementSibling); //null

console.log(edit.nextElementSibling.nextElementSibling.innerHTML) //h1

console.log(edit.parentElement.previousElementSibling)

let id = delete1.parentElement.parentElement.parentElement.getAttribute("id")
console.log(id)

//how to insert new element
//1. create new element -> createElement
//2. add required data in that element using innerHTML or innerText
//3. add that element in parent container using appendchild or append

