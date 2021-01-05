export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  maxlength:number;
  minlength:number;
  email:boolean;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      maxlength?:number,
      minlength?:number
      email?:boolean
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.maxlength = options.maxlength ? options.maxlength : 0,
    this.minlength = options.minlength ? options.minlength : 0
    this.email = !!options.email;
  }
}
