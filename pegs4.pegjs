/*
http://nathansuniversity.com/pegs4.html

In Scheem an expression is either an atom or a list
of expressions enclosed in parentheses. We will represent atoms as
simple strings, and lists of expressions as JavaScript lists. So
the Scheem program 

(+ 1 (* x 3)) will be parsed as ["+", "1", ["*", "x", "3"]]. 

The program 
(* n (factorial (- n 1))) will be parsed as ["*", "n", ["factorial", ["-", "n", "1"]]].

Write a grammar for Scheem expressions using the definition of atoms above.

*/
start =
    expression

expression =    atom
             / LEFTPAR el:expressionlist RIGHTPAR { return el; }

expressionlist = f:expression el:( __ es:expression { return es;} )* 
                   { return [ f ].concat(el); }

validchar
    = [0-9a-zA-Z_?!+\-=@#$%^&*/.]

// tokens

atom =
    _ chars:validchar+
        { return chars.join(""); }

white = [ \t\r\n]
__ = white+
_  = white*
LEFTPAR  = _ '('
RIGHTPAR = _ ')'
