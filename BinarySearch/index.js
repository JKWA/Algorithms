class BinarySearch {
    constructor(){

    };

     search(array, x) {
        let left = 0;
        let right = array.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right)/2);
            if(array[mid] === x){
                return mid;
            }else if (x <array[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return false;
    }
}
module.exports = BinarySearch;