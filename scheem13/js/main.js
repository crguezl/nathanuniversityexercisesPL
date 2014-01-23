  // Utility function to log messages
  var log_console = function(msg) {
      $('#console').append('<p>' + msg + '</p>');
  };
  // After page load
  $(function() {
    $('#submitbutton').click(function() {
        var user_text = $('#input').val();
        $('#console').html(''); // clear console
        log_console('Your input was: "' + user_text + '"');
        try {
            var parsed = scheem.parse(user_text);
            log_console('Parsed: ' + JSON.stringify(parsed));
            try {
                var result = evalScheem(parsed, {});
                log_console('Result: ' + JSON.stringify(result));
            }
            catch(e) {
                log_console('Eval Error: ' + e);
            }
        }
        catch(e) {
            log_console('Parse Error: ' + e);
        }
    });
  });
