import { Injectable, EventEmitter, Output, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Injectable()
export class car {

    setCar(item: any) {
        const product = this.get(),
        productExistInCart = product.find(({ id }) => id == item.id);

        if (!productExistInCart) {
            let product: any[] = this.get();
            product.push({ ...item, num: 1 });
            this.set(product);
            return;
        }
        productExistInCart.num += 1;
        this.set(product);
    }

    GetTotal() {
        return this.get().reduce((acc, prod) => acc += prod.price * prod.num, 0)
    }

    remove(index: number) {
        let product = this.get().filter((p, i) => {
            return p.id !== index
        })
        this.set(product);
    }
    
    quantiy(item, num:number) {
        const product = this.get()
        if (num <= 0) {
            this.remove(item.id)
        } else {
            const productExistInCart = product.find(({ id }) => id == item.id);
            productExistInCart.num = Number(num);
            this.set(product);
        }
    }

    private set(product: any) {
        localStorage.setItem('car', JSON.stringify(product))
    }

    private get() {
        return JSON.parse(localStorage.getItem('car'))
            ? JSON.parse(localStorage.getItem('car')) : []
    }

    returnCar() {
        return JSON.parse(localStorage.getItem('car'))
    }

    TotalCart() {
        return this.get().length;
    }

}