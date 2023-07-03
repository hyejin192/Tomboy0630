// nav mousehover mouseover
let navList = document.querySelectorAll('.h_center>ul>li');

// 각 요소에 대해 반복문을 사용
navList.forEach(function (item) {
  // 마우스를 올렸을 때 이벤트 리스너 추가
  item.addEventListener("mouseover", function () {
    // 클래스명 "active" 추가
    this.classList.add("active");
  });

  // 마우스를 벗어났을 때 이벤트 리스너 추가
  item.addEventListener("mouseout", function () {
    // 클래스명 "active" 제거
    this.classList.remove("active");
  });
});


// navWrap open and close

function menuclick(e) {
  e.preventDefalut
  let navWrap = document.querySelector('.navWrap');
  let menuIcon = document.querySelector('.menu');

  menuIcon.classList.toggle('open');
  // 조건문 ? 을 사용해 클래스명 open의 유무를 확인하고 그에 따라 opacity 값이 1 또는 0으로 바뀐다
  navWrap.style.display = menuIcon.classList.contains('open') ? 'block' : 'none';
  // pointEvents를 사용해 메뉴 창이 투명한 상태일 때는 사용자의 클릭 이벤트를 무시하도록 한다
  // auto 또는 none의 값을 설정 : 메뉴창이 열려있을 때만 클릭 이벤트를 처리하거나 무시할 수 있다
  // navWrap.style.pointerEvents = menuIcon.classList.contains('open') ? 'auto' : 'none';

}

// page1의 cont2 mouseover scale효과
const imageContainer = document.querySelector('.mhover_img');
const zoomOverlay = document.querySelector('.zoom_img');
const zoomOverlayImg = document.createElement('img');
zoomOverlayImg.src = 'https://image.sivillage.com/upload/C00001/goods/org/642/230224004279642.jpg?RS=600&SP=1'; /* 돋보기 확대 영역에 표시할 이미지의 URL */

zoomOverlay.appendChild(zoomOverlayImg);

imageContainer.addEventListener('mousemove', function (e) {
  e.preventDefault();
  const containerRect = imageContainer.getBoundingClientRect();
  const xPos = e.clientX - containerRect.right - zoomOverlay.offsetWidth / 1;
  const yPos = e.clientY - containerRect.top - zoomOverlay.offsetHeight / 1;

  zoomOverlay.style.transform = `translate(${xPos}px, ${yPos}px)`;
});


// cubeslide
var swiper = new Swiper('.cubeslide', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 30,
    shadowScale: 0.8,
  }

});

// clickbook
let slideIndex=1;

function openBook(){
    document.getElementById('myBook').style.display="block"
}
function closeBook(){
  
    document.getElementById('myBook').style.display="none"
}
function plusSlide(n){
    showSlide(slideIndex += n)
}

function currentSlide(n){
    showSlide(slideIndex = n)
}

function showSlide(n){
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('demo');
    let captionText = document.getElementById('caption');

    if(n>slides.length){
        slideIndex = 1
    }
    if(n<1){
        slideIndex = slides.length;
    }
    for(let i=0; i<slides.length; i++) {
        slides[i].style.display="none";
    }
    slides[slideIndex - 1].style.display="block";
    for(let i=0; i<dots.length; i++) {
        dots[i].classList.remove('active')
    }
    dots[slideIndex - 1].classList.add('active')


    captionText.innerHTML=dots[slideIndex - 1].alt;
}
