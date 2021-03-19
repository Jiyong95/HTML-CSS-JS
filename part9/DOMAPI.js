let boxEl = document.querySelector('.box');
//제일 먼저 찾은 clss = box 가져옴
//class = box DOM가져옴 

console.log(boxEl);

//Event 추가
boxEl.addEventListener('click', () => {
	console.log('Click!');
	boxEl.classList.add('active');
	//클래스 추가  class = box active
	boxEl.classList.remove('active');
});
