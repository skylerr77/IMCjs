function calcular(){
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    const resultado = document.getElementById('resultadoo')
    const  imagen1 = document.getElementById('img2')
    const  imagen2 = document.getElementById('img3')
    const  imagen3 = document.getElementById('img4')
    const  imagen4 = document.getElementById('img5')
    let peso1 = peso.value
    let altura1 = altura.value 
    altura1 = altura1.replace(",", ".")
    if (!isNaN(peso1) && !isNaN(altura1)) {
        if (peso1>0 && peso1<263.5 && altura1>0 && altura1<2.52) {
            let imc = peso1 / (altura1 * altura1);

            if (imc>0 && imc<=18.5){

                resultado.textContent =imc.toFixed(2);
                resultado.style.backgroundColor="yellow"
                resultado.style.fontSize='30px'
                resultado.style.fontWeight='900'
                resultado.style.color="white"
                imagen1.style.opacity = '1';
                imagen2.style.opacity = '0';
                imagen3.style.opacity = '0';
                imagen4.style.opacity = '0';

            }else if (imc>18.5 && imc<=24.9){

                resultado.textContent =imc.toFixed(2);
                resultado.style.backgroundColor="green"
                resultado.style.fontSize='30px'
                resultado.style.fontWeight='900'
                resultado.style.color="white"
                imagen2.style.opacity = '1';
                imagen1.style.opacity = '0';
                imagen3.style.opacity = '0';
                imagen4.style.opacity = '0';

            }else if (imc>25.0 && imc<=29.9){

                resultado.textContent =imc.toFixed(2);
                resultado.style.backgroundColor="orange"
                resultado.style.fontSize='30px'
                resultado.style.fontWeight='900'
                resultado.style.color="white"
                imagen3.style.opacity = '1';
                imagen1.style.opacity = '0';
                imagen2.style.opacity = '0';
                imagen4.style.opacity = '0';

            }else if (imc>30.0){
                resultado.textContent =imc.toFixed(2);
                resultado.style.backgroundColor="red"
                resultado.style.fontSize='30px'
                resultado.style.fontWeight='900'
                resultado.style.color="white"
                imagen4.style.opacity = '1';
                imagen1.style.opacity = '0';
                imagen2.style.opacity = '0';
                imagen3.style.opacity = '0';
            }   

        }else {
            alert('Ingrese valores válidos')
        }

    }else {
        resultado.textContent = "Por favor, ingresa valores válidos.";
    }
}
function reiniciar(){
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    const resultado = document.getElementById('resultadoo')
    const  imagen1 = document.getElementById('img2')
    const  imagen2 = document.getElementById('img3')
    const  imagen3 = document.getElementById('img4')
    const  imagen4 = document.getElementById('img5')
    peso.value = ""
    altura.value = ""
    resultado.textContent= ""
    resultado.style.backgroundColor="transparent"
    imagen2.style.opacity = '0';
    imagen1.style.opacity = '0';
    imagen3.style.opacity = '0';
    imagen4.style.opacity = '0';

}