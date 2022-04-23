/**
 * Trick- 
 * take with charAt 0 and without charAt 0
 * "eg"- "abc" => recur("a", "bc") and recur("", "bc");
 */

function findSubset(s) {
    let ans = [];

    function recur(p, up) {
        // processed, unprocessed
        if (up === "") {
            ans.push(p);
            return;
        }
        let ch = up.charAt(0);
        recur(p + ch, up.substring(1));
        recur(p, up.substring(1));
        return;
    }
    recur("", s);
    return ans;
}

// **** arr in function body ****

function findSubset(s) {

    function recur(p, up) {
        let ans = [];

        if (up === "") {
            ans.push(p);
            return ans;
        }

        let ch = up.charAt(0);
        const left = (recur(p + ch, up.substring(1)));
        const right = (recur(p, up.substring(1)));
        return left.concat(right)
    }
    return recur("", s);
}

// **** findSubset ASCII character ****

function findSubset(s) {

    function recur(p, up) {
        let ans = [];

        if (up === "") {
            ans.push(p);
            return ans;
        }

        let ch = up.charAt(0);
        const a = (recur(p + ch, up.substring(1)));
        const b = (recur(p, up.substring(1)));
        const c = (recur(p+ ch.charCodeAt(0) , up.substring(1))); /// ch+0 to get ASCII

        return a.concat(b,c);
    }
    return recur("", s);
}

