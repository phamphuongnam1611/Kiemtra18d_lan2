window.onscroll = function() {
    var kc = document.documentElement.scrollTop;
    var header = document.getElementById("header");
    var logo = document.getElementById("img");
    var imgfix = document.getElementById("khung-phai");

    console.log(kc);
    if(kc >690) {
        header.style.padding = "0px 0px 20px 10px"
        logo.style.fontSize = "20px"
        imgfix.style.position = "fixed"
        imgfix.classList.add("imgfix")

    }
    else {
        header.style.padding = "0px 0px"
        logo.style.fontSize = "20px"
    }
};



function opentimkiem(){
    var search = document.getElementById("search");
    // khung.style.top = "50px";
    // khung.style.transition = "0.5s";
    if(search.classList.contains("hieuung2")){
        search.classList.remove("hieuung2");
    }else{
       search.classList.add("hieuung2"); 
    }
    
}