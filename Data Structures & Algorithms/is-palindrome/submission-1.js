class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const ln = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    let l = 0;
    let r = ln.length - 1;
    
    while (l < r) {
        if (ln[l] !== ln[r]) {
            return false;
        }
        l++;
        r--;
    }
    
    return true;
}

}
