
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml } from './SafeHtml.pipe';



@NgModule({
    declarations: [
        SafeHtml
    ],
    exports: [
        SafeHtml
    ],
    imports: [
        CommonModule
    ],
    providers:[
    ]
})
export class PipeModule { }