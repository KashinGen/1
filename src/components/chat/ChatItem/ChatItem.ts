import Block from '../../../core/Block';
import { ChatItemProps } from '../../../types';
import template from './ChatItem.hbs?raw';
import './ChatItem.scss';


export class ChatItem extends Block {
    constructor(props: ChatItemProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
