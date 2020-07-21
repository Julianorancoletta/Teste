export class ProductModel {
        id: number 
        title: string 
        brand: string 
        price: string 
        sale: boolean 
        salePrice: string 
        categoryId: number 
        shortDescription: string 
        category: string 
        img: string 
}
export interface Imagem {
        arquivo: string,
        imgNome: string
}