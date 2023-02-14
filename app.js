let hamBtn = document.getElementsByClassName("myBtn");
let list = document.getElementById("list");
let title = document.getElementById("name-title");

const handleClick = () =>{
    if(list.style.display == "block"){
        list.style.display = "none";
    }
    else{
        list.style.display = "block";
    }
}

setInterval(() => {
    title.innerText = "Designer";
}, 7500);
setInterval(() => {
    title.innerText = "Developer";
}, 15000);