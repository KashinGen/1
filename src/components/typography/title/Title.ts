import Block from '../../../core/Block';
import { Props } from '../../../types';
import template from './title.hbs?raw';
import './titleStyles.scss';

export interface TitleProps extends Props {
    text: string;
    type: 'small' | 'medium' | 'large';
}

export class Title extends Block {
    constructor(props: TitleProps) {
        super(props);
    }
    protected render(): string {
        return template;
    }
}
