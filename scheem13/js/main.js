  // Utility function to log messages
  var log_console = function(msg) {
      $('#console').append('<p>' + msg + '</p>');
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
                log_console('Eval Error: ' + e);
            }
        }
        catch(e) {
            log_console('Parse Error: ' + e);
        }
    });
  });
