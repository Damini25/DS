const input = document.querySelector("input");
const ul = document.querySelector("ul");
const repo = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
input.addEventListener("input", function onInputChange(e) {
    const value = e.target.value;

    while (ul.firstChild) {
        ul.firstChild.remove();
    }

    if (value.length >= 2) {
        const list = getList(value);
        console.log(list);
        for (let i = 0; i < list.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = list[i];
            ul.appendChild(li);
        }
    }
});

function getList(value) {
    let list = [];
    for (let i = 0; i < repo.length; i++) {
        const matchInd = repo[i].match(value);
        if (matchInd && matchInd.index === 0) {
            list.push(repo[i]);
        }
    }

    list.sort();
    return list.slice(0, 3);
}
