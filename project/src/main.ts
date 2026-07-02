function calculateSalary(baseRate: number, workingHours: number, bonus?: number) : number
{
  if(bonus)
  {
    return (baseRate * workingHours) + bonus;
  }
  return baseRate * workingHours;
} 

const x = calculateSalary(20, 400);

console.log(x);


enum Currency{
  UAH = "UAH"
}

function report(name: string, salary: number, currency: Currency = Currency.UAH) : string
{
    return `Name: ${name} with salary ${salary}${currency}`
}

const y: string = report("Arsen", x)


console.log(y)



