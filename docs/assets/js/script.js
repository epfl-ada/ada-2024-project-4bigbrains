// Script for the button of Clue 1
document.getElementById('answer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from reloading the page

    const userAnswer = document.getElementById('user-answer').value.trim();
    const correctAnswer = "USAIUKJAI"; // Correct answer
    const feedback = document.getElementById('feedback');

    // Check if the answer matches
    if (userAnswer === "") {
        feedback.textContent = "Please enter a valid answer.";
        feedback.style.color = "red";
    } else if (userAnswer === correctAnswer) {
        feedback.textContent = "Success! You've entered the correct answer. Keep it in mind until the end";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect answer. Try again!";
        feedback.style.color = "red";
    }
});

// Script for hint 1
document.getElementById('hint1-text').addEventListener('click', function() {
    this.classList.toggle('unblurred'); 
});


// Script for the button of Clue 2
document.getElementById('answer-form2').addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page par défaut
    event.preventDefault();

    // Récupérer la réponse de l'utilisateur
    const userAnswer = document.getElementById('user-answer2').value.trim();
    
    // Spécifier la bonne réponse (par exemple, "solution")
    const correctAnswer = "17"; 

    // Vérifier la réponse
    const feedback2 = document.getElementById('feedback2');
    
    // Check if the answer matches
    if (userAnswer === "") {
        feedback2.textContent = "Please enter a valid answer.";
        feedback2.style.color = "red";
    } else if (userAnswer === correctAnswer) {
        feedback2.textContent = "Success! You've entered the correct answer. Keep it in mind until the end";
        feedback2.style.color = "green";
    } else {
        feedback2.textContent = "Incorrect answer. Try again!";
        feedback2.style.color = "red";
    }
});

// Script for hint 2
document.getElementById('hint2-text').addEventListener('click', function() {
    this.classList.toggle('unblurred'); 
});

// Script for the button of Clue 3
document.getElementById('answer-form3').addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page par défaut
    event.preventDefault();

    // Récupérer la réponse de l'utilisateur
    const userAnswer = document.getElementById('user-answer3').value.trim();
    
    // Spécifier la bonne réponse (par exemple, "solution")
    const correctAnswer = "30"; 

    // Vérifier la réponse
    const feedback3 = document.getElementById('feedback3');
    
    // Check if the answer matches
    if (userAnswer === "") {
        feedback3.textContent = "Please enter a valid answer.";
        feedback3.style.color = "red";
    } else if (userAnswer === correctAnswer) {
        feedback3.textContent = "Success! You've entered the correct answer. Keep it in mind until the end";
        feedback3.style.color = "green";
    } else {
        feedback3.textContent = "Incorrect answer. Try again!";
        feedback3.style.color = "red";
    }
});

// Script for hint 3
document.getElementById('hint3-text').addEventListener('click', function() {
    this.classList.toggle('unblurred'); 
});

// Script for the button of Clue 4
document.getElementById('answer-form4').addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page par défaut
    event.preventDefault();

    // Récupérer la réponse de l'utilisateur
    const userAnswer = document.getElementById('user-answer4').value.trim();
    
    // Spécifier la bonne réponse (par exemple, "solution")
    const correctAnswer = "DTR"; 

    // Vérifier la réponse
    const feedback4 = document.getElementById('feedback4');
    
    // Check if the answer matches
    if (userAnswer === "") {
        feedback4.textContent = "Please enter a valid answer.";
        feedback4.style.color = "red";
    } else if (userAnswer === correctAnswer) {
        feedback4.textContent = "Success! You've entered the correct answer. Keep it in mind until the end";
        feedback4.style.color = "green";
    } else {
        feedback4.textContent = "Incorrect answer. Try again!";
        feedback4.style.color = "red";
    }
});


// Script for hint 4
document.getElementById('hint4-text').addEventListener('click', function() {
    this.classList.toggle('unblurred'); 
});


// Script for the button of Clue 5
document.getElementById('answer-form5').addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page par défaut
    event.preventDefault();

    // Récupérer la réponse de l'utilisateur
    const userAnswer = document.getElementById('user-answer5').value.trim();
    
    // Spécifier la bonne réponse (par exemple, "solution")
    const correctAnswer = "FAMILY"; 

    // Vérifier la réponse
    const feedback4 = document.getElementById('feedback5');
    
    // Check if the answer matches
    if (userAnswer === "") {
        feedback4.textContent = "Please enter a valid answer.";
        feedback4.style.color = "red";
    } else if (userAnswer === correctAnswer) {
        feedback4.textContent = "Success! You've entered the correct answer. Keep it in mind until the end";
        feedback4.style.color = "green";
    } else {
        feedback4.textContent = "Incorrect answer. Try again!";
        feedback4.style.color = "red";
    }
});


// Script for hint 5
document.getElementById('hint5-text').addEventListener('click', function() {
    this.classList.toggle('unblurred'); 
});


// Script for the button of final answer
document.getElementById('answer-formfinal').addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page par défaut
    event.preventDefault();

    // Récupérer la réponse de l'utilisateur
    const userAnswer = document.getElementById('user-answerfinal').value.trim();
    
    // Spécifier la bonne réponse (par exemple, "solution")
    const correctAnswer = "USAIUKJAI 17 30 DTR FAMILY"; 

    // Vérifier la réponse
    const feedbackfinal = document.getElementById('feedbackfinal');
    
    // Check if the answer matches
    if (userAnswer === "") {
        feedbackfinal.textContent = "Please enter a valid answer.";
        feedbackfinal.style.color = "red";
    } else if (userAnswer === correctAnswer) {
        feedbackfinal.textContent = "";
        successContainer.style.display = "block"; // Affiche l'image
    } else {
        feedbackfinal.textContent = "Incorrect answer. Try again!";
        feedbackfinal.style.color = "red";
    }
});




// Script for hint final answer
document.getElementById('hintfinal-text').addEventListener('click', function() {
    this.classList.toggle('unblurred'); 
});


// Script for final results
function showSuccess() {
    const successContainer = document.getElementById('successContainer');
    successContainer.style.display = 'flex'; 
}

// Fonction pour masquer l'image et le texte
function hideSuccess() {
    const successContainer = document.getElementById('successContainer');
    successContainer.style.display = 'none'; 
}

document.getElementById('successContainer').addEventListener('click', hideSuccess);
