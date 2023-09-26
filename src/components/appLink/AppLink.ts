import Block from '../../core/Block';
import { AppLinkProps } from '../../types';
import template from './AppLink.hbs?raw';
import './AppLink.scss';

export class AppLink extends Block {
    constructor(props: AppLinkProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
