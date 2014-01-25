  // Utility function to log messages
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
                log_result('Eval Error: ' + e);
            }
        }
        catch(e) {
            log_result('Parse Error: ' + e);
        }
    });
  });

$( "#example1" ).click(function( event ) {
  event.preventDefault();
  $( "#input" ).html( [
    '(begin',
    '  (define a 5)',
    '  (define b 3)',
    '  (if (= a b) 6 9)',
    ')'
    ].join("\n")
  );
});
