## 1. 빈칸 채우기 문제

아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

```javascript
1. let uninitialized;
console.log(uninitialized); // 결과값 < undefined >

// 초기값 설정이 되어 있지 않다

2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable

// const로 선언되어서 상수가아니라는 타입에러가 떴고, const는 재할당이 불가능하다 

3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >

// 배열의 index는 0번부터 시작해서 3번째는 19이다.

4.
let mySchedule = "";
console.log(mySchedule || false); // < false > 
console.log(!!mySchedule); // < false >

1. 빈문자열은 false를 반환한다 false || false 이기 때문에 false 반환
2. !myschedule = true !!myschedule은 false를 다시 반환  

```

&nbsp;