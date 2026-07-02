function filterFn(name: string) : boolean
{
    return name.startsWith("І");
}

function filterNames(names: string[], func: (name: string) => boolean) : string[]
{
    let userResults: string[] = [];

    for(const user of names)
    {
      if(func(user))
      {
        userResults.push(user);
      }
    }
    return userResults;
}

let namesList: string[] = ["Олег", "Іван", "Анастасія", "Ігор"];
let result = filterNames(namesList, filterFn);

console.log(result);