$(document).ready(function () {
  const arrNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const arrLettersUpper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const arrLettersLower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  $('.button').on('click', function (e) {
    e.preventDefault();
    const getLongPassword = $('#long').val();

    let arrResult = [];

    if ($('.choiceCharacters1').is(':checked')) {
      jQuery.merge(arrResult, arrNumbers);
    }
    if ($('.choiceCharacters2').is(':checked')) {
      jQuery.merge(arrResult, arrLettersUpper);
    }
    if ($('.choiceCharacters3').is(':checked')) {
      jQuery.merge(arrResult, arrLettersLower);
    }

    if ($('#long').val() > 0 && $.type(+$('#long').val()) == 'number') {
      $('.audit1').text('');
      return generateRandomPassword(arrResult, getLongPassword);
    } else {
      $('.audit1').text('You must enter a number!!!');
    }

    function generateRandomPassword(arr, longPassword) {
      const arrPassword = [];
      if (arr.length == 0) {
        $('.audit2').text('You have to choose characters!!!');
      } else {
        $('.audit2').text('');
        for (let i = 0; i < +$('#long').val(); i++) {
          const randomIndex = Math.floor(Math.random() * arr.length);
          arrPassword.push(arr[randomIndex]);
          const result = arrPassword.join('');

          $('.resultParagraph').text(result);
        }
      }
    }
  });
});
