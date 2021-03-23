const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//input이 아닌 돋보기를 누르면 focus가 되지 않음. -> 돋보기를 눌러도 input focus가 되도독 작성
searchEl.addEventListener('click', () => {
	searchInputEl.focus();
});

//focus되면 focused 클래스 추가
searchInputEl.addEventListener('focus', () => {
	searchEl.classList.add('focused');
	searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
	searchEl.classList.remove('focused');
	searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

/* _.throttle() : lodash에서 가져온 js라이브러리에 있는 것
_.throttle(함수, 시간) : 함수가 호출 사이에 딜레이를 둠. -> 함수가 엄청 실행되지 않도록 막음.
*/
window.addEventListener('scroll', _.throttle(() => {
	console.log(window.scrollY);
	if (window.scrollY > 500){
		/*badge 숨기기
		방법 .1) badgeEl.style.display = 'none';
		방법 .2) gsap.to(요소, 지속시간, 옵션); 
						요소에 지속시간에 걸쳐 옵션을 넣어줌.

		opacity는 화면에서 안 보이게하지 사라진 것은 아님.
		display만 안 쓰는 이유는 gsap은 숫자 값을 지속시간에 걸쳐 적용시켜주기 때문에, 
		'none'이런 값은 애니매이션 효과를 못넣는다.*/
		gsap.to(badgeEl, .6, {
			opacity : 0,
			display: 'none'
		});
	}
	else{
		//badge 보이기
		//badgeEl.style.display = 'block';
		gsap.to(badgeEl, .6, {
			opacity : 1,
			display: 'block'
		});
	}
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEls, index) => {
	gsap.to(fadeEls, 1, {
		//0.7s -> 첫 번째요소 출력, 1.4s -> 두 번째, 2.1s -> 세 번째
		delay : (index + 1) * .7,
		opacity : 1
	});
});

//SWIPER
//new Swiper(선태자, 옵션)
new Swiper('.notice-line .swiper-container', {
	direction : 'vertical',
	autoplay : true, //자동재생
	loop: true, //반복재생여부
});

new Swiper('.promotion .swiper-container', {
	slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
	spaceBetween: 10, //슬라이드 사이 여백
	centeredSlides: true, //1번 슬라이드가 가운데 보이기
	loop: true,
	//autoplay: {
	//	delay: 5000, //5000ms = 5s
	//},
	pagination: {
		el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
		clickable: true //페이지 번호 요소 제어 여부
	},
	navigation:{
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next'
	}
});
