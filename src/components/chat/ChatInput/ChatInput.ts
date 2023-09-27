import Block from '../../../core/Block';
import { Props } from '../../../types';
import template from './ChatInput.hbs?raw';
import './ChatInput.scss';


export class ChatInput extends Block {
    constructor(props: Props) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
