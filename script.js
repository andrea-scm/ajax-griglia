for (var i = 0; i < 36; i++) {
  $('.square_container').append('<div class="squares"> <span id = "num"></span> </div>');
}

$(document).ready(function () {
  $('.squares').click(function () {//in modo che ad ogni click del quadratino viene cambiato il numero
    var current_square = $(this);
    $.ajax({
      'url': 'https://www.boolean.careers/api/random/int',
      'method': 'GET',
      'success': function (data) {
          riempiQuadratino(data.response,current_square);
      },
      'error': function () {
        alert('errore');
      }
    });
  });
});



//funzione che va a colorare il quadratino in base al numero e ne mostra il numero
function riempiQuadratino(num,square) {
    $(square).children('#num').text(num);
    var squaresNum = $(square).children('#num').text();
    if (squaresNum <= 5){
      $(square).addClass('yellow');
    }else{
      $(square).addClass('green');
    };
    square.off();//in questo modo mi rende cliccabile il quadratino solo una volta
}
