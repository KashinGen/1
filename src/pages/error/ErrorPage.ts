import Block from '../../core/Block';
import template from './errorPage.hbs?raw';
import '../pagesStyles.scss';
import './errorPageStyles.scss';
import { Props } from '../../types';

export class ErrorPage extends Block {
    constructor(props: Props) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
