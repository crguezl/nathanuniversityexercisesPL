/*
  http://nathansuniversity.com/pegs8.html

Comments - Anything on a line that appears after ;; is a comment
and should be ignored by the parser. Add comments to Scheem.

*/
start =
    e:expression _ { return e; }

expression =    atom
             / LEFTPAR el:expressionlist RIGHTPAR { return el; }

expressionlist = f:expression el:( __ es:expression { return es;} )* 
                   { return [ f ].concat(el); }

validchar
    = [0-9a-zA-Z_?!+\-=@#$%^&*/.]

// tokens

atom =
      _ e:[0-9]+   
        { return parseInt(e, 10); }
   /  _ chars:validchar+
        { return chars.join(""); }

white = [ \t\r\n] / comment
__ = white+
_  = white*
LEFTPAR  = _ '('
RIGHTPAR = _ ')'
comment = ";;"[^\n]* 
