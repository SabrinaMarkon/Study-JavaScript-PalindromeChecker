// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

});

$('button').on('click', function palindrome() {
  
  var str = document.getElementById('str').value;
  
  // set the string to lowercase first:
  str = str.toLowerCase();
  
  // remove all non-alphanumeric characters with a regular expression:
  str = str.replace(/[^A-Za-z0-9]/g, '');
  
  
  // split all remaining characters into an array:
  arr = str.split('');
  
  // reverse the array:
  arr.reverse();
  
  // join the elements (characters) back together into a new string:
  reversestr = arr.join('');
  
  // find out if str is the same as reversestr:
  if (str === reversestr) {
    // means the string is a palindrome:
    $('.showresults').html(str + ' IS a palindrome since backwards it is ALSO spelled ' + reversestr);
    return true;
  }
  
  // if the string is not a palindrome:
  $('.showresults').html(str + ' is NOT a palindrome since backwards it is spelled ' + reversestr);
  return false;
  
});


