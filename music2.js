// http://nathansuniversity.com/music2.html
var endTime = function (time, expr) {
    // your code here
    if (expr !== null) {
        if (expr.tag === 'note') {
          return time+expr.dur;
        }
        else if (expr.tag === 'seq') {
          var t1 = endTime(time, expr.left);
          return endTime(t1, expr.right);
        }
    }
    return 0;
};
