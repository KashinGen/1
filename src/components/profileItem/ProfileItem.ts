import Block from '../../core/Block';
import { ProfileItemProps } from '../../types';
import { ErrorMessage } from '../errorMessage';
import template from './ProfileItem.hbs?raw';
import './ProfileItem.scss';


export class ProfileItem extends Block {
    constructor(props: ProfileItemProps) {
        super({
            ...props,
            onBlur: () => this.validate()
        });
    }

    public value() {
        if (!this.validate()) {
            return false;
        }
        return this.getValue();
    }

    private getValue() {
        if(this.refs.input instanceof Block) {
            return (this.refs.input.element as HTMLInputElement)?.value ?? '';
        } else {
            return (this.refs.input as HTMLInputElement)?.value ?? '';
        }
    }

    private validate() {
        const value = this.getValue();
        const props = this.props as ProfileItemProps;
        const error = props.validate ? props.validate(value) : '';
        const validationMessage = (this.refs.validationMessage as ErrorMessage);
        if (error) {
            validationMessage?.setProps({
                validationMessage: error
            });
            return false;
        }
        validationMessage?.setProps({
            validationMessage: ''
        });
        return true;
    }

    protected render(): string {
        return template;
    }
}
