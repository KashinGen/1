import * as Components from './components';
import './styles/style.scss';
import router from './router';
import { registerComponent, registerPartial } from './core/Register';

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

// registerComponent(Components.ChatItem.Name, Components.ChatItem);
// registerComponent(Components.FeedBody.Name, Components.FeedBody);
// registerComponent(Components.FeedFooter.Name, Components.FeedFooter);
// registerComponent(Components.FeedHeader.Name, Components.FeedHeader);
// registerComponent(Components.FeedMessage.Name, Components.FeedMessage);
// registerComponent(Components.FormContainer);


document.addEventListener('DOMContentLoaded', () => {
    window.onpopstate = router.urlLocationHandler;
    window.route = router.routes;
    router.urlLocationHandler();
});
