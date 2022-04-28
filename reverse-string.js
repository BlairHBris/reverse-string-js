export function reverse(string) {
    let newString = ''

    for (let i = string.length - 1; i >= 0; i--) {
        newString = newString + string[i]
    }

    return newString
}

export function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}
