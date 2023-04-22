import {RequiredField} from "./required-field.js";
import {FloatField} from "./float-field.js";
import {FloatMaxField} from "./float-max-field.js";
import {FloatMinField} from "./float-min-field.js";

export class Validator {
    validators = [];
    messages = [];
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
addRequiredField(){
    this.validators.push(new RequiredField(this.name, this.field));
    }
addRequiredFloatField(){
    this.validators.push(new FloatField(this.name, this.field));
}
addFloatMinField(min){
    this.validators.push(new FloatMinField(this.name, this.field, this.min));
}
addFloatMaxField(max){
    this.validators.push(new FloatMaxField(this.name, this.field, this.max));
}
validate(){
    for (let x of this.validators){
        if (x.validate() === false) {
            this.messages.push(x.getMessage());
            return false;
            }
        }
    return true;
    }
}