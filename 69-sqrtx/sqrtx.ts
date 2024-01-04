function mySqrt(x: number): number {
    // return Math.floor(Math.sqrt(x));

    // return Math.floor(x**0.5);

    // return equationSqrt(x);

    return iteratingSqrt(x);

    // return binarySearchSqrt(x);
};

const equationSqrt = (x: number): number => {
    if(x < 2) return x;

    return x
}

const iteratingSqrt = (x: number): number => {
    if(x < 2) return x;

    let i = 0;

    while(i*i <= x) {
        i++
    }

    return i-1;
}

const binarySearchSqrt = (x: number): number => {
    if(x < 2) return x;

    let high = x;
    let low = 1;

    while(low<=high) {
        let middle = Math.floor((high+low)/2)

        if(middle*middle === x) return middle;

        if(middle*middle < x) low=middle+1;

        else { 
            high=middle-1;
        }
    }

    return high
}