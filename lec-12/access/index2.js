let todo = {
    id : 9876,
    title : "learn js"
}

function addToDo(){
    let li = document.createElement("li");
    li.innerHTML = `
    <ul>
        <li id ="122334354">
            <div>
                <input type="checkbox"  id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class ="edit">Edit correct </button>
                    <button class ="delete">Delete X </button>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae deleniti reprehenderit facilis? Ab, aliquam? </p>
                </div>
            </div>
        </li> 
    </ul>
    `

    document.querySelector("ul").appendChild(li);
}

addToDo();