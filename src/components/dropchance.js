export const DropChance = (rate, kills, amIDone) => {
    let result = 0.0
    let midresult = 0.0
    let toBePowed = 1-1/rate

    midresult = (Math.pow(toBePowed, kills))
    result = 1 - midresult
    result = result.toFixed(7) * 100
    amIDone(true)
    return(
        result
    )
}

export default DropChance