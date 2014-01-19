/*
    http://nathansuniversity.com/scheem2.html

    Write a version of evalScheem that can handle reading variables,
    addition, define, and set!. It should directly update values in the
    input environment.
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
    }
};
