function addBinary(a: string, b: string): string {
    // return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2)

    // reverse strings
    if(b.length > a.length) return addBinary(b,a);
    if(a === '0' && b === '0') return '0'

    let result=0;
    let total = '0'

    // b sized to a
    for(let i=b.length-1; i < a.length-1; i++){
        let c = b.split('')
        c.unshift('0')
        b = c.join('')
    }

    // total sized to a and b
    for(let i=0; i<a.length; i++){
        let t = total.split('');
        t[i] = '0'
        total = t.join('')
    }

    // perform binary math
    for(let i = b.length-1; i>=0; i--) {
        result = Number(a[i]) + Number(b[i]) + Number(total[i]);

        // if i = 0 and result is 2
        if(i === 0 && result === 2) {
            let t = total.split('');
            t[i] = '0'
            t.unshift('1')
            total = t.join('')

            return total
        }

        // if i = 0 and result 3
        if(i === 0 && result > 2) {
            let t = total.split('');
            t[i] = '1'
            t.unshift('1')
            total = t.join('')

            return total
        }

        // result is 2
        if(i !== 0 && result === 2) {
            let t = total.split('');
            t[i] = '0'
            t[i-1] = '1'
            total = t.join('')
        }

        // result is 3
        if(i !== 0 && result > 2) {
            let t = total.split('');
            t[i] = '1'
            t[i-1] = '1'
            total = t.join('')
        } 
        
        // result is 1
        if (result === 1){
            let t = total.split('');
            t[i] = '1'
            total = t.join('')
        }
    }

    return total
};

// Bonus function
const convertBinary = (n: number, binaryTree = 
{}): number => {
    let binaryPower = 1
    while( binaryPower<=n ) {
        binaryTree[binaryPower] = 0;
        binaryPower*=2
    }
    binaryTree[binaryPower/2] = 1;

    let remainder = n - binaryPower/2

    if(remainder>=1) convertBinary(remainder, binaryTree)

    return +Object.values(binaryTree).reverse().join('')
}