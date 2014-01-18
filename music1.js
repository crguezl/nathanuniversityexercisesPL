// http://nathansuniversity.com/music1.html
var reverse = function(expr) {
    if (expr !== null) {
        if (expr.tag === 'seq') {
            return {tag: 'seq',
                    left: reverse(expr.right),
                    right: reverse(expr.left) };
        }
    }
    return expr;
};
