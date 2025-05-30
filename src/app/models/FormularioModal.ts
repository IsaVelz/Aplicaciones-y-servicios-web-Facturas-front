export interface FormField {
    name: string;
    label: string;
    type: string;
    value: any;
    fk: boolean;
    strTable: string;
    columna: string;
    validators?: string[];
}

export interface FormSchema {
    fields: FormField[];
}