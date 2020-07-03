import { Injectable, EventEmitter, Output } from '@angular/core';
import { CarComponent } from './car.component';

@Injectable()
export class car {

    selectedItems = [];
     
    setCar(item: any) {
        const productExistInCart = this.selectedItems.find(({ id }) => id === item.id);
        if (!productExistInCart) {
            this.selectedItems.push({ ...item, num: 1 });
            this.set();
            return;
        }
        productExistInCart.num += 1;
        this.set();
    }

    GetTotal() {
        return this.selectedItems.reduce((acc, prod) => acc += prod.price * prod.num, 0)
    }

    remove(index: number) {
        this.get();
        this.selectedItems = this.selectedItems.filter((p, i) => {
            return p.id !== index
        })
        this.set();
    }
    quantiy(item, num) {  
        this.get();
        if (num == 0) {
            this.remove(item.id)
        } else {
            const productExistInCart = this.selectedItems.find(({ id }) => id === item.id);
            productExistInCart.num = num;
            this.set();
        }
    }

    private set(){
        localStorage.setItem('car', JSON.stringify(this.selectedItems))
    }

    private get(){
        this.selectedItems = JSON.parse(localStorage.getItem('car'));
    }

    returnCar(){
        return JSON.parse(localStorage.getItem('car'))
    }

}