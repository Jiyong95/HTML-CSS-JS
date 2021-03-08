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

### 19.position
> 요소의 위치 지정 기준
>#### 값
>- static(기본 값) : 기준 없음  
>- relative : 요소 자신을 기준  
>- absolute : 부모 요소를 기준으로 위치, 기준을 바꿀 수 있음  
>- fixed : 뷰포트를 기준  
>- sticky : 스크롤 영역 기준  


### *relative
![](../md_image/relative.png)
>- relative의 속성 값을 통해 자식2가 다른 곳으로 이동하더라도 자식3이 자식2의 자리를 채우지 않음.  
>- 자식2의 원래 자리는 다른 자식들에 영향을 주고있다.  

### *absolute
>case1) 부모를 기준으로 배치(부모요소에 relative 안해도 자동으로 부모를 기준)
>  ![](../md_image/absolute.png)
>- absolute의 속성 값을 통해 자식3이 자식2의 자리를 채움.  
>- 자식2가 다른 자식들에게 영향을 주지 않게 됨.  
> 
>case2) relative가 2개 이상일 때
>  ![](../md_image/absolute1.png)
>- 자동으로 부모를 기준
>
>case3) 다른 요소를 기준으로
>![](../md_image/absolute2.png)
>- 해당 요소에 relative, 부모요소에 static

### 20.top,bottom,left,right
> 요소의 각 방향별 거리 지정
>#### 값
>- auto(기본 값) : 브라우저가 계산
>- px,em,rem...
