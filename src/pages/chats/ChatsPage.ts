import Block from '../../core/Block';
import template from './chatsPage.hbs?raw';
import '../chatsPageStyles.scss';


export class ChatsPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
