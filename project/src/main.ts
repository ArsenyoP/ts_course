const namesList: string[] = ["Олег", "Іван", "Анастасія", "Ігор"];

const filterNames = (names: string[], func: (name: string) => boolean): string[] =>
{
  return names.filter(func);
}

const result = filterNames(namesList, name => name.startsWith("І"));

console.log(result);