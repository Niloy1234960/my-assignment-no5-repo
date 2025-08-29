//  heart btn funtionality
const cardContainerHeart = document.getElementById("card-container-heart");

cardContainerHeart.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.closest(".card-heart")){
        const cardContainerHeart = parseInt(1)
        const navberHeart = parseInt(document.getElementById ("navbar-heart").innerText);
        const addHeart = cardContainerHeart + navberHeart 
        document.getElementById("navbar-heart").innerText = addHeart
    }
})



