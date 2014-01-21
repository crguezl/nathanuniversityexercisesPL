/*
    http://nathansuniversity.com/scheem7.html

    The way if works is that it evaluates its first argument. If
    the first argument evaluates to '#t' then it evaluates its
    second argument and returns that value as its result. Otherwise
    it evaluates its third argument and returns that value as its
    result.

    One slightly tricky detail is that the first argument is always
    evaluated, but the second and third arguments are only evaluated
    conditionally. The second argument is only evaluated if the
    condition was true, and the third argument is only evaluated
    if the condition is not true. This matters when the expressions
    do things like set! variables.

    Write a version of evalScheem that works with = and the if form.
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
        case '=':
           var eq = (evalScheem(expr[1], env) === evalScheem(expr[2], env));
           if (eq) return '#t';
           return '#f';
        case '<':
           var lt = (evalScheem(expr[1], env) < evalScheem(expr[2], env));
           if (lt) return '#t';
           return '#f';
        case '>':
           var gt = (evalScheem(expr[1], env) > evalScheem(expr[2], env));
           if (gt) return '#t';
           return '#f';
        case 'cons':
           var newList = evalScheem(expr[2], env).unshift(evalScheem(expr[1], env));
           return newList;
        case 'car':
           return evalScheem(expr[1][0], env);
        case 'cdr':
           return evalScheem(expr.slice(2), env);
        case 'if':
           var bool = evalScheem(expr[1], env);
           if (bool === '#t') return evalScheem(expr[2], env);
           return evalScheem(expr[3], env);
    }
};
