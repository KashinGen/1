import Block from '../../core/Block';
import { ButtonProps } from '../../types';
import template from './button.hbs?raw';
import './buttonStyles.scss';

export class Button extends Block {
    constructor(props: ButtonProps) {
        super({
            ...props,
            events: {
                click: props.onClick,
            },
        });
    }

    protected render(): string {
        return template;
    }
}
