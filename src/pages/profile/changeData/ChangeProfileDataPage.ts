import Block from '../../../core/Block';
import template from './changeProfileDataPage.hbs?raw';
import '../pagesStyles.scss';
import '../profilePageStyles.scss';

export class ChangeProfileDataPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
