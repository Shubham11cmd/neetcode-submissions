class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let k = ""
        let l
        for(let i=0 ; i<strs.length ; i++){
            l = strs[i].length
            k = k+ l+ "#"+strs[i]
        }
        return k
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {

            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const len = Number(str.substring(i, j));

            const word = str.substring(j + 1, j + 1 + len);

            res.push(word);

            i = j + 1 + len;
        }

        return res;
    }
}
