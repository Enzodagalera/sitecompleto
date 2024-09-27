let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
   
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
 
    const offset = -currentSlide * 100; // Ajusta a posição
    slides.style.transform = `translateX(${offset}%)`;
}
 
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}
 
// Inicializa o carrossel
showSlide(currentSlide);
 

function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}
 
function playSound(){
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
 
function submitQuiz(){
    let correctAnswers = {
    q1: "B",
    q2: "C",
    q3: "D",
    q4: "A",
    q5: "B",
    q6: "D",
    q7: "C",
    q8: "C",
    q9: "B",
    q10: "B",
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('enviar').setAttribute('disabled', true);
 


    if (score === 10){
        let successSound = document.getElementById('venceusom');
        successSound.play();
    }
    else{
        let perdeuSom = document.getElementById('perdeusom');
        perdeuSom.play();
    }

    const botao1 = document.getElementById('botao1');
    const botao2 = document.getElementById('botao2');
    botao1.disabled = true;
    botao2.disabled = false;
}

function responderNovamente(){
    score = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('enviar').removeAttribute('disabled');
    result.innerHTML = " ";
    document.getElementById('quiz-form').reset();
    
    let options=document.querySelectorAll('input[type="radio"]');
   options.forEach(option => option.disabled=false);
}
