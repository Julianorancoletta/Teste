import { AbstractControl } from "@angular/forms";


export class Validacoes {

    static DataMaior(controle: AbstractControl) {
        const nascimento = controle.value,
            now = new Date().toISOString().slice(0, 10);
        if (now > nascimento) {
            return null
        } else {
            return { dataMaior: true }
        }

    }
}