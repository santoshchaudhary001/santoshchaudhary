

window.addEventListener('load',function(){


// download functions in js start

const downloadBtn = document.querySelector('.download-btn');

// google drive file link
const fileLink =document.querySelector('#pdffile');

const initTimer = () =>{
// check if downloadbtn disable timer is run or not 
if(downloadBtn.classList.contains('disable-timer')){
  return(location.href = fileLink);
}

  // get-data-timer attribute from the html

  let timer = downloadBtn.dataset.timer;
  downloadBtn.classList.add('timer');   
  // downloadBtn.innerHTML = `Download after ${timer}s`;

  // creating initCounter Variable with setInterval functions
  let initCounter = setInterval(()=>{
    if(timer > 0){
      timer--;
     return downloadBtn.innerHTML = `Download after ${timer}s`;
    }
    clearInterval(initCounter); 
    location.href = fileLink;
    downloadBtn.textContent = 'Your file start downloading...';

    setTimeout(() => {
      downloadBtn.classList.replace('timer', 'disable-timer');
      downloadBtn.innerHTML = `Done`;
      
    },3000);
  },1000) //1000 milliseconds = 1s; 
}

downloadBtn.addEventListener('click', initTimer);

function typeEffect(){
  var typed = new Typed('.type', {
    strings: ['Developer','Designer','Traveller'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });
}

typeEffect();


// typewrite effect
// import Typewriter from 'typewriter-effect/dist/core';

});