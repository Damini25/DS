function powSetInLexOrder(s){
    return recur('',s);

    function recur(newStr , origStr){
        if(origStr === '') return newStr;
        let ch = origStr.charAt(0);
        console.log(newStr+ch);
        recur(newStr+ch, origStr.substring(1));
        recur(newStr, origStr.substring(1));
        return;
    }
    
}
console.log(powSetInLexOrder('abc'))

//a ab abc ac b bc c