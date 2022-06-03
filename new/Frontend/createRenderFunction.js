const _elem = {
    div: [
        {
           "@class":"header",
           "@id": "header-id",
           "#text": "Header"
        },
        {
            "@class":"main-content",
            "@id": "main-content-id",
            h4 :{
                "#text": "Main Content"
            },
            div: {
                "@class":"desc",
                 p:{
                     "#text":'Hello My name is Damini'
                 },
                 button:{
                     "@class":'click-me-btn',
                     "#text":'Click Me'
                 }
            }
        },
        {
           "@class":"footer",
           "@id": "footer-id",
           "#text": "Footer"
        }
    ]
};


function render(domElem){
        for(let i in domElem){
        
            const elem = document.createElement(i);  

            if(typeof domElem[i] === "string"){ // if value type is string
               
                elem.innerHTML = domElem[i];
                
            }else if(domElem[i].constructor === Array){  // // if value type is array
                for(let j = 0; j<domElem[i].length; j++) {
                 
                    const _arrObj = { [i]: domElem[i][j] };
                    const arrayElem= render(_arrObj);
                    elem.appendChild(arrayElem)
                }
            }else{  // if value type is object
                 for(let j in domElem[i]){
                     if(j === "@class"){
                        elem.setAttribute("class", domElem[i][j])
                    }else if(j === "@id"){
                        elem.setAttribute("id", domElem[i][j]);
                    }else if(j === "#text"){
                        elem.innerHTML = domElem[i][j];
                    }else{
                         elem.appendChild(render({[j]: domElem[i][j]}));
                    }
                 }
            }
      return elem;
    }
};

const result = render(_elem)
console.log("result",result);

document.getElementById("root").appendChild(result);
