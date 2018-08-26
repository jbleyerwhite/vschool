function validateIP(attemp){

    const isFourLong = attempt.split(".").length === 4
    const inRange = attempt.split(".").every(segment => {
        return segment >= 0 && segment <= 255
    })
        return isFourLong && inRange
}

console.log(validateIp("172.16.254.1")) //true
console.log(validateIP("300.16.254.1")) //1st segment out of range
console.log(validateIP("0.0.0.255")) //true