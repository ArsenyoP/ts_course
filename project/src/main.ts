interface HasId{
    id: string | number
}

interface Product extends HasId{
    title: string,
    price: number
}

class LocalRepository<T extends HasId>{
    private storage: T[] = []
    
    GetById(id: string | number): T | undefined {
        return this.storage.find(x => x.id === id);
    }

    SetToStorage(item: T): void{
        this.storage.push(item);
    }
}

const product: Product = {
    id: "abc1",
    title: "Product title",
    price: 100
}

const storage = new LocalRepository<Product>

storage.SetToStorage(product)
console.log(storage.GetById("abc1"))