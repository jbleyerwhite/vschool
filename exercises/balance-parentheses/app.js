const parGroups = str => {
    const stack = str.split('').filter(val => val === '(' || val === ')')
    let even = str.split('(').length === str.split(')').length
    let balanced = stack.every((val, i, arr) => {
      return (arr[0] === ')' || arr[arr.length - 1] === '(' || !even) ? false :  true
    })
    return balanced
  }