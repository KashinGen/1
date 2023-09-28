import Block from '../../../core/Block';
import { Props } from '../../../types';
import template from './ChatInput.hbs?raw';
import './ChatInput.scss';
import { validateMessage } from '../../../utils/validation';


export class ChatInput extends Block {
    constructor(props: Props) {
        super({
            ...props,            
            sendMessage: (event: MouseEvent) => {
                event.preventDefault();
                const message =  this.getValue();
                const error = validateMessage(message);
                if(this.refs.input instanceof Block) {
                    this.refs.input.setProps({
                        placeholder: error ? error : 'Сообщение'
                    })
                }
                if (!error) {
                    console.log({
                        message
                    });
                } 
            }
        });
    }

    private getValue() {
        if(this.refs.input instanceof Block) {
            return (this.refs.input.element as HTMLInputElement)?.value ?? '';
        } else {
            return (this.refs.input as HTMLInputElement)?.value ?? '';
        }
    }

    protected render(): string {
        return template;
    }
}
