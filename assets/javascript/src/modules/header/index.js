import helpers from './modules/helpers';
import VideoBanner from './modules/videoBanner';

export default function header() {
    helpers();
    new VideoBanner();

    window.addEventListener('error', (e) => {
        const { message, filename, lineno, colno, error } = e;
        console.log([message, filename, lineno, colno, error]);
    });
}
