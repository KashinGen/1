import Block from '../../../core/Block';
import { Dialog as DialogProps } from '../../../types';
import template from './Dialog.hbs?raw';
import './Dialog.scss';


export class Dialog extends Block {
    constructor(props: DialogProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
