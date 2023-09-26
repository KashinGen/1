import Block from '../../core/Block';
import { SearchFieldProps } from '../../types';
import template from './searchField.hbs?raw';
import './searchFieldStyles.scss';

export class SearchField extends Block {
    constructor(props: SearchFieldProps) {
        super({
            ...props
        });
    }

    protected render(): string {
        return template;
    }
}
