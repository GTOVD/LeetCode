const romanNumeral: {} = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
};
function romanToInt(s: string, total: number=0): number {
    if(romanNumeral[s.slice(0,2)]) {
        total += romanNumeral[s.slice(0,2)];
        return romanToInt(s.slice(2),total);
    }
    else if (romanNumeral[s[0]]) {
        total += romanNumeral[s[0]];
        return romanToInt(s.slice(1),total);
    }
    else return total;
};