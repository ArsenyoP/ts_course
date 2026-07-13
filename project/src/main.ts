type PaginationMeta = {
    totalCOunt: number,
    page: number,
    pageSize: number
}

type ApiResponse<T> = PaginationMeta & {items: T[]}


interface Book{
    author: string,
    title: string
}

const book1: Book = {
    author: "J.K Rouling",
    title: "Harry Potter"
}
const book2: Book = {
    author: "Author",
    title: "Title"
}

const response: ApiResponse<Book> = {   
    totalCOunt: 100,
    page: 2,
    pageSize: 20,
    items: [book1, book2]
}

console.log(`Total: ${response.totalCOunt}, first title: ${response.items[0].title}`)