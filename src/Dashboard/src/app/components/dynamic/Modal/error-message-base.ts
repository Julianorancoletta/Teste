export class errorMessage<T> {
    value: T;
    key: string;
    required: string;
    maxlength: string;
    minlength: string;

    constructor(options: {
        value?: T,
        key?: string;
        required?: string,
        maxlength?: string,
        minlength?: string
    } = {}) {
        this.key = options.key || '';
        this.required = options.required || '';
        this.maxlength = options.maxlength || '';
        this.minlength = options.minlength || ''
    }
}
