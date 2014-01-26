var assert = chai.assert;

// Some unit tests

/*
suite('quote', function() {
    test('a number', function() {
        assert.deepEqual(
            evalScheem(['quote', 3], {}), 3
        );
    });
    test('an atom', function() {
        assert.deepEqual(
            evalScheem(['quote', 'dog'], {}), 'dog'
        );
    });
    test('a list', function() {
        assert.deepEqual(
            evalScheem(['quote', [1, 2, 3]], {}), [1, 2, 3]
        );
    });
});
*/

suite('add', function() {
    test('two numbers', function() {
        assert.deepEqual(
            evalScheem(['+', 3, 5], {}), 8
        );
    });
    test('a number and an expression', function() {
        assert.deepEqual(
            evalScheem(['+', 3, ['+', 2, 2]], {}), 7
        );
    });
    test('a dog and a cat', function() {
        assert.deepEqual(
            evalScheem(['+', 'dog', 'cat'], {}),
            42
        );
    });
});


suite('if', function() {
    test('(if #t 5 9) test', function() {
        assert.deepEqual(
            evalScheem(['if', "#t", 5, 9], {}), 5
        );
    });

    test('(if (= 1 1) 2 3) test', function() {
        assert.deepEqual(
            evalScheem(['if', ['=', 1, 1], 2, 3], {}), 2
        );
    });

    test('(if (= 1 1) (if (= 2 3) 10 11) 12) test', function() {
        assert.deepEqual(
          evalScheem(['if', ['=', 1, 1], ['if', ['=', 2, 3], 10, 11], 12], {}), 11
        );
    });
});

suite('translate and evaluate', function() {
    test('add two numbers', function() {
        t = scheem.parse('(+ 2 3)')
        assert.deepEqual(
            evalScheem(t, {}), 5
        );
    });
    test('(+ 3 (* 2 2)) = 7', function() {
        t = scheem.parse('(+ 3 (* 2 2))')
        assert.deepEqual(
            evalScheem(t, {}), 7
        );
    });
    test('(+ a (* 2 2)); a is 3; = 7', function() {
        t = scheem.parse('(+ a (* 2 2))')
        assert.deepEqual(
            evalScheem(t, {a : 3}), 7
        );
    });
    test('(* a (* 2 2)); a is 3; = 12', function() {
        t = scheem.parse('(* a (* 2 2))')
        assert.deepEqual(
            evalScheem(t, {a : 3}), 12
        );
    });
    test('(if  (= a 1) (* 2 2) (+ 3 3)); a = 1', function() {
        assert.deepEqual(
            compile('(if  (= a 1) (* 2 2) (+ 3 3))', {a : 1}), 4
        );
    });
    test('(cdr (quote (4 5 6)))', function() {
        assert.deepEqual(
            evalScheemString('(cdr (quote (4 5 6)))', {a : 1}), [5, 6]
        );
    });
});

