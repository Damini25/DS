const data = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  
  const tdata = [
    [1,4,7],
    [2,5,8],
    [3,6,9]
  ];
  
  function createTable(m,n){
    const btn = document.createElement("button");
    btn.setAttribute("id", "get-transpose-btn");
    btn.innerHTML = "Get transpose";
    btn.style.marginTop = "10px";
    btn.addEventListener('click',createTransposeTable);
    
    
    const table = document.createElement("table");
    table.setAttribute("id", "data-table");
    table.style.border = "1px solid black";
    
    //create thead
    /**
    const tr = document.createElement("tr");
    for(let i=0;i< n;i++){
      const th = document.createElement("th");
      th.innerHTML = "tHead_"+i;
      tr.appendChild(th);
    }
    table.appendChild(tr);
    **/
    
    //create row and columns
    for(let i=0;i< m;i++){
      const tr = document.createElement("tr");
      tr.setAttribute("id", "tr_" + i);
    
      for(let j=0;j< n;j++){
        const td = document.createElement("td");
        const content = document.createElement("div");
        content.innerHTML = data[i][j]
        
        td.appendChild(content);
        td.setAttribute("id", "td_" + j);
        tr.appendChild(td);
      }
      table.appendChild(tr)
    }
    
    // append table to DOM 
    const main = document.getElementById("main") ;
    main.appendChild(table)
    main.appendChild(btn)
  }
  
  function createTransposeTable(){
    const table = document.getElementById("data-table");
    const rows = table.getElementsByTagName("tr");
    
    let i = 0;
    let newRows = []; // create transpose array
    
    while(i < rows.length ){
      const cols = rows[i].getElementsByTagName("td");
      let j = 0;
       while(j < cols.length ){
        if(!newRows[j]){
          newRows[j] = document.createElement("tr");
          newRows[j].setAttribute("id", "tr_" + j);
        }
          const newCol = document.createElement("td");
          newCol.innerHTML = cols[j].innerHTML;
          newRows[j].appendChild(newCol) 
          j++;
       }
      i++;
    }
   
    const rowLen = rows.length;
    
    // delete existing rows
    for(let i=0;i<rowLen;i++){
      document.getElementById("tr_"+i).remove();
    }
    
    // add new rows
    for(let i=0 ;i<newRows.length;i++){
      table.appendChild(newRows[i]);
    }
    
  }
  createTable(3,3);  