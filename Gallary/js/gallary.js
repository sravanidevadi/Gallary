// Gallary Image code
var allImg=document.images;
function allImgTags(){
    for(i=0;i<=allImg.length;i++)
    {
        allImg[i].src=`../Asset/${i}.jpeg`
        allImg[i].style.width="200px"
        allImg[i].style.height="180px"
        allImg[i].addEventListener("click",function(){
            document.getElementById("bigImage").style.display="flex"
            // ../Asset/1.jpeg
        })
    }
}
allImgTags()

var globalSrc;
function passSrc(urlOfimg){
    document.getElementById("bigimg").style.backgroundImage=`url(${urlOfimg})`
    globalSrc=urlOfimg;
}

// closeWindow

function closeWindow(){
    document.getElementById("bigImage").style.display="none";
    document.getElementById("galleryImageEdit").style.display="none"
}

function openEditWindow(){
    document.getElementById("galleryImageEdit").style.display="flex"
    document.getElementById("image").style.backgroundImage=`url(${globalSrc})`
}

// image edit code
function imageEdit(){
    var blurValue=document.getElementById("blur").value
    var brightnessValue=document.getElementById("brightness").value
    var contrastValue=document.getElementById("contrast").value
    var grayscaleValue=document.getElementById("grayScale").value
    var hueValue=document.getElementById("hue-Rotate").value
    var invertValue=document.getElementById("invert").value
    var opacityValue=document.getElementById("opacity").value
    var saturateValue=document.getElementById("saturate").value
    var sepiaValue=document.getElementById("sepia").value

    document.getElementById("image").style.filter=`blur(${blurValue}px) brightness(${brightnessValue}%) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueValue}deg) invert(${invertValue}%) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%)`

    var rotateX=document.getElementById("rotatex").value
    var rotateY=document.getElementById("rotatey").value
    var rotateZ=document.getElementById("rotatez").value
    var scaleX=document.getElementById("scalex").value
    var scaleY=document.getElementById("scaley").value
    var skewX=document.getElementById("skewx").value
    var skewY=document.getElementById("skewy").value
    var translateX=document.getElementById("translatex").value
    var translateY=document.getElementById("translatey").value

    document.getElementById("image").style.transform= `rotatex(${rotateX}deg) rotatey(${rotateY}deg) rotatez(${rotateZ}deg) scalex(${scaleX}) scaley(${scaleY}) skewx(${skewX}deg) skewy(${skewY}deg) translatex(${translateX}px) translatey(${translateY}px)`
}