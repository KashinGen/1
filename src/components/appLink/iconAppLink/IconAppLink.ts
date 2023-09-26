import Block from '../../../core/Block';
import { AppLinkProps } from '../../../types';
import template from './IconAppLink.hbs?raw';
import './BackBuIconAppLinktton.scss';

export class IconAppLink extends Block {
    constructor(props: AppLinkProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
