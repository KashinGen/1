import { registerComponent, registerPartial } from '../core/Register';
import * as Components from '../components';

export const registerComponents = () => {
    registerComponent('AppLink', Components.AppLink);
    registerComponent('Avatar', Components.Avatar);
    registerComponent('Button', Components.Button);
    registerComponent('BackButton', Components.BackButton);
    registerComponent('IconAppLink', Components.IconAppLink);
    registerComponent('ErrorMessage', Components.ErrorMessage);
    registerComponent('BaseInput', Components.BaseInput);
    registerComponent('ProfileItem', Components.ProfileItem);
    registerComponent('Input', Components.Input);
    registerComponent('SearchField', Components.SearchField);
    registerComponent('Title', Components.Title);
    registerComponent('Info', Components.Info);
    registerComponent('AutorizationForm', Components.AuthForm);
    registerComponent('RegistrationForm', Components.RegistrationForm);
    registerComponent('ChangeProfileDataForm', Components.ChangeProfileDataForm);
    registerComponent('ChangePasswordForm', Components.ChangeProfilePasswordForm);
    registerPartial('Form', Components.Form);
}
