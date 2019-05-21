for (var i = 0; i < 36; i++) {
  $('.square_container').append('<div class="squares"> <span id = "num"></span> </div>');
}


$(document).ready(function () {
  $('.squares').click(function () {//in modo che ad ogni click del quadratino viene cambiato il numero
    $.ajax({
      'url': 'https://www.boolean.careers/api/random/int',
      'method': 'GET',
      'success': function (data) {
        riempiQuadratino(data.response);
      },
      'error': function () {
        alert('errore');
      }
    });
  });
});

//funzione che va a colorare il quadratino in base al numero e ne mostra il numero
function riempiQuadratino(num) {
  $('.squares').click(function () {
    $(this).children('#num').text(num);
    var squaresNum = $(this).children('#num').text();
    if (squaresNum > 0 && squaresNum <= 5){
      $(this).addClass('yellow');
      $(this).removeClass('green');
    }else{
      $(this).addClass('green');
      $(this).removeClass('yellow');
    }
  });
}
