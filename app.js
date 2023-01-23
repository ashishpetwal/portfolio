let hamBtn = document.getElementsByClassName("myBtn");
let list = document.getElementById("list");

const handleClick = () =>{
    if(list.style.display == "block"){
        list.style.display = "none";
    }
    else{
        list.style.display = "block";
    }
}