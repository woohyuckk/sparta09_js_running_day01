## 6. 장바구니 뒤바뀜 문제

    & nbsp;

아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

```javascript
function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);
```

1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요 ?
    { name: "키보드", price: 25000 },
    { name: "마우스", price: 15000 },
    둘다 위의 결과로 나타난다



2.	1번의 결과에 대한 이유를 설명해보세요.

userBCart 에 userACart의 데이터주소를 복사했다.A
applyCoupon을 실행하면서 B카트에 가격들이 5천원씩 할인 받았다.A
데이터 주소를 복사한 결과로 B카트에 가격을 변경했는데 A카트도 같은 주소를 사용해서 같이 변경되었다.

3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요 ?

    userBCart = {
        items: [
            { name: "키보드", price: 30000 },
            { name: "마우스", price: 20000 }],
    };
