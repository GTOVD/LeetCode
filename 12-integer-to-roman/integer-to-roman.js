/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romen = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    let ans = ''

    for(let letter in romen) {
        console.log(letter)
        while(num>=romen[letter]) {
            ans = ans+letter
            num -= romen[letter]
        }
    }

/*
    while(num > 0) {
        console.log(num)
        if(num >= romen['m']) {
            ans = ans+'M'
            num -= romen['m']
            continue
        }
        if(num >= romen['cm']) {
            ans = ans+'CM'
            num -= romen['cm']
            continue
        }
        if(num >= romen['d']) {
            ans = ans+'D'
            num -= romen['d']
            continue
        }
        if(num >= romen['cd']) {
            ans = ans+'CD'
            num -= romen['cd']
            continue
        }
        if(num >= romen['c']) {
            ans = ans+'C'
            num -= romen['c']
            continue
        }
        if(num >= romen['xc']) {
            ans = ans+'XC'
            num -= romen['xc']
            continue
        }
        if(num >= romen['l']) {
            ans = ans+'L'
            num -= romen['l']
            continue
        }
        if(num >= romen['xl']) {
            ans = ans+'XL'
            num -= romen['xl']
            continue
        }
        if(num >= romen['x']) {
            ans = ans+'X'
            num -= romen['x']
            continue
        }
        if(num >= romen['ix']) {
            ans = ans+'IX'
            num -= romen['ix']
            continue
        }
        if(num >= romen['v']) {
            ans = ans+'V'
            num -= romen['v']
            continue
        }
        if(num >= romen['iv']) {
            ans = ans+'IV'
            num -= romen['iv']
            continue
        }
        if(num >= romen['i']) {
            ans = ans+'I'
            num -= romen['i']
            continue
        }
    }
*/
    return ans;
};

