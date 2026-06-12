//2
const products = [
  { id: 1, name: "Laptop", price: 1200, isAvailable: true },
  { id: 2, name: "Mouse", price: 25, isAvailable: false },
  { id: 3, name: "Keyboard", price: 80, isAvailable: true },
  { id: 4, name: "Monitor", price: 300, isAvailable: true }
];

const result = products.filter(x => x.price > 50 && x.isAvailable === true)
  .map(x => x.name)

console.log(result)

//3
const apiErrors: Record<number, string> = {
    400: "Некоректний запит",
    401: "Неавторизовано",
    404: "Ресурс не знайдено",
    500: "Помилка сервера"
}

function showErrorMessage(code:number): string{
  return apiErrors[code] ?? "Невідомо"
}

let first = showErrorMessage(404)
let second = showErrorMessage(323)

console.log(`"Eroor 1: ${first}"`)
console.log(`"Eroor 2: ${second}"`)