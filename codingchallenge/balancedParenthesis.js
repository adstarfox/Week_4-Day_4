
//How I did it---------------------------
const has_balanced_parens = str => {
    let newStr = ``
    for (let i = 0; i < str.length; i++){
        if (str[i].includes(`(`) || str[i].includes(`)`)){
            newStr += str[i]
            // console.log(newStr)
        }
    }
    let newSet = new Set(newStr)
    let test = [...newSet].join(``)
    // console.log(test)


    if (test.charAt(0).includes(`)`) || test.length === 1){
        return false
    }else if (test.length === newStr.length || test.length === 0){
        return true
    }else{
        return false
    }
}

//Possible better way to do it -----------------------
const balanced = str => {
    // let open = 0
    // let closed = 0
    let parenCount = 0

    for(let i = 0; i < str.length; i++){
        if(str[i] === `(`){
            parenCount++
        }else if (str[i] === `)`){
            parenCount--
        }
    }

    if(parenCount < 0){
        return false
    }
    return parenCount === 0
}










// console.log(has_balanced_parens(")()))"))
console.log(has_balanced_parens("()"))
console.log(has_balanced_parens("(Oh Noes!)("))
console.log(has_balanced_parens("((There's a bonus open paren here.)"))
console.log(has_balanced_parens(")"))
console.log(has_balanced_parens("("))
console.log(has_balanced_parens("(This has (too many closes.) ) )"))
console.log(has_balanced_parens("Hey...there are no parens here!"))