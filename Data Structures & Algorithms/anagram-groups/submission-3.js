class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let  m = new Map()
        let ln = []

        for (let i =0 ; i< strs.length ; i++){
            let k = []
            let count = new Array(26).fill(0)
            for( let j of strs[i]){
                count[j.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }

            if(m.get(count.join("#"))){
                m.get(count.join("#")).push(strs[i])
            }
            else{
                m.set(count.join("#"),[])
                m.get(count.join("#")).push(strs[i])
            }
        }
       let res = [...m.values()]
       return res


    }
}
