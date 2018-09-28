export class Product{
    Id:string;
    title: string;
    price: number;
    thumbnail: string;

    constructor(id: string, title: string,price:number, thumbnail: string){
        this.Id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }
}