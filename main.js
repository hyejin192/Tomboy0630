// nav mousehover mouseover
let navList = document.querySelectorAll('.h_center>ul>li');

// 각 요소에 대해 반복문을 사용
navList.forEach(function(item) {
  // 마우스를 올렸을 때 이벤트 리스너 추가
  item.addEventListener("mouseover", function() {
    // 클래스명 "active" 추가
    this.classList.add("active");
  });

  // 마우스를 벗어났을 때 이벤트 리스너 추가
  item.addEventListener("mouseout", function() {
    // 클래스명 "active" 제거
    this.classList.remove("active");
  });
});


// navWrap open and close

function menuclick(){
  let navWrap = document.querySelector('.navWrap');
  let menuIcon = document.querySelector('.menu');

  menuIcon.classList.toggle('open');
  // 조건문 ? 을 사용해 클래스명 open의 유무를 확인하고 그에 따라 opacity 값이 1 또는 0으로 바뀐다
  navWrap.style.display  = menuIcon.classList.contains('open') ? 'block' : 'none';
  // pointEvents를 사용해 메뉴 창이 투명한 상태일 때는 사용자의 클릭 이벤트를 무시하도록 한다
  // auto 또는 none의 값을 설정 : 메뉴창이 열려있을 때만 클릭 이벤트를 처리하거나 무시할 수 있다
  // navWrap.style.pointerEvents = menuIcon.classList.contains('open') ? 'auto' : 'none';

}





