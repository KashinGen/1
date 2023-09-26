import Block from '../../core/Block';
import { Props } from '../../types';
import template from './form.hbs?raw';

export class FormContainer extends Block {
    constructor(props: Props) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}