class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let ln = Array.from({length : nums.length},()=> [])
        let r=[]
        let l = ln.length-1
        let m = new Map()
        for(let i = 0 ; i<nums.length ; i++){
            if(!m.has(nums[i])){
                m.set(nums[i],1)
            }
            else{
                m.set(nums[i],m.get(nums[i])+1)
            }
        }
        for(let j of m){
            console.log(j)

            // if(ln[j[1]-1].length != 0){
            //    continue 
            // }
            ln[j[1]-1].push(j[0])           
        }
        let p=0
        console.log(ln)
        while( p <k && l>=0){
            if(ln[l].length == 0){
                l=l-1
            }
            else{
                r.push(...ln[l])
                l=l-1
                p = r.length
            }
        }
        return r
    }
}
