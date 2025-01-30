function count(){
    let value = 0;

    return {
        increment: function() {
            return value++;
        },
        decrement: ()=>{
            return value--;
        },
        getValue: function() {
            return value;
        }
    }
}
let counter = count()
counter.increment()
console.log(counter.getValue());