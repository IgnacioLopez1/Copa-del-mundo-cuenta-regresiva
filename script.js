//Primero Queremos saber por separado a la fecha que queremos llegar//
let fechaObjetivo = new Date("June 11, 2026 14:00:00");


// Ahora la fecha en la cual empezamos//
let fechaActual = new Date();

//Diferencia//

let diferencia = fechaObjetivo - fechaActual;


const intervalID = setInterval(segundos, 1000);

 function segundos() {
      
        let fechaActual = new Date();
        let diferencia = fechaObjetivo - fechaActual;

        // Formulas para sacar:dias,horas.minutos y segundos ///
        let diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        let horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        let segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);
        

        //Le agregamos diseño//
        let ElementoSegundo = document.querySelector('.segundos');
        ElementoSegundo.style.color = "white";
        ElementoSegundo.textContent = segundosRestantes;
        
        let ElementoDia = document.querySelector('.dias');
        ElementoDia.style.color = "white";
        ElementoDia.textContent = diasRestantes;

        
        let ElementoMinuto = document.querySelector('.minutos');
        ElementoMinuto.style.color = "white";
        ElementoMinuto.textContent = minutosRestantes;

        let ElementoHora = document.querySelector('.horas');
        ElementoHora.style.color = "white";
       
        ElementoHora.textContent =  + horasRestantes;
        


     




}

        
 














