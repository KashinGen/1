import Block from '../../../core/Block';
import { ButtonProps } from '../../../types';
import template from './SendButton.hbs?raw';
import './SendButton.scss';

export class SendButton extends Block {
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
