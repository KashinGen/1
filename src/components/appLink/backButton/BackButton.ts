import Block from '../../../core/Block';
import { AppLinkProps } from '../../../types';
import template from './BackButton.hbs?raw';
import './BackButton.scss';

export class BackButton extends Block {
    constructor(props: AppLinkProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
}
