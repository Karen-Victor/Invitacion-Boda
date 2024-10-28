function Init(){
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },{
        rootMargin: '-20% 0%',
        threshold: 0
    });

    contenedorPorCargar.querySelectorAll('section').forEach(seccion => {
        observer.observe(seccion);
    });

    window.addEventListener('load',()=>{
        contenedorPorCargar.classList.add('on');
        seccionCargando.classList.add('ocultar');
    });

    function calcularTiempoRestante() {
        const ahora = new Date();
        const fechaObjetivo = new Date('2024-11-09T17:00:00');
        const diferencia = fechaObjetivo - ahora;
        if(diferencia>0){
            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
            
            spanContadorDias.innerText = dias;
            spanContadorHoras.innerText = horas;
            spanContadorMinutos.innerText = minutos;
            spanContadorSegundos.innerText = segundos;
        }
    }
    
    calcularTiempoRestante();
    setInterval(calcularTiempoRestante,1000);
}
Init();