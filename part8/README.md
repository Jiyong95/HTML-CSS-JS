## CSS 단위
|단위|설명|
|---|---|
|px|픽셀|
|%|상대적 백분율|
|em|포함된 요소의 글꼴 크기|
|rem|루트 요소(html)의 글꼴 크기
|vw|뷰포트 가로 너비의 백분율(0~100vw)|
|vh|뷰포트 세로 너비의 백분율(0~100vh)|

## CSS 속성
### 1.width, height
>기본 값 : auto  (width : auto;)  
>단위 : px, em, vw 등  

### 2.max-width, max-height
>기본 값 : none(=제한 없음)  
>단위 : px, em, vw 등  

### 3.min-width, min-heigh
>기본 값 : 0  

### 4.margin(외부여백)
>기본 값 : 0  
>#### 단위  
>- px, em, vw ...  
>- auto (가운데 정렬)  
>#### 특징  
>- margin에 의해 요소의 크기가 커지지 않음  
>- margin 값으로 음수를 줄 경우 크기가 작아짐  
>#### 사용
>- 1)![](../md_image/margin.png)  
>- 2)margin-(top,right,left,bottom)

### 5.padding(내부여백)
>기본 값 : 0  
>#### 단위
>- px, em, vw ...
>- %(부모 요소의 width에 대한 비율로 지정)
>#### 특징
> - padding값에 의해 요소의 크기가 커짐  
>#### 사용  
> - margin과 같음

### 6.border
>#### 기본 값
>- border: medium none black;
>#### 특징
>- border에 의해 요소의 크기가 커짐
>#### 사용  
>![](../md_image/border.png)

### 6-1.border-width
>#### 사용  
>![](../md_image/border-width.png)
### 6-2.border-style
>#### 사용
>- border-width와 같음
### 6-3.border-color
>#### 사용
>- border-width와 같음
>#### 색상 표현(Color)
>![](../md_image/color.png)

### 6-4. border-방향
>#### 사용
>![](../md_image/border-top.png)

### 6-5. border-radius
>#### 개념
>![](../md_image/border-radius.png)
>#### 사용
>- margin, padding ...과 같음
