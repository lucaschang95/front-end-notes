let curry = (fn) => {
    if (typeof fn !== 'function') {
        throw Error('No function provided');
    }

    return function curriedFn(...args) {
        console.log('args.length', args.length);
        console.log('fn.length', fn.length);
        if (args.length < fn.length) {
            return function() {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)));
            };
        }

        return fn.apply(null, args);
    };
};

const multply = (x, y, z) => x * y * z;

const result = curry(multply)(1)(2)(3);
console.log(result);