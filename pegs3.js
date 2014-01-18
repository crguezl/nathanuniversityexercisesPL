// http://nathansuniversity.com/pegs3.html
/*
Write a grammar for parsing a list of words. A single word is one or more lowercase characters. A list of words is one or more words separated by spaces. The parse function should return a list of strings.
*/
start =
    wordlist

wordlist =   f:word _ s:wordlist { return f.concat(s); }
           / f:word


word = f:[a-z]+ { return [ f.join("") ]; }

_ = [ \t\r\n]+
