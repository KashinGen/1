import Block from '../../../../core/Block';
import template from './autorization.hbs?raw';
import '../authForms.scss';
import { AuthFormProps } from '../../../../types';
import { validateForm, validateLogin, validatePassword } from '../../../../utils/validation';
import { Input } from '../../..';


interface FieldsValues {
    login?: boolean | string;
    password?: boolean | string;
}

export class AuthForm extends Block {
    constructor(props: AuthFormProps) {
        super({
            ...props,
            validate: {
                login: (value?: string) =>{
                    return validateLogin(value as string);
                },
                password: (value?: string) =>{
                    return validatePassword(value as string);
                }
            },
            onLogin: (event: MouseEvent) => {
                event.preventDefault();
                if(!this.validate()) {
                    return;
                }
                console.log({
                    ...this.getFieldsValues()
                });
            },
            onRegister: (event: MouseEvent) => {
                event.preventDefault();
            }
        });
    }

    private validate(): boolean {
        return validateForm(this.getFieldsValues());
    }

    private getFieldsValues(): FieldsValues {
        return {
            login: (this.refs.login as Input)?.value(),
            password: (this.refs.password as Input)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
