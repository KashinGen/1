import Block from '../../../core/Block';
import { InputProps } from '../../../types';
import template from './baseInput.hbs?raw';

export class BaseInput extends Block {
    constructor(props: InputProps) {
        super({
            ...props,
            events: {
                blur: props.onBlur || (() => {})
            }
        })
    }

    protected render(): string {
        return template;
    }
}
