//Use the try, catch, and finally with a function to catch errors you manually 'throw'

function getFour (sum1, sum2){
    try{
        if(sum1 + sum2) === 4){
            return "Great job!"
        } else {
        
            throw "That is not good"
    }
        } catch(error) {
        console.log("Your error is:" + error)
    } finally {
    console.log("This function should equal 4")
}
}
console.log(getFour(7,2))
