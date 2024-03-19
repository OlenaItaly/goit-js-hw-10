
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = event.currentTarget.elements.delay.value;
    const btnRadio = event.currentTarget.elements.state.value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (btnRadio === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
            formEl.reset();
        }, delay);
    });
    promise
        .then(delay => {
            iziToast.success({
                color: 'green',
                position: "topRight",
                message: `:white_check_mark: Fulfilled promise in ${delay}ms`
            });
        })
        .catch(delay => {
            iziToast.error({
                color: 'red',
                position: "topRight",
                message: `:x: Rejected promise in ${delay}ms`
            });
        });
});