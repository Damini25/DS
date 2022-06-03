// My JavaScript code

function getList(codeList, cart) {
    let i = 0;
    let j = 0;
    while (i < cart.length && j < codeList.length) {
        const group = codeList[j];
        let k = 0;
        const prevCartInd = i; //save the previous cartindex
        while (k < group.length && i < cart.length) {
            if (cart[i] === group[k] || group[k] === "anything") {
                k++;
            } else {
                k = 0;
            }
            i++;
        }
        if (k === group.length) {
            j++;
        } else {
            i = prevCartInd + 1;
        }
    }
    return j === codeList.length ? 1 : 0;
}

// **************Inputs *****************************

const codeList1 = [
    ["apple", "apple"],
    ["banana", "anything", "banana"],
];
const shoppingCart1 = [
    "orange",
    "apple",
    "apple",
    "banana",
    "orange",
    "banana",
];
const codeList2 = [
    ["apple", "apple"],
    ["banana", "anything", "banana"],
];
const shoppingCart2 = ["banana", "orange", "banana", "apple", "apple"];
const codeList3 = [
    ["apple", "apple"],
    ["banana", "anything", "banana"],
];
const shoppingCart3 = [
    "apple",
    "banana",
    "apple",
    "banana",
    "orange",
    "banana",
];
const codeList4 = [
    ["apple", "apple"],
    ["apple", "apple", "banana"],
];
const shoppingCart4 = ["apple", "apple", "apple", "banana"];
const codeList5 = [
    ["apple", "apple"],
    ["banana", "anything", "banana"],
];
const shoppingCart5 = [
    "orange",
    "apple",
    "apple",
    "banana",
    "orange",
    "banana",
];
const codeList6 = [
    ["apple", "apple"],
    ["banana", "anything", "banana"],
];
const shoppingCart6 = [
    "apple",
    "apple",
    "orange",
    "orange",
    "banana",
    "apple",
    "banana",
    "banana",
];
const codeList7 = [
    ["anything", "apple"],
    ["banana", "anything", "banana"],
];
const shoppingCart7 = [
    "orange",
    "grapes",
    "apple",
    "orange",
    "orange",
    "banana",
    "apple",
    "banana",
    "banana",
];
const codeList8 = [
    ["apple", "orange"],
    ["orange", "banana", "orange"],
];
const shoppingCart8 = [
    "apple",
    "orange",
    "banana",
    "orange",
    "orange",
    "banana",
    "orange",
    "grape",
];
const codeList9 = [
    ["anything", "anything", "anything", "apple"],
    ["banana", "anything", "banana"],
];
const shoppingCart9 = ["orange",
    "apple",
    "banana",
    "orange",
    "apple",
    "orange",
    "orange",
    "banana",
    "apple",
    "banana",
];

console.log(getList(codeList1, shoppingCart1));
console.log(getList(codeList2, shoppingCart2));
console.log(getList(codeList3, shoppingCart3));
console.log(getList(codeList4, shoppingCart4));
console.log(getList(codeList5, shoppingCart5));
console.log(getList(codeList6, shoppingCart6));
console.log(getList(codeList7, shoppingCart7));
console.log(getList(codeList8, shoppingCart8));
console.log(getList(codeList9, shoppingCart9));
