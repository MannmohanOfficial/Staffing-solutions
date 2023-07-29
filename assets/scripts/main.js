const images = [
    '../../assets/images/dflt.png', // Replace with the URL of your first image
    '../../assets/images/varient2.png', // Replace with the URL of your second image
];

const circleImages = [
  '../../assets/images/rightSecAnim1.png',
  '../../assets/images/rightSecAnim2.png',
  '../../assets/images/rightSecAnim3.png'
]

const wwaImages = [
  '../../assets/images/whoweare1.png',
  '../../assets/images/whoweare2.png',
  '../../assets/images/whoweare3.png',
]

const interval = 1000;


function startSlideshow() {
    let currentIndex = 0;
    const imgElement = document.getElementById('logoBg');
  
    function changeImage() {
      imgElement.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Initial image load
    changeImage();
  
    // Switch images at specified intervals
    setInterval(changeImage, interval);
}

function startSlideshow2() {
    let currentIndex = 0;
    const imgElement = document.getElementById('secCircle');
  
    function changeImage() {
      imgElement.src = circleImages[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Initial image load
    changeImage();
  
    // Switch images at specified intervals
    setInterval(changeImage, interval);
}

function startSlideshow3() {
  let currentIndex = 0;
  const imgElement = document.getElementById('wwa');

  function changeImage() {
    imgElement.src = wwaImages[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Initial image load
  changeImage();

  // Switch images at specified intervals
  setInterval(changeImage, interval);
}

window.addEventListener('load', startSlideshow);
window.addEventListener('load', startSlideshow2);
window.addEventListener('load', startSlideshow3);