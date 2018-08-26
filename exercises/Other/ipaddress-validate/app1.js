const isValidIP = str => {
    const valid = str.split(".").map((IP) => {
        console.log(IP)
        if (IP <= 255 && IP >= 0) {
            return IP
        }
    })
    if (valid.join(".") === str && valid.length === 4) {
        return `${str} IS a valid IP address`
    } else {
        return `${str} is NOT a valid IP address.`
    }
}


console.log(isValidIP("172.16.254.1.50"))
console.log(isValidIP("abc.16.254.1"))
console.log(isValidIP("2.192.254.0"))
console.log(isValidIP("500.16.400.1"))