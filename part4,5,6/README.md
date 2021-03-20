#### CSS Reset 
> 브라우저마다 기본 CSS값들이 입력되있어서 Reset을 해주어야함  
#### 사용법
><a href="https://www.jsdelivr.com/package/npm/reset-css">reset css 페이지</a>  
>1)접속 후 reset.min.css html copy  
>2)head태그 안에 붙여넣기

#### 글자와 상자
>인라인요소 : 글자를 만들기 위한 요소    
>- 요소가 수평으로 쌓인다.  
>- 요소의 width, height... 속성 값을 통해 변경이 안 된다.
>
>블록요소 : 상자(레이아웃)를 만들기 위한 요소
>- 요소가 수직으로 쌓인다.
>- width, height, margin ..속성 값들을 통해 변경가능
### span태그(inline 요소)
>특별한 의미가 없는 구분을 위한 요소
### div태그(block 요소)
>특별한 의미가 없는 구분을 위한 요소
### h1태그(block 요소)
>제목을 나타내는 요소
### p태그(block 요소)
> 한 문장을 의미하는 요소
### br태그(inline 요소)
> 줄 바꿈 태그
>```
><br/>
>```

### input태그(inline-block요소)
>수평으로 쌓이며, wdith, height..등의 속성 값을 사용 가능

### label태그(inline)
>input과 함께 쓰이며 input에 대한 설명으로 쓰임
>```
><label>
><input type="checkbox"/>Apple
></label>
>```
### 그 외 태그
> 인라인 요소
>- img태그, a태그  
>
> 블록 요소
>- ul, li 태그

### 전역 속성
> 모든 태그에 사용가능한 속성  
>1)title : 요소의 정보나 설명을 지정  
>2)style : 요소에 적용할 스타일 지정  
>3)class : 요소를 지칭하는 중복 가능한 이름  
>4)id : 요소를 지칭하느 고유한 이름(중복하지 않는 것을 권장함)   
>5)data-이름 = "데이터"  
>```
><div>data-fruitName="apple">사과</div>
>```

#### 출처
- 패스트캠퍼스(HEROPY님 강의)
