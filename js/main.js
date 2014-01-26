  // Utility function to log messages

  var clear = function() {
    $('#myinput').html('');
    $('#parsed').html('');
  };
  var log_input = function(msg) {
      $('#myinput').html('<p>' + msg + '</p>');
  };

  var log_parsed = function(msg) {
      $('#parsed').html('<p>' + msg + '</p>');
  };

  var log_result = function(msg) {
      $('#result').html('<p>' + msg + '</p>');
  };
  // After page load
  $(function() {
    $('#submitbutton').click(function() {
        var user_text = $('#input').val();
        $('#console').html(''); // clear console
        log_input('"' + user_text + '"');
        try {
            var parsed = scheem.parse(user_text);
            log_parsed(JSON.stringify(parsed));
            try {
                var result = evalScheem(parsed, {});
                log_result(JSON.stringify(result));
            }
            catch(e) {
                clear();
                log_result('Eval Error: ' + e);
            }
        }
        catch(e) {
            clear();
            log_result('Parse Error: ' + e);
        }
    });
  });

$( "#example1" ).click(function( event ) {
  event.preventDefault();
  clear();
  $('#result').html('');

  $( "#input" ).val([
    '(begin',
    '  (define a 5)',
    '  (define b 3)',
    '  (if (= a b) 6 9)',
    ')'
    ].join("\n"));
});
