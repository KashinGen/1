import Block from '../core/Block';

export interface Route {
    title: string;
    template: typeof Block;
    description: string,
    context?:  Props;
}

export type InputType = 'password' | 'text' | 'number';

export interface Props extends Record<string, unknown> {
    events?: object;
} 

export interface AppLinkProps extends Props {
    href: string,
    text: string;
    className?: string;
}

export interface ButtonProps extends Props {
    text: string;
    className?: string;
    onClick?: () => void
}

export interface AuthFormProps extends Props {
    validate: {
        login: (value?: string) => boolean;
        password: (value?: string) => boolean;
    };
    onLogin: (event: MouseEvent) => void;
}

export interface RegistrationFormProps extends Props {
    validate: {
        email: (value?: string) => boolean;
        login: (value?: string) => boolean;
        secondName: (value?: string) => boolean;
        firstName: (value?: string) => boolean;
        midleName: (value?: string) => boolean;
        phone: (value?: string) => boolean;
        password: (value?: string) => boolean;
        repeatePassword: (value?: string) => boolean;
    };
    onRegister: (event: MouseEvent) => void;
}

export interface ChangeProfilePasswordFormProps extends Props {
    validate: {
        oldPassword: (value?: string) => boolean;
        newPassword: (value?: string) => boolean;
        repeateNewPassword: (value?: string) => boolean;
    };
    onSave: (event: MouseEvent) => void;
}

export interface ProfileData extends Props {
    email: string;
    login: string;
    secondName: string;
    firstName: string;
    middleName: string;
    displayName: string;
    phone: string;
}

export interface InputProps extends Props{
    name: string;
    label?: string;
    onBlur?: () => void;
    placeholder?: string;
    type?: InputType;
    value?: string;
    validate?: (value?: string) => string;
}

export interface ProfileItemProps extends Props{
    name: string;
    isEdit?: boolean;
    label?: string;
    type?: InputType;
    value?: string;
    validate?: (value?: string) => string;
}

export interface SearchFieldProps extends Props {
    name?: string;
    className?: string;
    value?: string;
}


export interface ChatItemProps extends Props {
    time: string;
    lastMessage: string;
    lastYou: boolean;
    userName?: string;
    selected: boolean;
    unreadMessagesCount: number
}

export interface ChatsPageProps extends Props {
    chatsList?: Array<ChatItemProps>;
    messagesList?: Array<Dialog>;
}

export type ButtonType = 'prymary' | 'secondary' | 'important';

export type HTMLInputTypeAttribute  = 
    'button' | 
    'checkbox' | 
    'color' | 
    'date' | 
    'datetime-local' | 
    'email' | 
    'file' | 
    'hidden' | 
    'image' | 
    'month' | 
    'number' | 
    'password' | 
    'radio' | 
    'range' | 
    'reset' | 
    'search' | 
    'submit' | 
    'tel' | 
    'text' | 
    'time' | 
    'url' | 
    'week';

/**
 * Тип заголовка
 */
export type TitleType = 'smal' | 'bold';

/**
 * Элемент чата
 */
export interface ChatItem {
    /**
     * Название чата
     */
    chatName: string;

    /**
     * Последнее сообщение
     */
    lastMessage?: string;

    /**
     * Выбран ли элемент
     */
    selected?: boolean;

    /**
     * Дата отправки
     */
    sentTime?: string;

    /**
     * Кол-во непрочитанных сообщений
     */
    unreadedMessagesCount?: number;

    /**
     * Отправитель
     */
    who?: string;
}

export type DialogType = 'incoming' | 'outgoing';

export interface Dialog extends Props {
    message: string;
    type: DialogType;
    time: string;
    user?: string;
}
