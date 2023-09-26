import Block from '../../../core/Block';
import template from './profilePage.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

export class ProfilePage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
