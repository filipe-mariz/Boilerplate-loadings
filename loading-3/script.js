const porcent = document.querySelector('.porcent');
const loading = document.querySelector('.loading');
const count = 4;
const load = setInterval(animate, 50);

const animate = () => {
    if(count == 100){
        loading.parentElement.removeChild(loading);
        clearInterval(load);
    }
    else{
        count = count + 1;
        porcent.textContent = count + '%';
    }
};