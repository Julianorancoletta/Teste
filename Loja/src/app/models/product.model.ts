export class ProductModel {
	id: number
	name: string
	brand: string
	price: number
	sale: boolean
	salePrice: number
	subCategoria
	subCategoriaId: number
	category: string
	categoryId: number
	shortDescription: string
	img: string
}
export class Photo {
	ProductId: number
	file: File
}
export class listProduct {
	product:ProductModel[]
	numPagina:number
}

