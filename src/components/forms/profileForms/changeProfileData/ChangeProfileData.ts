import { Input } from '../../..';
import Block from '../../../../core/Block';
import { ProfileData } from '../../../../types';
import { validateEmail, validateForm, validateLogin, validateName, validatePhone } from '../../../../utils/validation';
import template from './changeProfileData.hbs?raw';

interface FieldsValues {
    email?: boolean | string;
    login?: boolean | string;
    secondName?: boolean | string;
    firstName?: boolean | string;
    middleName?: boolean | string;
    displayName?: boolean | string;
    phone?: boolean | string;
}

export class ChangeProfileDataForm extends Block {
    constructor(props: {profile: ProfileData}) {
        const { profile } = props;
        super({
            ...profile,
            validate: {
                email: (value?: string) => {
                    return validateEmail(value);
                },
                login: (value?: string) => {
                    return validateLogin(value as string);
                },
                secondName: (value?: string) => {
                    return validateName(value);
                },
                firstName: (value?: string) => {
                    return validateName(value);
                },
                middleName: (value?: string) =>{
                    return validateName(value);
                },
                displayName: (value?: string) =>{
                    return validateName(value);
                },
                phone: (value?: string) =>{
                    return validatePhone(value);
                }
            },
            onSave: (event: MouseEvent) => {
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
            middleName: (this.refs.middleName as Input)?.value(),
            displayName: (this.refs.displayName as Input)?.value(),
            phone: (this.refs.phone as Input)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
