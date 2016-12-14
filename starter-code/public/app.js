console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/pick-a-number',
    success: onSucess,
    error: onError

  });

});

function onSucess(json){
  console.log('got the data');
  console.log(json);
}
