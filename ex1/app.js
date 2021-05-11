const numberReduce = (number) =>{
    const reducer = (total, currentValue) => parseInt(total) + parseInt(currentValue)
    while(true){
        let arrNumbers = number.toString().split('')
        number = arrNumbers.reduce(reducer)
        if (arrNumbers.length === 1){
            break;
        }
    }
    console.log(number)
}

numberReduce(9875)



