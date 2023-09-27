import './styles/style.scss';
import router from './router';
import { registerComponent, registerPartial } from './core/Register';
import * as Components from './components';

registerComponent('Avatar', Components.Avatar);
registerComponent('AppLink', Components.AppLink);
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
registerComponent('ChatItem', Components.ChatItem);
registerComponent('ChatInput', Components.ChatInput);
registerComponent('SendButton', Components.SendButton);
registerComponent('Dialog', Components.Dialog);
registerPartial('Form', Components.Form);


document.addEventListener('DOMContentLoaded', () => {
    window.onpopstate = router.urlLocationHandler;
    window.route = router.routes;
    router.urlLocationHandler();
});
