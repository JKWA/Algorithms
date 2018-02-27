class InsertionSort{
    constructor(array){
        this.array = (array) ? array : [];
    }

    sort(){

        const array = this.array

        for(let i = 0; i<array.length; i++) {
            let tempValue = array[i];
            let j = i - 1;
            //start with i and itterate until finding a lesser value - or to first place
            while (j >= 0 && array[j] > tempValue) {
                array[j + 1] = array[j]; //move each value up one slot
                j--; //declinate
            }
            array[j + 1] = tempValue; //copy  selected value to fhe final slot
        }
        return array;
    }
}
module.exports = InsertionSort;