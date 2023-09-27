import Block from '../../core/Block';
import { ChatsPageProps } from '../../types';
import template from './chatsPage.hbs?raw';
import './chatsPageStyles.scss';


export class ChatsPage extends Block {
    constructor(props: ChatsPageProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
