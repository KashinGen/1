import './styles/style.scss';
import router from './router';
import { registerComponents } from './services/registerComponent';

registerComponents();

document.addEventListener('DOMContentLoaded', () => {
    window.onpopstate = router.urlLocationHandler;
    window.route = router.routes;
    router.urlLocationHandler();
});
