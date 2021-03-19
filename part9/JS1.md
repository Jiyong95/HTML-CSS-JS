### 표기법
> HTML, CSS
>- 1)dash-case  
>   the-quick-brown-fox  
>- 2)snake_case
>   the_quick_brown_fox  
>
>JS
>- 1)camelCase(주로사용)
>   theQuickBrownFox
>- 2)PascalCase
>   TheQuickBrownFox 

### 데이터 종류(자료형)
>### String
>```js
>let myName1 = "jiylee";
>let myName2 = 'jiylee';
>let hello = `Hello ${myName1}!`; 
>```
>### Number(정수, 소수)
>```js
>let number = 123;
>let double = 1.23; 
>```
>### Boolean
>```js
>let tr = true;
>let fa = false; 
>```
>### Object
>```js
>//Key:Value 형태로 사용
>let user = {
>	name: "jiylee",
>	age: 27,
>	isValid: true
>};
>console.log(user.name); 
>```
>### Array
>```js
>let fruits = ['Apple','Banana']; 
>```

### 변수
>- var(거의 사용 x)  
>- let : 값 변경 가능  
>- const : 상수  

### 예약어
>특별한 의미를 가지고 있어, 변수나 함수 이름으로 사용 불가  
>ex) this, if, break ....

### 함수
>```js
>function sum(a,b){
>	return a+b;	
>}
>
>//익명함수
>let sum = function(a,b){
>	return a+b;
>}
>
>let sum = (a,b) => {return a+b};
>
>const man = {
>	name: 'jiylee',
>	age: 27,
>	//객체 내부의 속성에 함수가 들어있으면 메소드(Method)라고 함.
>	getName: () =>{ //<- Method
>		return this.name;
>	}
>}
>
>console.log(man.name);
>console.log(man.getName());
>```
