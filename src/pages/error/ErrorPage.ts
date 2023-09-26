import Block from '../../core/Block';
import template from './errorPage.hbs?raw';
import '../pagesStyles.scss';
import './errorPageStyles.scss';

export class ErrorPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
