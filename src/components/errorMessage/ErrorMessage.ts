import Block from '../../core/Block';
import template from './errorMessage.hbs?raw';
import './errorMessage.scss';
import { Props } from '../../types';

export interface ErrorMessageProps extends Props {
    message?: string;
}

export class ErrorMessage extends Block {
    constructor(props: ErrorMessageProps) {
        super(props);
    }

    protected render() {
        return template;
    }
}
