function solve() {
  let correctAnswers = 0;
  let index = 0;
  Array.from(document
  .querySelectorAll('.quiz-answer'))
  .map(x => x.addEventListener('click', function nextQuestion(e) {
      if (e.target.innerText === 'onclick'
        || e.target.innerText === 'JSON.stringify()'
        || e.target.innerText === 'A programming API for HTML and XML documents') {
        correctAnswers++;
      }

      let currentQuestion = document.querySelectorAll('section')[index];
      currentQuestion.style.display = 'none';
      currentQuestion.classList.add('hidden');

      let nextQuestion = document.querySelectorAll('section')[index + 1];

      if (nextQuestion) {
        nextQuestion.classList.remove('hidden');
        nextQuestion.style.display = 'block';
      }
      else{
        showResults(correctAnswers);
      }

      index++;
    }));
   
    function showResults(correctAnswers){
      document.querySelector("#results").style.display = 'block';
      let result = document.querySelector("#results > li > h1");

      if (correctAnswers === 3) {
        result.innerText = "You are recognized as top JavaScript fan!";
      }else{
        result.innerText = `You have ${correctAnswers} right answers`;
      }
    }
}
