const isEven = (numb: number) => numb % 2 == 0;

const result = isEven(3);

console.log(result);


const getDiscount = (price: number, discount: number) =>price - (price * discount/100)

const discountResult = getDiscount(1000, 30)
console.log(discountResult)


const greet = () => console.log("Hello world")
greet()
// const greetResult = greet
// console.log(greetResult);