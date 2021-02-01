export const DropChance = (rate, kills, amIDone) => {
    let result = 0.0

    result = (Math.pow((1-(1-1/rate)), kills) * 100)
    amIDone(true)
    return(
        result
    )
}

export default DropChance