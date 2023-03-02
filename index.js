/* BOTON DE VER IDIOMAS */

let hideText_btn = document.getElementById ('hideText_btn');

let hideText = document.getElementById ('hideText');

hideText_btn.addEventListener ('click', toggleText);

function toggleText() {
    hideText.classList.toggle ('show');
}

/* FORMULARIO DE COMENTARIOS*/

var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
