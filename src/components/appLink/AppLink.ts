import Block from '../../core/Block';
import { AppLinkProps } from '../../types';
import template from './appLink.hbs?raw';
import './appLink.scss';

export class AppLink extends Block {
    constructor(props: AppLinkProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
