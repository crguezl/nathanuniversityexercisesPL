//http://nathansuniversity.com/music6.html

var endTime = function (time, expr) {
    if (expr.tag === 'note') return time + expr.dur;
    if (expr.tag === 'seq')  return endTime(endTime(time, expr.left), expr.right);
    if (expr.tag === 'par')  return Math.max(endTime(time, expr.left), endTime(time, expr.right));
};

var listnotes = function (t, musexpr) {
     var leftTrans, rightTrans, rightStart;

    if (musexpr !== null) {
        if (musexpr.tag === 'note') {
            musexpr.start = t;
            return [ musexpr ];
        }
        else if (musexpr.tag === 'seq') {
           leftTrans = listnotes(t, musexpr.left);
           rightStart = endTime(t, musexpr.left);
           rightTrans = listnotes(rightStart, musexpr.right);
           return leftTrans.concat(rightTrans);
        }
        else if (musexpr.tag === 'par') {
           leftTrans = listnotes(t, musexpr.left);
           rightTrans = listnotes(t, musexpr.right);
           return leftTrans.concat(rightTrans);
        }
    }
};

var compile = function (musexpr) {
    return listnotes(0, musexpr);
};


var melody_mus = 
    { tag: 'seq',
      left: 
       { tag: 'par',
         left: { tag: 'note', pitch: 'c3', dur: 250 },
         right: { tag: 'note', pitch: 'g4', dur: 500 } },
      right:
       { tag: 'par',
         left: { tag: 'note', pitch: 'd3', dur: 500 },
         right: { tag: 'note', pitch: 'f4', dur: 250 } } };
var melody_note = [
    { tag: 'note', pitch: 'c3', start: 0, dur: 250 },
    { tag: 'note', pitch: 'g4', start: 0, dur: 500 },
    { tag: 'note', pitch: 'd3', start: 500, dur: 500 },
    { tag: 'note', pitch: 'f4', start: 500, dur: 250 } ];


console.log(compile(melody_mus));

