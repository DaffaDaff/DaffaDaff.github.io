// ----- preloader -----

function preloaded(){
    document.getElementById("preloader").style.display = "none"
}

setTimeout(
    function(){
        preloaded();
    },
    1500
)

// ----- gallery -----

function changeGallery(){
    document.getElementById("galleryImg").setAttribute("src", "img/gallery/2.jpg");
}

setTimeout(
    function(){
        changeGallery();
    },
    150
)