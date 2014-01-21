var assert = chai.assert;

// Some unit tests

suite('quote', function() {
    test('a number', function() {
        assert.deepEqual(
            evalScheem(['quote', 3], {}),
            3
        );
    });
    test('an atom', function() {
        assert.deepEqual(
            evalScheem(['quote', 'dog'], {}),
            'dog'
        );
    });
    test('a list', function() {
        assert.deepEqual(
            evalScheem(['quote', [1, 2, 3]], {}),
            [1, 2, 3]
        );
    });
});
suite('add', function() {
    test('two numbers', function() {
        assert.deepEqual(
            evalScheem(['+', 3, 5], {}),
            8
        );
    });
    test('a number and an expression', function() {
        assert.deepEqual(
            evalScheem(['+', 3, ['+', 2, 2]], {}),
            7
        );
    });
    test('a dog and a cat', function() {
        assert.deepEqual(
            evalScheem(['+', 'dog', 'cat'], {}),
            42
        );
    });
});

