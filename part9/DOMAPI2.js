let boxEls = document.querySelectorAll('.box');
//class = box인 모든 DOM가져옴
//boxEls = 유사배열임 []안에 찾은 Dom들어있다.
console.log(boxEls);

//첫 번째 매개변수(e) : 반복 중인 요소
//두 번째 매개변수(index) : 반복 중인 번호
//boxEls.forEach(function (e, index) {});

boxEls.forEach((boxEl, index) => {
	boxEl.classList.add(`order-${index + 1}`);
	console.log(boxEl,index);
});
