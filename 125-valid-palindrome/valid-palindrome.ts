function isPalindrome(s: string): boolean {
    let match = false

    let as: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    if(!as) return true

    for(let i=0; i<as.length; i++) {
        if(as[i] === as[as.length-i-1]) match = true
        else {
            return false
        }
    }

    return match
};