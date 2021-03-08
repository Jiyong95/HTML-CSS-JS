### 18-1.background-color
>요소의 배경색 추가

### 18-2.background-image
>image를 배경으로 사용  
>ex) background-image:url("경로");  

### 18-2.background-size
>배경 size 제어  
>#### 값
>- auto(기본 값) : img실제 크기
>- px,em,rem
>- cover : 요소의 더 큰 너비에 맞춤(width vs height)
>- contaion : 요소의 더 작은 너비에 맞춤(width vs height)

### 18-3.background-repeat
> image를 배경 반복 제어  
>#### 값
>- repeat(기본 값) : 바둑판식 반복  
>- repeat-x : 이미지 수평 반복  
>- repeat-y : 이미지 수직반복  
>- no-repeat : img 1개만 표시  

### 18-4.background-position
>bg 위치를 제어  
>#### 값
>- top,bottom,left,right,center  
>   - ex)background-position : top right;  
>- x축 y축  
>   - ex) background-position : 100px 30px;  

### 18-5.background-attachment
> bg 스크롤 특성  
>#### 값
>- scroll(기본 값) : img가 요소를 따라 같이 스크롤  
>- fixed : img가 뷰포트에 고정, 스크롤 x  
