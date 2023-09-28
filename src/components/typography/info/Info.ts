import Block from '../../../core/Block';
import template from './info.hbs?raw';
import './infoStyles.scss';
import { Props } from '../../../types/index';

export interface InfoProps extends Props {
    text: string;
}

export class Info extends Block {
    constructor(props: InfoProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
