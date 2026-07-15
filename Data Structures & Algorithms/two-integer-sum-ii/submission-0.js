class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let k=0
        let m = new Map()
        for(let i=0 ; i<numbers.length ; i++){
            k = target - numbers[i]
            if(m.has(k)){
return [m.get(k)+1,i+1]
            }
            else{
                m.set(numbers[i],i)
            }
        }
    }
}
