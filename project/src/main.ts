enum Statuses{
    "Success",
    "Error"
}
interface ApiResponse<T>{
    status: Statuses,
    data?: T,
    errorMessage?: string 
}

interface User{
    id: number,
    name: string
}


function handleResponse<T>(response: ApiResponse<T>): void {
    if (response.status === Statuses.Success) {
        if (response.data) {
            console.log("Success operation; Data:", response.data); 
        } else {
            console.log("Success operation; No data provided");
        }
    } else {
        const errorMessage = response.errorMessage ? response.errorMessage : "No error message";
        console.log(`Operation failed; Error message: ${errorMessage}`);
    }
}

const UserObj = {
    id: 100,
    name: "Arsen"
}

const response: ApiResponse<User> = {
    status: Statuses.Success,
    data: UserObj
}

handleResponse<User>(response)