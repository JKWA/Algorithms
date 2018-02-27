
class MergeSort {

    constructor(input){
        this.array = (input) ? input : [];
    }

    addItem(item){
        this.array.push(item);
        return (this)
    }

    addArray(array){
        const newArray = this.array.concat(array);
        this.array = newArray.slice();
        return (this);
    }

    getArray(){
        return this.array;
    }

    print(){
        return console.log(JSON.stringify(this.array))
    }

    sort(){
        const arr = this.array;
        this.array = this._recursiveSort(arr).slice(0);
        return (this.array);
    }

    _recursiveSort(arr){

        if (arr.length < 2){
            return arr;
        }

        const middle = parseInt(arr.length / 2);
        const leftArray   = arr.slice(0, middle);
        const rightArray  = arr.slice(middle, arr.length);

        return this._merge(this._recursiveSort(leftArray), this._recursiveSort(rightArray));

    }
    
    _merge(leftArray, rightArray){
        const resultArray = [];

        //first merge 
        while (leftArray.length && rightArray.length) {
            if (leftArray[0] <= rightArray[0]) {
                resultArray.push(leftArray.shift());
            } else {
                resultArray.push(rightArray.shift());
            }
        }


        //then look for any left on right or left and push to result
        while (leftArray.length){
            resultArray.push(leftArray.shift());
        }
    
        while (rightArray.length){
            resultArray.push(rightArray.shift());
        }
    
        return resultArray;
    }
}

module.exports = MergeSort