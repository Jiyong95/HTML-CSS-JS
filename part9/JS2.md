### DOM(Document Object Model)

> HTML, XML 문서의 프로그래밍 interface 이다.
> Document(HTML) Object Model(div, span ...)

### API(Application Programming Interface)

> 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다.

### Interface

> 사용자가 기기를 쉽게 동작시키는데 도움을 주는 시스템을 의미한다.

### DOM API(Document Object Model, Application Programming Interface)

> js에서 HTML을 제어하는 명령들이라고 생각하자.

### Library

> 개발할 때 사용하는 도구 모음 같은 느낌. 여러 기능들(함수)이 들어있고 사용자가 목적에 맞게 사용

### Library vs API

> - Library는 들어있는 도구를 써서 사용자 목적에 맞게 사용(local)
> - API는 필요한 것들을 API 활용 규약에 따라 외부 서버에 요청하여 사용

### Method Chaining(메소드 체이닝)

> 메소드를 연결하여 사용하는 것
>
> ```js
> const a = "Hello";
> const b = a.split("").reverse().join("");
> //split() : 매개 변수 기준으로 쪼개서 배열로 반환
> //reverse() : 배열 뒤집기
> //join() : 배열을 매개 변수 기준으로 문자로 병합 반환
> ```
