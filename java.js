let images=["images/img1.JPEG","images/img2.JPG","images/img3.JPG","images/img4.jpeg","images/img5.jpeg"];
let show=document.getElementsByClassName('show');

for(let i=0;i<=images.length;i++){
    show[i].onmouseover=function(){
        document.Gallery.src=images[i];
    }
}
