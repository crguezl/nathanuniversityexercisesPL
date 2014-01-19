$(document).ready(function() {
  $('#eval').click(function() {
    try {
      var result = scheme.parse($('#input').val());
      $('#output').html(JSON.stringify(result));
    } catch (e) {
      $('#output').html('<div class="error"><pre>\n' + String(e) + '\n</pre></div>');
    }
  });

  $("#examples").change(function(ev) {
    var f = ev.target.files[0]; 
    var r = new FileReader();
    r.onload = function(e) { 
      var contents = e.target.result;
      
      input.innerHTML = contents;
    }
    r.readAsText(f);
  });

});

  

