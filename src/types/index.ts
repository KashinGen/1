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
