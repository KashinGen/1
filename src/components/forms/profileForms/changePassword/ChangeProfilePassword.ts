import { Input } from '../../..';
import Block from '../../../../core/Block';
import { ChangeProfilePasswordFormProps } from '../../../../types';
import { validateForm, validatePassword } from '../../../../utils/validation';
import template from './changeProfilePassword.hbs?raw';

interface FieldsValues {
    oldPassword?: boolean | string;
    newPassword?: boolean | string;
    repeateNewPassword?: boolean | string;
}

export class ChangeProfilePasswordForm extends Block {
    constructor(props: ChangeProfilePasswordFormProps) {
        super({
            ...props,
            validate: {
                oldPassword: (value?: string) => {
                    return validatePassword(value as string);
                },
                newPassword: (value?: string) => {
                    return validatePassword(value as string);
                },
                repeateNewPassword: (value?: string) => {
                    return validatePassword(value as string);
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
            oldPassword: (this.refs.oldPassword as Input)?.value(),
            newPassword: (this.refs.newPassword as Input)?.value(),
            repeateNewPassword: (this.refs.repeateNewPassword as Input)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
