const logActivity = (action: string, ...products: string[]): void => 
    {
        if(products.length === 0)
        {
            console.log(`Action without changes: ${action}`)
        }

        const changedProducts = products.join(", ");
        console.log(`Action: ${action}, affected products: ${products}`)
}

logActivity("View", "Iphone","AirPods","Case")




function getUser(userName: string): string;
function getUser(userId: number): string;

function getUser(IdOrUsername: string | number): string
{
    if(typeof IdOrUsername === "string")
    {
        return `Username search: ${IdOrUsername}`
    }
    else if(typeof IdOrUsername === "number")
    {
        return `Id search: ${IdOrUsername}`
    }
}


console.log(getUser("Arsen"))
console.log(getUser(173))



function combine(...numbers: number[]): number;
function combine(...strings: string[]): string;

function combine(...numbsOrStrings: number[] | string[]): number | string
{
    if(typeof numbsOrStrings[0] === "string")
    {
        return (numbsOrStrings as string[]).join(" ")
    }

    let sum: number = 0;
    for(let i: number = 0; i < numbsOrStrings.length; i++)
    {
        sum += (numbsOrStrings as number[])[i]
    }
    return sum;
}

const resultCombine1 = combine(1,3,64,5,245)
console.log(resultCombine1)

const resultCombine2 = combine("Some", "text", "to", "combine")
console.log(resultCombine2)