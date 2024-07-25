/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romen = {
        i: 1,
        iv: 4,
        v: 5,
        ix: 9,
        x: 10,
        xl: 40,
        l: 50,
        xc: 90,
        c: 100,
        cd: 400,
        d: 500,
        cm: 900,
        m: 1000,
    }
    let ans = ''

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

    return ans;
};

