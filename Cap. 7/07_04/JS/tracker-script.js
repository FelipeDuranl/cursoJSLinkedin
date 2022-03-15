const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLEDOIS = document.querySelector('.circleDois');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var windowWidthDois = window.innerWidth;
var windowHeightDois = window.innerHeight;

function mouseCoordinates(e) {
    // Captura o objeto de evento (movimento do mouse).
    // Obtém a coordenada X (distância da borda esquerda da janela de visualização) através da propriedade clientX.
    // Pega a largura total da janela, subtrai a coordenada atual e a largura do círculo.
    // Faz o mesmo para a coordenada Y (distância da borda superior da janela de visualização).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Define a posição horizontal e vertical.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
}

function mouseCoordinatesDois(e){
    var horizontalPositionDois = windowWidthDois - e.clientX - 100;
    var verticalPositionDois = windowHeightDois - e.clientY-100;

    CIRCLEDOIS.style.left = horizontalPositionDois + 'px';
    CIRCLEDOIS.style.top = verticalPositionDois + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

function changeColorOnTouchDois(){

    CIRCLEDOIS.style.backgroundColor = "green";
    CIRCLEDOIS.style.borderColor = "green";

}

// Quando o mouse se move, executa a função mouseCoordinates.
AREA.addEventListener('mousemove', mouseCoordinates, false);
AREA.addEventListener('mousemove', mouseCoordinatesDois, false);

// Quando o mouse toca o círculo, executa a função changeColorOnTouch.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
CIRCLEDOIS.addEventListener('mouseenter', changeColorOnTouchDois, false);

// Quando o mouse sai do círculo, remove estilos embutidos com uma função anônima.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
CIRCLEDOIS.addEventListener('mouseleave', function(){CIRCLEDOIS.removeAttribute("style");}, false);
