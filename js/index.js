var imgs = document.querySelectorAll(".sub-img img") //node list
var mainImg = document.querySelector(".main-img")
for(var i = 0 ; i<imgs.length ; i++){
    imgs[i].addEventListener("click" , function(e){
        // console.log( e.target.getAttribute("src"))
        var currentSource =  e.target.getAttribute("src")
        mainImg.setAttribute("src" , currentSource)
    })
}