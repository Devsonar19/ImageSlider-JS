const images=[
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
];

let index=0;


function showImage(){
    const slider=document.getElementById("sliderImage");
    slider.src = images[index];
}

function nextImage(){
    index=(index+1)%images.length;
    showImage();
}
function prevImage(){
    index=(index-1+images.length)%images.length;
    showImage();
}

