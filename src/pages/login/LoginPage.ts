import Block from '../../core/Block';
import template from './loginPage.hbs?raw';
import '../pagesStyles.scss';

export class LoginPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
