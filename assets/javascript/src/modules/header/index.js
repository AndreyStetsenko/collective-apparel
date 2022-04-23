import helpers from './modules/helpers';

export default function header() {
    helpers();

    window.addEventListener('error', (e) => {
        const { message, filename, lineno, colno, error } = e;
        console.log([message, filename, lineno, colno, error]);
    });
}
