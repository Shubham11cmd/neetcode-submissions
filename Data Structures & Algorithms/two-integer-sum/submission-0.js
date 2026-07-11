class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m =  new Map()

        for( let i in nums){
            const a = target - nums[i]
            if(m.has(a)){
                return [m.get(a) , Number(i)  ]

            } 
            else{
                m.set(nums[i],Number(i))
            }
        }
        return []
    }
}
