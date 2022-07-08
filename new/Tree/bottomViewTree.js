//Link- https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/
function bottomView(root)
    {
        if(!root) return [];
        //your code here
        let q = [{curr:root, level:0}];
	    let map = {0:[root.data]};
    	while(q.length){
    	    
    		    let {curr, level} = q.shift();
    		    
    		    if(map.hasOwnProperty(level)){
        				map[level].push(curr.data);
                     }else{
                        map[level]=[curr.data];
                }
                     
        		if(curr.left){
        // 			if(map.hasOwnProperty(level-1)){
        // 				map[level-1].push(curr.left.data);
        //             }else{
        //                 map[level-1]=[curr.left.data];
        //             }
                  //  map[level-1]=curr.left.data;
                    q.push({curr: curr.left, level: level-1});
                }

    		    if(curr.right){
        // 			if(map.hasOwnProperty(level+1)){
        // 				map[level+1].push(curr.right.data);
        //              }else{
        //                 map[level+1]=[curr.right.data];
        //              }
                  //   map[level+1]=curr.right.data;
        
                    q.push({curr: curr.right, level: level+1});
                }
            }

           let keys = Object.keys(map).sort((a,b)=>Number(a)-Number(b)); 
           let result = [];
           
            for(let i=0;i<keys.length;i++){
              let curr = map[keys[i]]
              result.push(curr[curr.length-1]);
            }
            
            return result;
    }