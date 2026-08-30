const calcul = document.querySelector('#calcular');
function imc() {

    const name = document.querySelector('#nom').value;
    const taille = +document.querySelector('#taille').value;
    const poids = +document.querySelector('#poids').value;
    const result = document.querySelector('#resultat')

    if (name !== '' && taille !=='' && poids !== '' ) {
        const valeurIMC = (poids / (taille * taille)).toFixed(2);
        let classification = '';

        if (valeurIMC < 18.5){
            classification = 'Vous  êtes en sous-poids.';
        }
        
        else if (valeurIMC < 25) {
            classification = 'Vous êtes avec un poids idéal. Félicitations!!!';
        }
        
        else if (valeurIMC < 30){
            classification = 'Vous êtes légèrement au-dessus du poids.';
        }
        
        else if (valeurIMC < 35){
            classification = 'Vous êtes avec de l\'obésité degré I.';
        }
        
        else if (valeurIMC < 40){
            classification = 'Vous êtes avec de l\'obésité degré II.';
        }
        
        else {
            classification = 'Vous êtes avec de l\'obésité degré III. Attention!!';
        }

        result.textContent = `${name} votre IMC est ${valeurIMC} et ${classification}`;

    }
    
    else if (poids === '0' || taille === '0') {
        result.textContent = 'Le poids et la taille ne peuvent pas être égaux à zéro!!!';
        exit();
    }
    
    else {
        result.textContent = 'Veuillez remplir tous les champs!!!'; 
    }


}

calcul.addEventListener('click', imc);