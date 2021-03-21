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
