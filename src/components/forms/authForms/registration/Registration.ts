import Block from '../../../../core/Block';
import template from './registration.hbs?raw';
import '../authForms.scss';
import { RegistrationFormProps } from '../../../../types';
import { Input } from '../../..';
import { 
    validateEmail, 
    validateForm, 
    validateLogin, 
    validateName, 
    validatePassword, 
    validatePhone 
} from '../../../../utils/validation';

interface FieldsValues {
    email?: boolean | string;
    login?: boolean | string;
    secondName?: boolean | string;
    firstName?: boolean | string;
    midleName?: boolean | string;
    phone?: boolean | string;
    password?: boolean | string;
    repeatePassword?: boolean | string;
}

export class RegistrationForm extends Block {
    constructor(props: RegistrationFormProps) {
        super({
            ...props,
            validate: {
                email: (value?: string) => {
                    return validateEmail(value);
                },
                login: (value?: string) =>{
                    return validateLogin(value as string);
                },
                secondName: (value: string) =>{
                    return validateName(value);
                },
                firstName: (value?: string) =>{
                    return validateName(value);
                },
                middleName: (value?: string) =>{
                    return validateName(value);
                },
                phone: (value?: string) =>{
                    return validatePhone(value);

                },
                password: (value?: string) =>{
                    return validatePassword(value as string);
                },
                repeatePassword: (value?: string) =>{
                    return validatePassword(value as string);
                }
            },
            onRegister: (event: MouseEvent) => {
                event.preventDefault();
                if(!this.validate()) {
                    return;
                }
                console.log({
                    ...this.getFieldsValues()
                });
            }
        });
    }

    private validate(): boolean {
        return validateForm(this.getFieldsValues());
    }

    private getFieldsValues(): FieldsValues {
        return {
            email: (this.refs.email as Input)?.value(),
            login: (this.refs.login as Input)?.value(),
            secondName: (this.refs.secondName as Input)?.value(),
            firstName: (this.refs.firstName as Input)?.value(),
            midleName: (this.refs.midleName as Input)?.value(),
            phone: (this.refs.phone as Input)?.value(),
            password: (this.refs.password as Input)?.value(),
            repeatePassword: (this.refs.repeatePassword as Input)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
