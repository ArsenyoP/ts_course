type userProfile = {
    id: number,
    email: string
}

type userSettings = {
    theme: "light" | "dark",
    enebledNotifications: boolean
}


type FullAccount = userProfile & userSettings


function activatePremium(acc: FullAccount): FullAccount{
    acc.theme = "dark"
    return acc;
}

const account: FullAccount = {
    id: 1,
    email: "email",
    theme: "light",
    enebledNotifications: true
}

console.log(activatePremium(account).theme)