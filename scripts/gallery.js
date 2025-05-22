const images = ['../images/car1.png','../images/car2.jpg','../images/car3.jpg'];
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const image = document.querySelector('.images');
const textImage = document.getElementById('text-image');
let indexImage = 0;
previousButton.addEventListener('click', () => {
    if(indexImage>0){
        indexImage--;
        changeImage(indexImage);
    }
});
nextButton.addEventListener('click', () => {
    if(indexImage < images.length-1){
        indexImage++;
        changeImage(indexImage);
    }
});


function changeImage(index){
    image.src = images[index]
    textImage.textContent = 'Фото ' + (index+1);
}
