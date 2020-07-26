export class ProductModel {
        id: number 
        title: string 
        brand: string 
        price: number 
        sale: boolean 
        salePrice: number 
        categoryId: number 
        shortDescription: string 
        category: string 
        img: string 
}
export interface Imagem {
        arquivo: string,
        imgNome: string
}