/*
    http://nathansuniversity.com/scheem4.html

    Understanding the distinction between expressions and quoted
    expressions is important. The expression ['+', 2, 3] evaluates
    to 5, but the expression ['quote', ['+', 2, 3]] evaluates to
    ['+', 2, 3]. This is actually a little bit trickier than it
    seems. It actually means that any valid Scheem expression is
    also a valid Scheem value; just put a quote in front of it to
    use it as a value. This means we can assign Scheem expressions
    to variables, use Scheem expressions as data, and generally rip
    apart and put back together any Scheem expressions. This is one
    of the most powerful aspects of languages in the Lisp family;
    we'll revisit this feature again in the future.

    Write a version of evalScheem that can do addition and quotation.
*/

var evalScheem = function (expr, env) {
    // Numbers evaluate to themselves
    if (typeof expr === 'number') {
        return expr;
    }
    // Strings are variable references
    if (typeof expr === 'string') {
        return env[expr];
    }
    // Look at head of list for operation
    switch (expr[0]) {
        case '+':
            return evalScheem(expr[1], env) +
                   evalScheem(expr[2], env);
        case '-':
            return evalScheem(expr[1], env) -
                   evalScheem(expr[2], env);
        case '*':
            return evalScheem(expr[1], env) *
                   evalScheem(expr[2], env);
        case '/':
            return evalScheem(expr[1], env) /
                   evalScheem(expr[2], env);
        case 'define':
           varname = expr[1];
           value   = evalScheem(expr[2], env);
           env[varname] = value;
           return 0;
        case 'set!':
           varname = expr[1];
           value   = evalScheem(expr[2], env);
           env[varname] = value;
           return value;
        case 'begin':
           var r;
           for(i=1; i<expr.length; i++) {
             r = evalScheem(expr[i], env);
           }
           return r;
        case 'quote':
           return expr[1];
    }
};
