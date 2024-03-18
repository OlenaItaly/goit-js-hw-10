
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = event.currentTarget.elements.delay.value;
    const btnRadio = event.currentTarget.elements.state.value;

  
    const promise = new Promise((resolve, reject) => {
        
            if (btnRadio === 'fulfilled') {
 
            
                resolve()
               
            } else {
 
                reject()
               
            }
          formEl.reset();
    })
    promise
        .then(value => {
            setTimeout(() => {
                 iziToast.success({
                color: 'green',
                position: "topRight",
                message: `✅ Fulfilled promise in ${delay}ms`
            })
            
        },delay)
           
            //  formEl.reset();
        })
        .catch(error => {
            setTimeout(() => {
                iziToast.error({
                color: 'red',
                position: "topRight",
                message: `❌ Rejected promise in ${delay}ms`
            })
            
            }, delay);
            
        
        });
})