class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m =  new Map()

        for( let i=0 ; i < nums.length ; i++){
            const a = target - nums[i]
            if(m.has(a)){
                return [m.get(a) , i  ]

            } 
            else{
                m.set(nums[i], i)
            }
        }
        return []
    }
}
