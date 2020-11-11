import { AbstractControl } from "@angular/forms";

let sale: boolean = false
export class Validacao {



    static SalePrice(controel: AbstractControl) {
        const price = controel.value
        if (sale) {
            if (!price && !sale) return { salePrice: true };
        } else {
            return null
        }
    }

    static Sale(controel: AbstractControl) {
        sale = controel.value
        return null
    }


}