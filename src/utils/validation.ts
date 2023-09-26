
export const required = (value?: string) => {
    if(!value) {
        return 'Обязательное поле';
    }
};


export const validatePassword = (val: string) => {
    if(!val) {
        return 'Обязательное поле';
    }    
    if(!/^.{8,40}$/.test(val)) {
        return 'Длина должна быть от 8 до 40 символов';
    }
    if(!/\d/.test(val)) {
        return 'Поле должно содержать хотя бы 1 цифру';
    }
    if(!/[А-ЯA-Z]/.test(val)) {
        return 'Поле должно содержать хотя бы 1 заглавную букву';
    }
}

export const validateLogin = (val: string) => {
    if(!val) {
        return 'Обязательное поле';
    }
    if(!/[^a-zA-Z0-9а-яА-Я\-\\_]/g.test(val)) {
        return 'Поле не должно содержать спецсимволы';
    }
    if(!/[^a-zA-Z0-9\-\\_]/g.test(val)) {
        return 'Только латиница';
    }
    if(!/^\d+$/.test(val)) {
        return 'Не должно состоять только из цифр';
    }
    if(!/^.{3,20}$/.test(val)) {
        return 'длина должна быть от 3 до 20 символов';
    }
}

export const validateName = (val?: string) => {
    if(!val) {
        return 'Обязательное поле';
    }
    if(/[^a-zA-Zа-яА-Я\\-]/g.test(val)) {
        return 'Не должно содержать спецсимволы/цифры';
    }
    if(!/^[A-ZА-Я]/g.test(val)) {
        return 'Должно начинаться с заглавной буквы';
    }
}


export const validatePhone = (val?: string) => {
    if(!val) {
        return 'Обязательное поле';
    }   
    if(!/^.{10,15}$/.test(val)) {
        return 'Длина должна быть от 10 до 15 символов';
    }
    if(!/^\+?\d+$/.test(val)) {
        return 'Невалидный номер телефона';
    }
}


export const validateEmail = (val?: string) => {
    if(!val) {
        return 'Обязательное поле';
    }   
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        return 'Невалидный email';
    }
}

const checkInvalid = (value?: boolean | string) => 
    typeof value === 'boolean' && value === false;

export const validateForm = (fields: object): boolean => {
    let isValid = true;
    Object.entries(fields).forEach(([, value]) => {
        if(checkInvalid(value)) {
            isValid = false;
        }
    });
    return isValid;
}
