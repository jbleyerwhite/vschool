const isValidIP = str => {
    // const valid = str.split(".").map((IP) => {
    //     console.log(IP)
    //     if (IP <= 255 && IP >= 0) {
    //         return IP
    //     }
    // })

    const valid = []
    str.split(".").map((IP) => {
        if (IP <= 255 && IP >= 0) {
            valid.push(IP)
        }
    })

    if (valid.join(".") === str && valid.length === 4) {
        return `${str} IS a valid IP address`
    } else {
        return `${str} is NOT a valid IP address.`
    }
}