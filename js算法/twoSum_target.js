// 两数之和-给定⼀个数组nums和⼀个⽬标值target,在该数组中找出和为⽬标值的两个数
// nums = [1,2,3,4,5]   target=6

//定义函数
function twoSum(nums,target){
    const sumMap = {};
    // 遍历
    for(let i=0; i<nums.length; i++){  
        // 每次遍历的数      
        const num = nums[i];      
        // 目标值减去遍历值得到的补数
        const complement = target - num;   
        if(complement in sumMap){
            return [complement,num]
        }
        sumMap[num] = i;
    }
}

const nums = [1,2,3,4,5];
const target = 9;
const result = twoSum(nums,target);
console.log(result);
