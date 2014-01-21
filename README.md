#Integrate your parser

Next, integrate your Scheem parser and Scheem interpreter.

First make a minor update to your parser so that it detects numbers.
You want inputs like `5` to parse to the number `5` rather than the
string `5`.

Once you've got that done, you should be able to parse inputs like
`(+ 2 (* 3 4))` into a JavaScript form that is ready for passing
along to your evalScheem.

#Downloading your parser code

Now in your local copy of `simpletest.html` add a line to load your
parser. I organized the files as `Scheem/parser.js` and
`Scheem/test/simpletest.html` so my extra line in `Scheem/test/simpletest.html`
looks like this:


            <script src="../parser.js"></script>

#Unit testing the parser

Now we can start writing tests for the parser. Here are a couple examples:


          suite('parse', function() {
              test('a number', function() {
                  assert.deepEqual(
                      SCHEEM.parse('42'),
                      42
                  );
              });
              test('a variable', function() {
                  assert.deepEqual(
                      SCHEEM.parse('x'),
                      'x'
                  );
              });
          });
          evalScheemString

Now that you have your parser and interpreter working together, you
can make a single function that does everything. Create a new
function `evalScheemString` that takes a string and an environment
and then parses and interprets the Scheem expression.

Integrate your parser into your browser test page. Write tests of
all the features of your parser and make sure they pass. Add in the
`evalScheemString function`. Write some tests for it, too.


