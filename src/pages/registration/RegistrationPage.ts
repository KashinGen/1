import Block from '../../core/Block';
import template from './registrationPage.hbs?raw';
import '../pagesStyles.scss';

export class RegistrationPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
