class SelectionSort{
    constructor(array){
        this.array = (array) ? array : [];
    }

    sort(){

        var array = this.array
    
        for (var i=0; i < array.length; i++){
            let min = i;
    
            //iterate through the rest of the array looking for smaller number
            for (var j=i+1; j < array.length; j++){
                if (array[j] < array[min]){
                    //find the smaller number the furthest away
                    min = j;
                }
            }
    
            //if there was a smaller number, then switch
            if (i != min){
                this._switch(array, i, min);
            }
        }
    
        return array;
    }

    _switch(items, left, right){
        var tempItem = items[left];
        items[left] = items[right];
        items[right] = tempItem;
    }


}
module.exports = SelectionSort;