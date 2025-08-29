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


// clear btn funtionality

document.getElementById("clear-btn").addEventListener("click", function(e){
    e.preventDefault()
    document.getElementById("call-history").style.display = "none"
})


// copy btn funtionality

cardContainerHeart.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.closest(".copy-btn")){
        const cardContainerHeart = parseInt(1)
        const navberCopyBtn = parseInt(document.getElementById("navber-copy-btn").innerText)
        const addCopy = navberCopyBtn + cardContainerHeart
        document.getElementById("navber-copy-btn").innerText = addCopy
    }
})



// all call  1


document.getElementById('all-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling National Emergency Service 999... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})

// police call   2

document.getElementById('police-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Police Helpline Number Service 999... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})

// Fire Service Number call   3
document.getElementById('fier-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Fire Service Number  999... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})

// Ambulance Service call   4
document.getElementById('health-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Ambulance Service Number 1994-999999... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})
 
// Women & Child Helpline call  5
document.getElementById('ambulance-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Women & Child Helpline Service Number 109... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})
// Anti-Corruption Helpline  6
document.getElementById('government-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Anti-Corruption Helpline Service Number 106... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})

// Electricity Helpline call 7
document.getElementById('electricity-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Electricity Helpline Service 16216... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})

// Brac Helpline  8
document.getElementById('ngo-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Brac Helpline Service 16445... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})

// Bangladesh Railway Helpline call  9
document.getElementById('travel-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Bangladesh Railway Helpline 163... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})





// Fire Service Number
const mainCallHistory =document.getElementById('all-call').addEventListener('click',function(e){

    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)
    if( nevberCoin >= 20 ){
        const parentCallHistory = document.getElementById('call-history')

    
    const addTimeElement = document.getElementById('add-call-history')

    
    const creatElement = addTimeElement.cloneNode(true)


    parentCallHistory.appendChild(creatElement)
    }
    
})

