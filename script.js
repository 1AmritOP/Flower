let checkBox = document.getElementById("toggler");
let nav =document.querySelector(".navbar")
let flag=0;
checkBox.addEventListener("click",function(){
    if( flag%2 == 0){
        nav.style.display ="block";
        flag++;
    }
    else{
        nav.style.display ="none";
        flag++;
    }
    // console.log("hello")
})