
const elementosQuePiscam = document.querySelectorAll('.pisca-alerta');
function piscar() {
    elementosQuePiscam.forEach(elemento => {
       
        if (elemento.style.visibility === 'hidden') {
            elemento.style.visibility = 'visible';
        } else {
            elemento.style.visibility = 'hidden';
        }
    });
}
setInterval(piscar, 1200);
