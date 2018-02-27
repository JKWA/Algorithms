class BubbleSort{
    constructor(array){
        this.array = (array) ? array : [];
    }

    sort(){
        const array = this.array;

        for (var i=0; i<array.length; i++){    
            //look ahead for the next number
            for (let j=i+1; j<array.length; j++){
   
                if(array[i] > array[j]){
                    
                    //swap left and right places
                    let tempItem = array[i];
                    array[i] = array[j];
                    array[j] = tempItem
                }
            }
        }
        return array;
     }
}
module.exports = BubbleSort;