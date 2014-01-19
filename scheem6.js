/*
    http://nathansuniversity.com/scheem6.html

    Write a version of evalScheem that works with quote, cons, car, and cdr. Don't worry about illegal inputs.
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
    }
};
