
export const Killcount = (rate, kills, dropamount) => {
    let iteration = 0
    let receivedDrops = 0

    while (receivedDrops < dropamount){

        let firstRandom = Math.floor(Math.random() * rate)
        let secondRandom = Math.floor(Math.random() * rate)

        if (firstRandom === secondRandom){
            receivedDrops++
        }
        iteration++
    }
   
    return(
        iteration
    )

}

export default Killcount