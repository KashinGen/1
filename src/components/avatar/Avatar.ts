import Block from '../../core/Block';
import template from './avatar.hbs?raw';
import './avatarStyles.scss';
import { Props } from '../../types';

export class Avatar extends Block {
    constructor(props: Props) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
