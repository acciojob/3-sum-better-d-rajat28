function threeSum(arr, target) {
// write your code here
	arr.sort((a,b) => a-b);
	var closestsum = 1000000000;
	for(var i = 0; i < arr.length-2;i++){
		var l = i+1;
		var r = arr.length-1;
		while(l < r){
			var sum = arr[i] + arr[l] + arr[r];
			if((Math.abs(target-sum)) < (Math.abs(target-closestsum))){
				closestsum = sum;
			}
			if(sum > target){
				r--;
			}else{
				l++;
			}
		}
	}
  return closestsum;
}

module.exports = threeSum;
