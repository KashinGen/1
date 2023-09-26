import Block from '../../../core/Block';
import template from './changeProfilePasswordPage.hbs?raw';
import '../pagesStyles.scss';
import '../profilePageStyles.scss';

export class ChangePasswordPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
