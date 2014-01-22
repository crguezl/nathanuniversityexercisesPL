//http://nathansuniversity.com/music3.html

var endTime = function (time, expr) {
    if (expr.tag === 'note') return time + expr.dur;
    return endTime(endTime(time, expr.left), expr.right);
};

var listnotes = function (t, musexpr) {

    if (musexpr !== null) {
        if (musexpr.tag === 'note') {
            musexpr.start = t;
            return [ musexpr ];
        }
        else if (musexpr.tag === 'seq') {
           var leftTrans = listnotes(t, musexpr.left);
           var rightStart = endTime(t, musexpr.left);
           var rightTrans = listnotes(rightStart, musexpr.right);
           return leftTrans.concat(rightTrans);
        }
    }
};

var compile = function (musexpr) {
    return listnotes(0, musexpr);
};

var melody1_mus = { tag: 'note', pitch: 'a4', dur: 125 };
var melody1_note = [ 
    { tag: 'note', pitch: 'a4', start: 0, dur: 125 } ];
var melody2_mus = 
    { tag: 'seq',
      left: 
       { tag: 'seq',
         left: { tag: 'note', pitch: 'a4', dur: 250 },
         right: { tag: 'note', pitch: 'b4', dur: 250 } },
      right:
       { tag: 'seq',
         left: { tag: 'note', pitch: 'c4', dur: 500 },
         right: { tag: 'note', pitch: 'd4', dur: 500 } } };
var melody2_note = [
    { tag: 'note', pitch: 'a4', start: 0, dur: 250 },
    { tag: 'note', pitch: 'b4', start: 250, dur: 250 },
    { tag: 'note', pitch: 'c4', start: 500, dur: 500 },
    { tag: 'note', pitch: 'd4', start: 1000, dur: 500 } ];


console.log(compile(melody1_mus));

console.log(compile(melody2_mus));

