//mirrortree
class Node{
	constructor(data){
		this.data=data;
		this.left=null;
		this.right=null;
	}
}

class BinaryTree{
	constructor(data){
		this.root=data;
	}
}

let node= new Node(1);
node.left= new Node(3);
node.right= new Node(2);
node.right.left= new Node(5);
node.right.right= new Node(4);
let tree=new BinaryTree(node);

console.log('node',node);

function createMirror(curr){
	let temp=[];
	let visited=[];
	while(curr){
	console.log(curr,temp,visited)
		while(curr.right && visited.indexOf(curr.right.data)===-1){
			temp.push(curr);
			visited.push(curr.data)
			curr=curr.right;
		}
	
		if(curr.left && visited.indexOf(curr.left.data)===-1){
				curr=curr.left;
		}
			
		if(curr.right && visited.indexOf(curr.right.data)!==-1 && curr.left && visited.indexOf(curr.left.data)!==-1){
				let x=curr.left;
				curr.left=curr.right;
				curr.right=x;
				temp.pop();
				if(temp.length){
					curr=temp[temp.length-1];
				}else{
					return curr;
				}
		}
		
		if(!curr.left && !curr.right){
		console.log('in!curr,!l!R',curr,temp,visited);
			visited.push(curr.data);
			curr=temp[temp.length-1];
		}
	}
	return curr;
}
createMirror(node);
--------------------------------------------
class LNode{
	constructor(data){
		this.data=data;
		this.next=null;
	}
}
class LinkedList{
	constructor(node){
		this.head=null;
		this.tail=null;
	}
	insertNode(data){
		let lNode=new LNode(data);
		if(!this.head){
			this.head=lNode;
			return this;
		}
		return this.insertNodeAtEnd(this.head,lNode)
	}
	
	insertNodeAtEnd(curr,node){
		if(!curr.next){
			curr.next=node;
			curr=curr.next;
			curr.next=null;
			return this;
		}
		while(curr.next){
			curr=curr.next;
			this.insertNodeAtEnd(curr,node);
		}
	}
	
	deleteAlt(curr){
		while(curr){
			if(curr.next){
				curr.next=curr.next.next ? curr.next.next : null;
				curr=curr.next;
			}
		}
	}
}
let list=new LinkedList()
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);
list.insertNode(5);
list.insertNode(6);
console.log('list',list);
list.deleteAlt(list.head);
console.log('list',list);
---------------------------------------
//find binary gap
let res;
function solution(N) {
    res=[];
    const bin = findBinary(N);
   return findGap(bin)
}

function findBinary(n){
	if(n>=1){
		res.unshift((n%2));
		findBinary(Math.floor(n/2))
	}8
	return res;		
}

function findGap(n){
	let c=0;
	let num=0;
	let flag=false;
	for(let i=0;i<n.length;i++){
		if(n[i]===1 && !flag){
			flag=true;
		}else if(n[i]===1 && flag){
			num=c > num ? c : num;
			c=0;
		}else if(n[i]===0 & flag){
			c=c+1;
		}
	}
	return num;
}
---------------------------------------------
//find missing integer
function findSmallestInteger(A) {
  A.sort();
  console.log(A);
   let min = 1
   for (let i = 0; i < A.length; i++) {
     if (A[i]===min) {
       min++;
     }
   }
   return min;

-----------------------
//rotate array n times
function solution(A,K){
	let i=K;
	while(i>0){
	rotateArr(A)
	i=i-1;
	}
return A;
}

function rotateArr(A){
    let x=A[0];
    for(let i=0;i<A.length;i++){
		if(i!==A.length-1){
			let y= A[i+1];
			A[i+1]=x
			x=y;
		}else{
			A[0]=x;
		}
	}
	return A;
}
--------------------------------------
//find odd occurances
function createMap(A){
	let obj={};
	for(let i=0;i<A.length;i++){
		if(!obj[A[i]]){
			obj[A[i]]=1;
		}else{
			obj[A[i]]=obj[A[i]]+1;
		}
	}
	console.log('obj',obj);
	
	for(i in obj){
		if((obj[i])%2 !==0){
			return i;
		}
	}
}
------------------------------------
function findSteps(x,y,d){
	let diff=y-x;
	let mod=diff%d;
	let div=Math.floor(diff/d);
	return !mod ? div : div+1 ;
}
-------------------------------
function minDiff(A){
	let diff;
	let csum=0;
	let totalSum=A.reduce((t,v)=>t+v,0);
	
	for(let p=0;p<A.length;p++){
		csum = csum + 2(A[p]);
		
		let d= Math.abs(totalSum-csum);
		diff= (diff !==null || diff!==undefined ) && diff < d ? diff : d;
	}
	return diff;
}


function sumArray(A){
	let sum=0;
	for(let i=0;i<A.length;i++){
		sum=sum+A[i];
	}
	return sum;
}
//////////

function minDiff(A){
	let diff;
	let p=1;
	while(p< A.length){
		let sum1 = sumArray(A,0,p);
		let sum2 = sumArray(A,p,A.length);
		let d= Math.abs(sum1-sum2);
        console.log(sum1,sum2,d,p);
		diff= (diff !==null || diff!==undefined ) && diff < d ? diff : d;
		p=p+1;
	}
	return diff;
}




function sumArray(A,s,e){
	let sum=0;
	for(let i=s;i < e ; i++){
		sum=sum+A[i];
	}
	return sum;
}
---------------------
/// max counter
function findCount(A,N){
  let C=new Array(N);
  C.fill(0);
  let max=0;
  for(let i=0;i<A.length;i++){
    for(let j=1;j<=N;j++){
       if(A[i]===j){
         C[j-1]=C[j-1]+1;
         max=max>C[j-1]?max:C[j-1];
       }
       else if(A[i]===N+1){
         C.fill(max);
       }
    }
   // console.log('C',C,max)
  }
  console.log('C',C,max);
  return C ;
}
findCount([3,4,4,6,1,4,4],5);
-----------------------------
//frog river cross
function solution(A,X) {
    let B = [],
        leaves_remaining = X
    
    for(let i in A) {
      leave_position = A[i]
      if(!B[leave_position-1]) {
        B[leave_position-1] = A[i]
        leaves_remaining--
        if (leaves_remaining === 0) {
          return parseInt(i)
        }    
      }   
    }
    return -1
}
-----------------------------------
//Perm check

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr= A.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==i+1){
            return 0;
        }
    }
    return 1;
}
------------------------------------
//count div
function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
     if(!A&&!B){return 1;}
	  let s1= A>=K? Math.floor(A/K):0;
	  let s2=Math.floor(B/K);
	  let x=A%K===0?1:0;
  return (s2-s1)+x;
}
---------------------------------
//DNA problem
function solution(S,P,Q){
  let t=[];
  for(let i=0;i<P.length;i++){
      console.log('findImp',findImpact(S,P[i],Q[i]))
      t.push(findImpact(S,P[i],Q[i]))
  }
  return t;
}

function findImpact(a,s,e){
  //console.log(s,e)
  let obj={
    A:1,C:2,G:3,T:4
  }
  let min=obj[a[s]];
  if(min===1){
    return min;
  }
  for(let i=s+1;i<=e;i++){
    min=obj[a[i]] < min ? obj[a[i]] :min
  }
  return min;
}
function findImpact(a,s,e){
  let obj={
    A:1,C:2,G:3,T:4
  }
  if(obj[a[s]] ===1 || obj[a[e]] ===1){
    return 1;
  }
  let len = s >= e ? s - e + 1 : e - s + 1;
  let aa=a.substr(s,len).split('').sort();
  return obj[aa[0]];
}
----------------------
//MinAvgTwoslice
let min=Number.MAX_VALUE;
let pos=0;

function solution(A){
  for(let i=0;i<A.length-2;i++){
    process((A[i]+A[i+1])/2,i);
    process((A[i]+A[i+1]+A[i+2])/3,i);
  }
  process((A[A.length-2]+A[A.length-1])/2,A.length-2);
  return pos;
}

function process(val,minpos){
  if(val<min){
    min = val;
    pos=minpos;
  }
  return min;
}
------------------------------
// passing cars
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let ncount=0;
    let count=0;
    for(let i=A.length-1;i>=0;i--){
        if(A[i]===1){
            ncount=ncount+1;
        }else if(A[i]===0){
            count=count+ncount;
             if(count >1000000000){
                 return -1;
                }
        }
    }

    return count;
}
------------------------------
// nested string
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let t=[];
  for (let i=0;i<S.length;i++){
    if(S[i] === "(" || S[i] === "["|| S[i] === "{"){
      t.push(S[i]);
    }else if(S[i] === ")" || S[i] === "]"|| S[i] === "}"){
        let x=t.pop() + S[i];
        if(x!="()" && x!="[]" && x!="{}"){
          return 0;
        }
    }
  }
 return t.length===0 ? 1:0;
}
------------------------------
//fish problem
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack=[];
     let c=B.length;
     for(let j=0;j<B.length;j++){
       if(B[j]===1){
         stack.push(A[j]);
       }
       else if(B[j]===0){
        while(stack.length>0){
            if(stack[stack.length-1]>A[j]){
               c=c-1;
              break;
            }else if(stack[stack.length-1]<A[j]){
               c=c-1;
              stack.pop();
            }
        }
       }
 }
 return c;
}
-----------------------------
//stonewall skyline
function solution(H) {
  let stack=[H[0]];
  let count=0;
  for(let i=1;i<H.length;i++){
    console.log('start',stack,H[i],count)
    if(H[i]<stack[stack.length-1]){
        count=count+1;
        stack.pop();
          while(stack.length && stack[stack.length-1]>=H[i]){
            if(stack[stack.length-1]>H[i]){
              count=count+1;
              stack.pop();
            }else if(stack[stack.length-1]==H[i]){
              stack.pop();
            }
          }
        stack.push(H[i]);
        
    }else if(H[i]>stack[stack.length-1]){
        stack.push(H[i]);
    }
    console.log('in',stack,H[i],count)
  }
  return count+stack.length;
}

console.log('ss',solution([8,8,5,6,9,8,7,4,8]))
--------------------------------------
//find distinct values
function solution(A){
  let obj={};
  let c=0;
  for(let i=0;i<A.length;i++){
    if(!obj[A[i]]){
      c=c+1;
      obj[A[i]]=1;
    }
  }
  return c;
}
------------------------------------
//disc intersections
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let obj={};
    let c=0;
    for(let i=0;i<A.length;i++){
      let spoint=i-A[i];
      let epoint=i+A[i];
      for(let j=i+1;j<A.length;j++){
        let cspoint=j-A[j];
        let cepoint=j+A[j];
       if(A[i]<A[j]?checkCommon(spoint,epoint,cspoint,cepoint):checkCommon(cspoint,cepoint,spoint,epoint)){
          c=c+1;
        }
      }    
    }
   // console.log(obj,c)
    return c;
}


function checkCommon(s,e,cs,ce){
  if((cs<=s && ce>=s)|| (cs<=e && ce>=e)){
    return true;
  }
  return false;
}
-------------------------------------
//equileader
function solution(A){
  let c=0;
  for(let i=0;i<A.length;i++){
     // console.log('i',i,checkForEqualSeq(i,A))
      if(checkForEqualSeq(i,A)){
        c=c+1;
      }
  }
  return c;
}

function checkForEqualSeq(i,A){
  //console.log('in seq check',findLeader(0,i,A),findLeader(i+1,A.length-1,A))
  if((i+1)<A.length && findLeader(0,i,A)!==null && findLeader(i+1,A.length-1,A)!==null && findLeader(0,i,A) === findLeader(i+1,A.length-1,A)){
    return true;
  }
  return false;
}

function findLeader(s,e,A){
  let len=Math.ceil(((e-s)/2))+1;

  let obj={};
  let leadObj={'lead':null,'count':null};
  if(s===e){
    leadObj.lead=A[s];
    leadObj.count=1;
  }
  for(let i=s;i<=e;i++){
    if(obj[A[i]]){
      obj[A[i]]=obj[A[i]]+1;
      if(leadObj.count<obj[A[i]]){
        leadObj.lead=A[i];
        leadObj.count=obj[A[i]]
      }
    }else{
      obj[A[i]]=1;
    }
  }
 //console.log('kkl',leadObj,len)
  return leadObj.count>=len?leadObj.lead:null;
}
console.log('resu',solution([0,0]))
--------------------------------------------
//find leader

function solution(A){
  let len=Math.floor(A.length/2)+1;
  let obj={};
  for(let i=0;i<A.length;i++){
    if(obj.hasOwnProperty(A[i])){
      obj[A[i]].count=obj[A[i]].count+1;
      obj[A[i]].index.push(i);
      if(obj[A[i]].index.length>=len){
        return obj[A[i]].index[0];
      }
    }else{
      obj[A[i]]={
        "count":1,
        "index":[i]
      }
       if(obj[A[i]].index.length>=len){
        return obj[A[i]].index[0];
      }
    }
  }
  return -1;
}
-------------------------------------
function solution(A){
}
  let max = A[0]+A[1] > A[0] ? A[0]+A[1]:A[0];
  for(let i=1;i<A.length;i++){
    if(A[i]>max){
      max=A[i];
    }else if((A[i]+A[i+1])>max){
      max=A[i]+A[i+1];
    }
  }
return max;
}
--------------------------------------
function solution(A){
  let max = A[0];
  for(let i=0;i<A.length;i++){
     if(A[i]>max){
        max=A[i];
      }
    for(let j=i+1;j<A.length;j++){
      let sum= A.slice(i,j+1).reduce((a,b)=>a+b)
      if(sum > max){
        max= sum;
      }
    }
  }
return max;
--------------------------------
//max slice problem
function solution(A){
  let max = A[0];
  let sub=A[0];
  for(let i=1;i<A.length;i++){
      sub=Math.max(sub+A[i],A[i]);
      max=Math.max(sub,max);
  }
return max;
}
--------------------------
//maxProfit
function solution(A){
  let low = A[0];
  let profit=0;
  for(let i=1;i<A.length;i++){
      low = Math.min(low,A[i]);
      if(low!==A[i]){
        profit = profit > A[i]-low ? profit : A[i]-low;
      }
  }
return profit > 0 ? profit:0;
}
-------------------------------------------
//rotate matrix by 90 degree clockwise
function findReverse(A){
  if(A.length){
    let j=A.length-1;
    for(let i=0;i<j;i++){
      if(i!==j){
        let temp=A[i];
        A[i]=A[j];
        A[j]=temp;
        j--;
      }
    }
  }
  return A;
}

function rotate90Clock(M){
  for(let i=0;i<M.length;i++){
    for(let j=i;j<M.length;j++){
      let temp=M[i][j];
      M[i][j]=M[j][i];
      M[j][i]=temp;
    }
    findReverse(M[i]);
  }
  return M;
} 
console.log(rotate90Clock([[1,2,3],[4,5,6],[7,8,9]]))
----------------------------------------------------
//anticlockwise matrix 90
function rotate90Clock(M){
  for(let i=0;i<M.length;i++){
    for(let j=i;j<M.length;j++){
      let temp=M[i][j];
      M[i][j]=M[j][i];
      M[j][i]=temp;
    }
  }

  return findReverse(M);
}
--------------------------------
///max possible sum
function maxPossibleSum(A){
  let max=A[0];
  let sub=A[0];
  for(let i=1;i<A.length;i++){
    sub=Math.max(sub+A[i],A[i]);
    max=Math.max(sub,max);
  }
  return max;
}
---------------------------------
//Rain water trapped
function rainWaterTrapped(A){
  let flag=false;
  let stack= A[0] ? [A[0]]:[];
  let pitfall=0;
  let prev=A[0];
  let prevInd=0;
  let water=0;

 for(let i=1;i<A.length;i++){
  // console.log('in firstA[i],stack,pitfallmaxz',A[i],stack,pitfall,max);
    if(prev < A[i]){
        prev=A[i];
        prevInd=i;
        water=0;
    }else{
      pitfall=pitfall+(prev-A[i]);
      water=water+(prev-A[i]);
    }
 }
  if(prevInd<A.length-1){
     pitfall=pitfall-water;
     prev=A[A.length-1];
    for(let i= A.length-1;i>=prevInd;i--){
      if(A[i]>=prev){
        prev=A[i];
      }else{
        pitfall=pitfall+(prev-A[i]);
      }
    }
  }

 return pitfall;
}
console.log(rainWaterTrapped([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
------------------------------------------------------------------
//maximum rectangle in histogram
O(n2)--function solution(A){
  let area=A[0];
  for(let i=0;i<A.length;i++){
    let currWid=1;
    let p=i+1;
    if(A[p]>=A[i]){
      while(A[p]>A[i]){
        currWid=currWid+1;
        p++;
      }
    }
    let b=i-1;
    if(A[b]>=A[i]){
      while(A[b]>=A[i] && b>=0){
      currWid=currWid+1;
      b--;
      }
    }
    //console.log('subarea',A[i],currWid,A[i]*currWid)
    area=Math.max(area,A[i]*currWid);
  }
  return area;
}
console.log(solution([2,1,5,6,2,3]))
-------------------------------------
O(n)

function solution(A){
  let area=A[0];let subarea=A[0];
  let stack=[0]
  for(let i=1;i<A.length;i++){
    let curr=A[i];
    if(curr <A[stack[stack.length-1]]){
          while(curr<A[stack[stack.length-1]]){
             let ind = stack.pop();
             if(stack.length){
               brd=i-stack[stack.length-1]-1;
             }else{
               brd=i-ind
             }
             subarea=A[ind]*brd;
             area=Math.max(area,subarea)
          }
    }else{
      stack.push(i);
    }
     console.log('stack',stack,area)
  }
  if(stack.length){
    area=Math.max(area,A[stack[0]]*stack.length)
  }
  return area;
}
console.log(solution([2,1,5,6,2,3]))
---------------------------
function solution(A,B){
  let out=[];
  if(B>A.length){
    A.sort((a,b)=>a-b);
    return A[A.length-1];
  }else{
      for(let i=0;i<=A.length-B;i++){
      let max=A[i];
      let j=i+1;
      while(j<i+B){
        max=max>A[j]?max:A[j];
        j++;
      }
      out.push(max);
    }
  }
  return out;
}
console.log(solution([1, 3, -1, -3, 5, 3, 6, 7],6))
-------------------------------------------------
function solution(A,B){
  let out=[];
  let max=findMax(A,B+1);
  out.push(max);
  if(B>A.length){
    return findMax(A,A.length);
  }else{
     for(let i=1;i<=A.length-B;i++){
       max=A[(B+i)-1]>out[out.length-1]?A[(B+i)-1]:max;
       console.log('ini',A[i],max,out)
       out.push(max);
    }
  }
  return out;
}
function findMax(A,L){
  let max=A[0]
  for(let i=1;i<L;i++){
	  max=max>A[i]?max:A[i];
  }
  return max;
}
console.log(solution([1, 3, -1, -3, 5, 3, 6, 7],3))
-------------------------------------------------------------
//Design Stack
let Stack= new Array();
console.log('stack',Stack);

Array.prototype.push=function(elem){
  Stack.length=Stack.length+1;
  Stack[Stack.length-1]=elem;
  return Stack;
}
Array.prototype.pop=function(){
  if(Stack.length){
    //let poppedItem=Stack.splice([Stack.length-1],1)
    let poppedItem=Stack[Stack.length-1]
    Stack.length--;
    return poppedItem;
  }
  return;
}
Array.prototype.top=function(){
  if(Stack.length){
    let topItem=Stack[Stack.length-1]
    return topItem;
  }
  return -1;
}
Array.prototype.getMin=function(){
  if(Stack.length){
    let min=Stack[0];
    for(let i=1;i<Stack.length;i++){
       min=min<Stack[i]?min:Stack[i];
    }
    return min;
  }
  return -1;
}
-------------------------------
//check Duplicate exists
function repeatedNumber(A){
  let obj={};
  for(let i=0;i<A.length;i++){
   if(obj[A[i]]){
     dupExist=true;
     obj[A[i]]=obj[A[i]]+1;
     return A[i];
   }else{
     obj[A[i]]=1;
   }
  }
  return -1 ;
}
------------------------------

function spiralOrder(A){
  let L=0 , R=A[0].length-1, T=0, B=A.length-1;
  let i=0, j=0,out=[];dir=0
  while(L<=R && T<=B){
    console.log(L,R,T,B)
   if(dir===0){
     while(j<=R){
        out.push(A[i][j]);
        j++;
     }
     console.log('out1',out)
     T=T+1;
     j=j-1;
     i=i+1;
    console.log('LR',i,j)
    while(i<=B){
        out.push(A[i][j]);
        i++;
     }
     console.log('RB',out)
     i=i-1;
     j=j-1;
    console.log('RB',i,j);
    R=R-1;
    while(j>=L){
        out.push(A[i][j]);
        j--;
     }
     j=j+1;
     i=i-1;
     B=B-1;
     console.log('BL',i,j)
   }
   while(i>=T){
     out.push(A[i][j]);
      i--;
   }
   L=L+1;
   j=j+1;
   i=i+1;
   console.log('outend',out)
   console.log('BLL',i,j)
  }
  return out;
}
console.log('result',spiralOrder([[1,2]]))
----------------------
//spiralOrder
function spiralOrder(A){
  let L=0 , R=A[0].length-1, T=0, B=A[0].length-1;
  let out=[];

  while(L<=R && T<=B){
    console.log(L,R,T,B)
    for(let i=L;i<=R;i++){
      out.push(A[L][i]);
    }
    T=T+1;
  console.log('top',out)
    for(let i=T;i<=B;i++){
      out.push(A[i][R]);
    }
    R=R-1;
console.log('right', out)
    for(let i=R;i>=L;i--){
      out.push(A[B][i]);
    }
    B=B-1;
console.log('bottom', out)
  for(let i=B;i>=T;i--){
      out.push(A[i][L]);
    }
   L=L+1;
   console.log('left', out)
  }
  return out;
}
console.log('result',spiralOrder([ 
    [1,  2,  3,   4],
    [5,  6,  7,   8],
    [9,  10, 11,  12],
    [13, 14, 15,  16]  
]))
--------------------------
// unsorted subarray
function findSortedSubArray(A){
  let i=1, j=A.length-2,prev=0, rightprev=A.length-1 ,brk;
  let right,left,min,max;
  while(i<=A.length-1 && j>=0){
      if(A[prev]<=A[i]){
        i++;
        prev++;
      }else{
        brk=i;
        break;
      } 
  }
    while(A[rightprev]>=A[j]){
       j--;
       rightprev--; 
      }
      right=rightprev;
      min=A[brk-1];
      max=A[brk-1]
      for(let k=brk;k<=right;k++){
          min=A[k]<min?A[k]:min;
          max=A[k]>max?A[k]:max;
      }
    console.log('min,max',brk,min,max);
    for(let l=0;l<brk;l++){
      if(A[l]>min){
          left=l;
          break;
      }
    }
    for(let r=A.length-1;r>brk;r--){
      if(A[r]< max){
          right=r;
          break;
      }
    }
  console.log('left,right',left,right)
  return (left>=0 && right>=0)?[left,right]:-1
}
//console.log('res',findSortedSubArray([ 1,3,2,4]))
//console.log('res',findSortedSubArray([ 3, 3, 4, 5, 5, 9, 11, 13, 14, 15, 15, 16, 15, 20, 16]))
//console.log('res',findSortedSubArray([ 1, 1, 10, 10, 15, 10, 15, 10, 10, 15, 10, 15]))
//console.log('res',findSortedSubArray([ 1, 2, 2, 3, 3, 5, 6, 6, 14, 17, 18, 17, 18, 15, 15, 17, 19, 14, 19, 18]))
console.log('res',findSortedSubArray([ 16, 6, 18, 17, 13, 6, 18, 16, 6, 15, 15, 18, 16, 13, 16, 16, 6, 18, 15, 15 ]))
-------------------------------------------
function findAbsDiff(i,j,A){
  return Math.abs(A[i-1] - A[j-1]) + Math.abs(i - j);
}
function solution(A){
  let max=findAbsDiff(1,1,A);
  let N=A.length;
    for(let i=1;i<=N;i++){
      for(let j=i;j<=N;j++){
        max=findAbsDiff(i,j,A)>max?findAbsDiff(i,j,A):max;
        console.log('i',i,j,max)
      }
    }
  return max
}
console.log(solution([1, 3, -1]));
-------------------------------------
function findAbsDiff(i,j,A){
  return Math.abs(A[i-1] - A[j-1]) + Math.abs(i - j);
}
function solution(A){
  let max1=A[0]+0;
  let max2=A[0]+0;
  let min1=A[0]-0;
  let min2=A[0]-0;
  let N=A.length;
    for(let i=0;i<N;i++){
      max1=Math.max(max1,A[i]+i)
      min1=Math.min(min1,A[i]+i)
      max2=Math.max(max2,A[i]-i)
      min2=Math.min(min2,A[i]-i);
    }
  return Math.max(max1-min1,max2-min2);
}
--------------------------------------
//find wave a1 >= a2 <= a3 >= a4 <= a5
function wave(A){
  A.sort((a,b)=>a-b);
  console.log(A)
  for(let i=0;i<=A.length-2;i=i+2){
      if(!(A[i]>=A[i+1])){
        let temp=A[i+1];
        A[i+1]=A[i];
        A[i]=temp
      }
  }
  return A;
}

console.log(wave([5,3,2,4,6,10,11,2]));
console.log(wave([6, 17, 15, 13]))
-------------------------------------
//find Permutations
function findPerm(A) {
  //console.log('a',A)
  if (A.length === 1) { return A };
  if (A.length === 2) { return [A, [A[1], A[0]]] }
  return A.reduce((acc, item, i) =>{
    return acc.concat(
      findPerm([...A.slice(0, i), ...A.slice(i + 1)]).map(val => [item, ...val]))
  },[])
}
console.log(findPerm([1, 2, 3, 4]));
-----------------------------------------
//Find Next Permutations
function findPerm(A) {
//break//insert//revrse
  let prev=A.length-1;
  let i;
  for(i=A.length-2;i>=0;i--){
    if(A[i]<A[prev]){
      break;
    }
    prev--;
  }
  for(let j=A.length-1;j>=prev;j--){
    if(A[j]>A[i]){
      let temp=A[j];
      A[j]=A[i];
      A[i]=temp;
      break;
    }
  }
  let p=prev;
  for(let k=A.length-1;k>=p;k--){
    if(k!==p){
      let temp=A[k];
      A[k]=A[p];
      A[p]=temp;
    }
    p++;
  }
  return A;
}
console.log(findPerm([0,1, 2, 5,3,3,0]));
console.log(findPerm([1,2,4,3]));
console.log(findPerm([4,3,2,1]));
---------------------------------------
//maximum gap A[i]<=A[j]===j-1
O(n*n)
function maximumGap(A) {
  let B=[...A];
  B.sort((a,b)=>a-b);
  console.log('B',B)
  let i = 0; let j = A.length - 1; let len = A.length - 1; let p = 0;
  while (len > 0) {
    for (let k = i; k <= p; k++) {
     // console.log('len',len,p,A[k],A[len+k])
      if (A[k] <= A[len + k]) {
        return len;
      }
    }
    len--;
    p++;
  }
  return 0;
}
console.log(maximumGap([10, 4, 3, 11, 1, 1, 5]));
---------------------------------------
O(n)
function maximumGap(A) {
  let minA=new Array(A.length);
  let maxA=new Array(A.length);
  minA[0]=A[0];
  maxA[maxA.length-1]=A[A.length-1];
  for(let i=1;i<A.length;++i){
    minA[i]=Math.min(A[i],minA[i-1])
  }
  for(let i=A.length-2;i>=0;--i){
    maxA[i]=Math.max(A[i],maxA[i+1])
  }
  let p=0,q=0 ,maxDiff=-1;n=A.length
  while(p<n&&q<n){
    if(minA[p]<=maxA[q]){
      maxDiff=Math.max(maxDiff,q-p);
      q=q+1;
    }else{
      p=p+1;
    }
  }
  console.log('lminn',minA,maxA);
  return maxDiff;
}
console.log(maximumGap([10, 4, 3, 11, 1, 1, 2])); 
--------------------------------------
//median of array
function medianArr(A, B) {
  let tLen = (A.length + B.length);
  let n = Math.floor(tLen / 2);
  let i = 0; j = 0
  let C = [];
  while (C.length <= n) {
    console.log(C, C.length, i, j)
    if (A[i] && B[j]) {
      if (A[i] < B[j]) {
        C.push(A[i]);
        i = i + 1;
      } else if (A[i] > B[j]) {
        C.push(B[j]);
        j = j + 1;
      } else {
        C.push(A[i]);
        C.push(B[j]);
        i = i + 1;
        j = j + 1;
      }
    } else {
      if (A[i]) {
        C.push(A[i]);
        i = i + 1;
      } else {
        C.push(B[j]);
        j = j + 1;
      }
    }
  }
  console.log(C)
  return tLen % 2 === 0 ? (C[C.length - 1] + C[C.length - 2]) / 2 : C[C.length - 1];

}
console.log(medianArr([1, 4, 5], [2]))
--------------------------------------------
//find square root
function sqRoot(A) {
  let n = Math.floor(A / 2);
  let n1 = Math.floor(n / 2);
  if (A === 0) { return 0; }
  if (A === 1 || A===2||A===3) { return 1; }
  if (n1 * n1 > A) {
    for (let j = 1; j < n1; j++) {
     return checkRoot(j, A)
    }
  } else {
    for (let j = n1; j < n; j++) {
     return checkRoot(j, A)
    }
  }
  return 0;
}
function checkRoot(i, A) {
  while (i) {
    if (i * i === A) {
      return i;
    } else if ((i * i) > A) {
      return i - 1;
    } else {
      i++;
    }
  }
}
console.log(sqRoot(3))
----------------------------------
// Rotated array search

function rotatedArrSearch(A, B) {
  let i = 0, n = A.length - 1;
  let mid;
  while (i !== n) {
    mid = Math.floor((i + n) / 2);
    console.log('mid', mid);
    if (A[mid] === B) {
      return mid;
    } else if (B < A[mid]) {
      if (B>=A[i]) {
        n = mid - 1;
      }else{
        i=i+1;
      }
    } else if (B > A[mid]) {
      if(B<=A[n]){
        i = mid + 1;
      }else{
        n=n-1;
      }
    }
  }
  if (A[i] === B) {
    return i;
  }
  return -1;
}

console.log('res', rotatedArrSearch([4, 5, 6, 7, 0, 1, 2, 3], 7)) 
-----------------------------------------------------
function checkPalind(A) {
				let j = A.length - 1, i = 0;
              let flag = false;
              while (i !== j && i < A.length && j > 0) {
                //console.log(i, j)
                if (A[i] === A[j]) {
                  i++;
                  j--;
                } else {
                  if (!flag) {
                      if(j===i+1){
                        return 1;
                      }
                    if (A[i] === A[j - 1]) {
                      flag = true;
                      j--;
                    } else if (A[i + 1] === A[j]) {
                      flag = true;
                      i++;
                    }else { return 0; }
                  } else {
                    return 0;
                  }
                  i++;
                  j--;
                }
              }
              return 1;
}
console.log('res', checkPalind('abecbea'))
--------------------------------------
function anagrams(A) {

   let arr = [];
      let out = {};
      for (let i = 0; i < A.length; i++) {
        let item = A[i].split('').sort().join('');
        if (!out[item]) {
          out[item] = [i+1];
        } else {
          out[item].push(i+1);
        }
      }
      for (let i in out) {
          arr.push(out[i])
      }
      return arr;
}
console.log('res', anagrams(["cat", "dog", "god", "tca"])); 
----------------
O(n3)
function threeSum(A, B) {
  let i = 0, j = 1;
  let sum = A[i] + A[j] + A[j + 1];
  let newS = sum;
  j = j + 1;
  console.log('ff', sum)
  while (i < A.length - 1) {
    if (sum === B) {
      return sum;
    }
    console.log('i,j', i, j, sum)
    while (j < A.length - 1) {
      let k = j + 1;
      while (k < A.length) {
        newS = A[i] + A[j] + A[k];
        if (newS === B + 1 || newS === B - 1 || (newS >= B && newS < sum) || (newS <= B && newS > sum)) {
          sum = newS;
        }
        k=k+1;
      }
      j = j + 1;
      console.log('s,ns', sum, newS);
    }
    i = i + 1;
    j = i + 1;
  }
  console.log('sum', sum);
  return sum;
}
console.log('res', threeSum([2, -3, -3, 0, 1], 0))
//-3,-3,0,1,2
------------------------------
O(n2)
function threeSum(A, B) {
  if (A.length < 3) { return -1; }
  if (A.length === 3) { return A[0] + A[1] + A[2]; }
  A.sort((a, b) => a - b);
  let sum = A[0] + A[1] + A[A.length - 1];
  let newS = sum;
  for (let i = 0; i < A.length - 2; i++) {
    let j = i + 1;
    let k = A.length - 1;
    while (j !== k) {
      console.log('i,j,k', i, j, k)
      newS = A[i] + A[j] + A[k];
      if (newS === B) {
        return B;
      } else if (newS < B) {
        j++;
      } else if (newS > B) {
        k--;
      }
    }
    if (newS === B + 1 || newS === B - 1 || (newS > B && newS < sum) || (newS < B && newS > sum)) {
      sum = newS
    }
  }
  return sum;
}
console.log('res', threeSum([-1, 2, 1, -4], 1))
-4,-1,1,2
-----------------
//remove duplicates
function removeDuplicates(A) {
  let i = 0;
  let j = i + 1;
  while (i < A.length && j < A.length) {
    if (A[i] === A[j]) {
      A.splice(i, 1);
      j=i+1;
    } else {
     i++;
     j++;
    }
  }
  return A;
}
console.log('res', removeDuplicates([0,1,1,2,2,2,2,3,4,5,6,6,7]))
-------------------------------
//swap linked list pair
function Node(data) {
  this.data = data
  this.next = null
}

function swapPairs(A) {
  if (!A.next) {
    return A;
  }
  let curr = A;
  while (curr.next) {
    let temp = curr.next.data;
    curr.next.data = curr.data;
    curr.data = temp;
    if (curr.next.next) {
      curr = curr.next.next;
    } else {
      return A;
    }
  }
  return A;
}
let n = new Node(1)
n.next = new Node(2)
n.next.next = new Node(3)
n.next.next.next = new Node(4)
console.log('node', n);
console.log('swap', swapPairs(n));
--------------------------
//k largest element
function solve(A,B) {
  A.sort((a, b) => a - b);
  let out = [];

  for (let i = A.length - 1; i >= A.length-B; i--) {
    out.push(A[i])
  }
  return out;
}
console.log('re',solve([725, 479, 359, 963, 465, 706, 146, 282, 828, 962],2))
--------------------------------
function Node(data) {
  this.data = data
  this.next = null
}

function mergeKLists(A) {
  console.log('A', A);
  let M;
  for (let i = 0; i < A.length - 1; i++) {
    let curr = A[i];
    while (curr.next) {
      curr = curr.next
    }
    curr.next = A[i + 1]
  }
  M = A[0];
  console.log('beforesort', M);
  let curr = M; let ptn = curr.next
  while (curr.next) {
    while (ptn.next) {
      if (ptn.data < curr.data) {
          let temp=curr.data;
          curr.data=ptn.data;
          ptn.data=temp;
          break;
      } else {
        ptn = ptn.next;
      }
    }
    curr = curr.next;
    ptn=curr.next;
  }
  console.log('aftersort',M)
}


let n1 = new Node(1)
n1.next = new Node(10)
n1.next.next = new Node(20)

let n2 = new Node(4)
n2.next = new Node(11)
n2.next.next = new Node(13)

let n3 = new Node(3)
n3.next = new Node(8)
n3.next.next = new Node(9)

// console.log('node1', n1);
// console.log('node2', n2);
// console.log('node3', n3);
console.log('res', mergeKLists([n1, n2, n3]))
-----------------------------
//sort 2D array
function sortArr(A) {
  let out = []
  if (A.length === 1) {
    return A[0];
  }
  if (A.length === 2) {
    let i = 0;
    let j = 0;
    let arr1 = A[0], arr2 = A[1];
    while (i < arr1.length && j < arr2.length) {
      console.log('ij', i, j, arr1[i], arr2[j])
      if (arr1[i] < arr2[j]) {
        out.push(arr1[i]);
        if (i === arr1.length - 1 && j === arr2.length - 1) {
          out.push(arr2[j]);
          return out;
        }
        i++;
      } else {
        out.push(arr2[j]);
        if (i === arr1.length - 1 && j === arr2.length - 1) {
          out.push(arr1[i]);
          return out;
        }
        j++;
      }
    }
    if (i < arr1.length - 1) {
      out.push(...arr1.splice(i, arr1.length - 1))
    } else if (j < arr2.length - 1) {
      out.push(...arr2.splice(j, arr2.length - 1))
    }
    console.log('out', out);
  } else if (A.length > 2) {
    let t = Math.floor(A.length / 2)
    let merge1 = sortArr(A.splice(0, t + 1))
    let merge2 = sortArr(A.splice(0, A.length))
    out = sortArr([merge1, merge2])
    console.log('merge3', merge1, merge2, out)
  }
  return out;
}
console.log('res', sortArr([[1, 10, 20], [4, 11, 13], [3, 8, 9]]))
------------------------------------------------
//Merge K Sorted LinkedList
function Node(data) {
  this.data = data
  this.next = null
}

function sortLinkedList(A) {
  let out = [];
  if (A.length === 1) {
    return A[0];
  } else if (A.length === 2) {
    let i = A[0], j = A[1];
    let last;
    while (i && j) {
      if (i.data < j.data) {
        if (out.length) {
          last.next = new Node(i.data);
          last = last.next;
        } else {
          out.push(new Node(i.data));
          last = out[out.length - 1];
        }
        i = i.next;

      } else if (i.data > j.data) {
        if (out.length) {
          last.next = new Node(j.data);
          last = last.next;
        } else {
          out.push(new Node(j.data));
          last = out[out.length - 1];
        }
        j = j.next;
      }
    }
    if (i) {
      last.next = i;
      i = i.next;
    } else {
      last.next = j;
      j = j.next;
    }
    return out[0];
  } else if (A.length > 2) {
    let t = Math.floor(A.length / 2)
    let merge1 = sortLinkedList(A.splice(0, t + 1))
    let merge2 = sortLinkedList(A.splice(0, A.length))
    out = sortLinkedList([merge1, merge2])
    console.log('in three',out)
  }
}

let n1 = new Node(1)
n1.next = new Node(10)
n1.next.next = new Node(20)

let n2 = new Node(4)
n2.next = new Node(11)
n2.next.next = new Node(13)

let n3 = new Node(3)
n3.next = new Node(8)
n3.next.next = new Node(9)

// console.log('node1', n1);
// console.log('node2', n2);
// console.log('node3', n3);
//console.log('nodes', [n1, n2, n3])
console.log('res', sortLinkedList([n1, n2, n3]))
-------------------------------------------
//LRU
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtBeg(data) {
    let node = new Node(data);
    //console.log('te', data, this.head)
    if (!this.head) {
      this.head = node;
      this.endNode = this.head.data;
      // console.log('this.ehad', this.head)
      return this;
    } else {
      let temp = this.head;
      this.head = node;
      node.next = temp;
      return this;
    }
  }
  deleteFromLinkedList(data) {
    if (!this.head) {
      return null;
    } else {
      let curr = this.head;
      if (this.head.data === data) {
        this.head = curr.next;
        return this;
      }
      while (curr.next) {
        if (curr.next.data === data) {
          curr.next = curr.next.next;
          if (!curr.next) { this.endNode = curr.data; }
          return this;
        }
        curr = curr.next;
      }
    }
  }
  deleteFromEndLinkedList() {
    if (!this.head) {
      return null;
    } else {
      let curr = this.head;
      if (!curr.next) {
        this.head = null;
        this.endNode = null;
        return null;
      }
      while (curr.next) {
        if (!curr.next.next) {
          this.endNode = curr.data;
          curr.next = null;
          return this;
        }
        curr = curr.next;
      }
    }
  }

}

function LRU(capacity) {
  return {
    endNode: null,
    list: new LinkedList(),
    obj: {},
    set: function (key, val) {
      if (!this.obj[key]) {
        if (Object.keys(this.obj).length < capacity) {
          this.obj[key] = val;
          this.list.insertAtBeg(key);
        } else {
          if (Object.keys(this.obj).length === 1) {
              this.obj={};
          } else {
            console.log('this.endndoe',)
            delete this.obj[this.list.endNode];
          }
          this.list.deleteFromEndLinkedList();
          this.list.insertAtBeg(key);
          this.obj[key] = val;
        }
      } else {
        this.list.deleteFromLinkedList(key);
        this.list.insertAtBeg(key);
        this.obj[key] = val;
      }
    },
    get: function (key) {
      if (this.obj[key]) {
        this.list.deleteFromLinkedList(key);
        this.list.insertAtBeg(key);
        return this.obj[key];
      } else {
        return -1;
      }
    }
  }
}
----------------------------------------
//:LRU
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor(cap) {
    this.head = null;
    this.tail = null;
    this.obj = {};
    this.limit = null;
    this.cap = cap;
  }

  insertAtBeg(data,val) {
    let node = new Node(data);
    //console.log('te', data, this.head)
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.obj[data] = {
          data:val,
          node:node
        };
      this.limit = 1;
      return this;
    } else {
      if (this.limit < this.cap) {
        let temp = this.head;
        this.head = node;
        node.next = temp;
        node.next.prev = node;
        this.obj[data] = {
          data:val,
          node:node
        };
        this.limit = this.limit + 1;
        return this;
      }
    }
  }

  deleteItem(node) {
    if(!node.prev && !node.next){
      this.head=null;
      this.tail=null;
      this.limit=null;
      return this;
    }
    if (!node.prev) {
      this.head = this.head.next;
      this.head.prev = null;
      this.limit--;
      return this;
    }
    if (!node.next) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.limit--;
      return this;
    }
    if (node.prev && node.next) {
      node.prev.next = node.next;
      node.next.prev=node.prev;
      this.limit--;
      return this;
    }
  }
}

function LRU(capacity) {
  return {
    list: new LinkedList(capacity),
    set: function (key, val) {
      if (!this.list.obj[key]) {
        if (this.list.limit < capacity) {
         // this.obj[key] = val;
          this.list.insertAtBeg(key,val);
        } else {
          delete this.list.obj[this.list.tail.data]
          this.list.deleteItem(this.list.tail);
          this.list.insertAtBeg(key,val);
        }
      } else {
        this.list.deleteItem(this.list.obj[key].node);
        this.list.insertAtBeg(key,val);
        //this.obj[key] = val;
      }
    },
    get: function (key) {
      if (this.list.obj[key]) {
        let val=this.list.obj[key].data;
        this.list.deleteItem(this.list.obj[key].node);
        this.list.insertAtBeg(key,val);
        return this.list.obj[key].data;
      } else {
        return -1;
      }
    }
  }
}
let test = new LRU(4);
test.set(2, 1);
test.set(1, 1);
test.set(2, 3);
test.set(4, 1);
test.set(12,9);
test.set(7,9);
console.log(test.get(1));
console.log(test.get(21));
console.log('test', test.list)
------------------------------------------
//Distinct Numbers in Window O(n2)
function dNums(A, B) {
  let out = [];
  if (B > A.length) {
    return [];
  }
  for (let i = 0; i < A.length - B + 1; i++) {
    out.push(findDistinctCount(A, i, i + B - 1));
  }
  return out;
}

function findDistinctCount(A, s, e) {
  let obj = {};
  let count = 0;
  for (let i = s; i <= e; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
      count = count + 1;
    }
  }
  return count;
}
console.log('res', dNums([1, 2, 1, 3, 4, 3], 3))
------------------------------------------
//Distinct Numbers in Window O(n)
function dNums(A, B) {
  let out = [];
  let obj = {};
  if (B > A.length) {
    return [];
  }
  for (let i = 0; i < B; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]] = obj[A[i]] + 1
    }
  }
  out.push(Object.keys(obj).length);
  let j = B;
  let prev = A[0];
  for (let i = 1; i < A.length - B + 1; i++) {
    if (obj[prev]) {
      if (obj[prev] === 1) {
        delete obj[prev]
      } else {
        obj[prev] = obj[prev] - 1;
      }
    }

    if (!obj[A[j]]) {
      obj[A[j]] = 1;
    } else {
      obj[A[j]] = obj[A[j]] + 1;
    }
    prev = A[i];
    j = j + 1;
    out.push(Object.keys(obj).length)
  }
  return out;
}
console.log('res', dNums([31, 51, 31, 51, 31, 31, 31, 31, 31, 31, 51, 31, 31], 3))
------------------------------------------------



function chainPair(A) {
  let count = 1;
  let sm = A[0];
  let arr = [A[0]];
  for (let i = 1; i < A.length; i++) {
    if (A[i][0] > arr[arr.length-1][1]){
      arr.push(A[i]);
    }else if(A[i][0] > sm[1]){
      arr.pop()
      arr.push(A[i]);
    }
  }
return arr;
}
console.log('res', chainPair([[5, 24], [39, 60], [15, 28], [27, 40], [50, 90]]))
--

function chainPair(A) {
  let count = 1;
  let sm = A[0];
  let arr = [A[0]];
  for (let i = 1; i < A.length; i++) {
    if (A[i][0] > arr[arr.length - 1][1]) {
      console.log('in 1')
      arr.push(A[i]);
    } else if (A[i][0] > sm[1]) {
      console.log('in 2')
      arr.pop()
      arr.push(A[i]);
    }
  }
  return arr;
}
console.log('res', chainPair([[98, 894],[397, 942], [70, 519],[258, 456],[286, 449],
  [516, 626],[370, 873], [214, 224],[74, 629],[265, 886], [708, 815],[394, 770],[56, 252],
]))

--------------------
function findSmallestInteger(A) {
  A.sort();
  console.log(A);
  let outStr = ""
  let prev = A[A.length - 1];
  for (let i = A.length - 2; i >= 0; i--) {
    let str = ""
    let pair1 = str + A[i] + prev;
    let pair2 = str + prev + A[i];
    console.log(pair1, pair2)
    if (pair1 > pair2) {
      prev = prev;
      outStr = outStr + A[i];
    } else {
      outStr = outStr + prev;
      prev = A[i];
    }
  }
  return outStr + prev == 0 ? '0' : outStr + prev;
}
console.log(findSmallestInteger([6,60,603,604]))



// console.log(concatenatePair(12, 121))
// console.log(concatenatePair(8, 89))
// console.log(concatenatePair(8, 86))
//console.log(findSmallestInteger([12, 121]))
//console.log(findSmallestInteger([8, 89]))
------------------------------------
function chainPair(A) {
  let i = 0;
  let count = 0;

  while (i <= A.length - 1) {
    let j = i + 1;
    let curr = A[i][1];
    let arr=[A[i]];
    while (j <= A.length - 1) {
      if (A[j][0] > A[i][1] && A[j][0] < curr) {
        arr.pop();
        arr.push(A[j]);
        curr=A[j][1];
      }
      if (A[j][0] > curr) {
        curr = A[j][1];
        arr.push(A[j])
      };
      j++;
    }
    // console.log('in j loop',A[i],arr)
    i++;
    count=Math.max(arr.length,count)
  }
  return count;
}
console.log('res', chainPair([[5, 24], [39, 60], [15, 28], [27, 40], [50, 90]]))
-------------------------------------
function findMaxProfit(A, B) {
  let i;
  let profit = 0;
  let sm = A[0];

  for (i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
      sm = A[i];
      break;
    }
  }
  let j = i + 1;
  let bg = A[j];
  while (A[j] > sm) {
    bg = Math.max(A[j], bg);
    j++;
  }
  profit = profit + (bg - sm);
  // while (j !== i + 1) {
  //   console.log('i,j', i, j)
  //   if (A[i] < sm) {
  //     sm = A[i];
  //   }
  //   if (A[j] > bg) {
  //     bg = A[j];
  //   }
  //   i++;
  //   j--;
  // }
  console.log('sm,bg', sm, bg);
}
console.log('res', findMaxProfit([3, 2, 5, 6, 0, 3], 2))
-----------
function findMaxProfit(A, B) {
  let i = 0; let j = 0;
  let profit = 0;
  let sm = A[0];

  while (B > 0 && j < A.length-1) {
    while (i < A.length - 1) {
      if (A[i] < A[i + 1]) {
        sm = A[i];
        break;
      }
      i++;
    }
    j = i + 1;
    let bg = A[j];
    while (A[j] > sm) {
      bg = Math.max(A[j], bg);
      j++;
    }
    profit = profit + (bg - sm);
    B--;
    i = j;
    console.log('sm,bg', sm, bg, 'profit ' + profit, i, j);
  }
  return profit;
}
console.log('res', findMaxProfit([3, 2, 6, 5, 0, 3], 2))
-------------------
function findMaxProfit(A, B) {
  let profit = 0;
  if (B === 1) {
    return findProfit(A, 0, A.length - 1);
  }else{
    
  }
}

function findProfit(A, s, e) {
  let bg, sm;
  let smi = s;
  for (let i = s; i < e; i++) {
    if (A[i] < A[i + 1]) {
      if (!sm) { sm = A[i] } else {
        sm = Math.min(sm, A[i])
        smi = i
      };
    }
  }
  for (let i = smi; i < e; i++) {
    if (A[i] < A[i + 1]) {
      if (!bg) { bg = A[i + 1]; } else { bg = Math.max(bg, A[i + 1]) }
    }
  }
  return bg - sm ? bg - sm : 0;
}
console.log('res', findMaxProfit([16, 11, 11, 16, 17, 3, 20], 2))
----------------
function findMaxProfit(A, B) {
  let profit = 0;
  let arr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i + 1] > A[i]) {
      arr.push(A[i + 1] - A[i]);
    }
  }
  arr.sort((a, b) => b - a);
  console.log('arr',arr);
  if (B === 1) {

  } else {
    for (let i = 0; i < B; i++) {
      profit=profit+A[i]
    }
  }
  return profit;
}
console.log('res', findMaxProfit([16, 11, 11, 16, 17, 3, 20], 3))
console.log('res', findMaxProfit([6, 8, 16, 1, 17, 12, 20], 3))
console.log('res', findMaxProfit([6, 8, 16, 1, 17, 12, 16], 3))
-------------------
function findMaxDifference(A) {
  let maxProfit = 0;
  let profit = 0;
  let min = A[0];
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i + 1] > A[i]) {
      profit = A[i + 1] - min;
    }
    min = Math.min(min, A[i + 1]);
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}
console.log('res', findMaxDifference([0, 8, 16, 1, 17, 12, 19]))-
-------------
//final concluded
function findMaxProfit(A, B) {
  let i;
  let profit = 0;
  let maxProfit = 0;
  for (i = 0; i < A.length; i++) {
    profit = Math.max(profit, findMaxOneProfit(A, 0, i) + findMaxOneProfit(A, i + 1, A.length - 1))
    maxProfit = Math.max(profit, maxProfit);
  }
  return profit;
}

function findMaxOneProfit(A, s, e) {
  let maxProfit = 0;
  let profit = 0;
  let min = A[s];
  for (let i = s; i < e; i++) {
    if (A[i + 1] > A[i]) {
      profit = A[i + 1] - min;
    }
    min = Math.min(min, A[i + 1]);
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}
console.log('res', findMaxProfit([10, 22, 5, 75, 65, 80], 2))
-------------------------------------------
O(n2)// Hotel Bookings Possible
function hotel(A, B, C) {
  let obj = {}
  for (let i = 0; i < A.length; i++) {
    for (let j = A[i]; j < B[i]; j++) {
      if (!obj.hasOwnProperty(j)) {
        obj[j] = C - 1;
      } else {
        if(obj[j]===0){
          return 0;
        }
        obj[j] = obj[j] - 1;
      }
    }
  }
  console.log('obj', obj);
  return 1;
}
console.log('res', hotel([8, 7],[8, 10], 1))
-----------------------------------------------
Hotel Bookings Possible // O(nlogn)
function hotel(A, B, C) {
  let obj = {}
  let arr = [];
  let k = 0, max_active = 0
  for (let i = 0; i < A.length; i++) {
    if (B[i] !== A[i]) {
      arr.push([A[i], 1], [B[i], 0])
    } 
  }
  arr.sort((a, b) => {
    if(a[0]===b[0]){
      return a[1]-b[1];
    }else{
      return a[0]-b[0];
    }
  })
  console.log('objsorted', arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === 1) {
      k++;
    } else {
      k--;
    }
    if(k > C){
      return 0;
    }
  }
  return 1;
}
console.log('res', hotel(
  [ 35, 8, 23, 22, 35, 6, 48, 45, 33, 43, 37, 12, 42, 3, 31, 38, 5, 33, 15 ],
  [ 43, 32, 34, 46, 74, 50, 95, 62, 59, 79, 83, 19, 88, 34, 75, 42, 42, 50, 58], 11))
-------------------------------------------------------------------------------
// find Max leader
function findLeader(A) {
  let max = A[A.length - 1];
  let arr = [max];
  for (let i = A.length - 2; i >= 0; i--) {
    if (A[i] >= max) {
      arr.push(A[i]);
    }
    max=Math.max(max,A[i]);
  }
  return arr;
}
console.log('res', findLeader([1, 2]))
-------------------------------------------------------
function findPermutation(n, S) {
  let arr = [], res = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let s = 0, e = n - 1;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'I') {
      res.push(arr[s]);
      s++;
    } else {
      res.push(arr[e]);
      e--;
    }
  }
  res.push(arr[e]);
  return res;
}
console.log('res', findPermutation(3, 'DI'))
--------------------------------------------
// create largest number from array
   function largestNumber(A){
            A.sort((a, b) => {
            let ab = a+''+b;
            let ba = b+''+a;
            return ba-ab;
          });
         
          return  A.join('') - 0 === 0 ? '0' : A.join('');
         
    }
--------------------------------------

function TreeNode(data) {
  this.data = data
  this.left = null
  this.right = null
}

function levelOrder(A) {
  let arr = [[A.data]];
  let temp = [[A]];
  let curr = A;
  while (temp.length) {
    let curr = temp.shift();
    let subarr = [];
    let subarrData = []
    for (let i = 0; i < curr.length; i++) {
      if (curr[i].left && curr[i].right) {
        subarr.push(curr[i].left, curr[i].right);
        subarrData.push(curr[i].left.data, curr[i].right.data)
      } else if (curr[i].left) {
        subarr.push(curr[i].left)
        subarrData.push(curr[i].left.data)
      } else if (curr[i].right) {
        subarr.push(curr[i].right)
        subarrData.push(curr[i].right.data)
      }
    }
    if (subarr.length) {
      temp.push([...subarr]);
      arr.push([...subarrData]);
    }
  }
  return arr;
}
let node = new TreeNode(3);
node.left = new TreeNode(9);
node.right = new TreeNode(20);
node.left.left = new TreeNode(20);
node.left.right = new TreeNode(21);
node.right.left = new TreeNode(15);
node.right.right = new TreeNode(7);
console.log(node);
console.log('res', levelOrder(node));
-------------------------------------
// not solution
function knight(A, B, C, D, E, F) {
  let visited = [];
  let queue = [];
  let xnumbers = [-2, -2, -1, -1, 1, 1, 2, 2];
  let ynumbers = [-1, 1, -2, 2, -2, 2, -1, 1];
  queue.push([C, D, 0]);
  visited.push(C + '' + D);
  while (queue.length) {
    console.log('queue,visited', queue, visited)
    let curr = queue.shift();
    if (curr[0] === E && curr[1] === F) {
      console.log('path found')
      return curr[2];
    }
    for (let j = 0; j < xnumbers.length; j++) {
      let x = curr[0] + xnumbers[j];
      let y = curr[1] + ynumbers[j];
      if (x >= 0 && x <= A && y >= 0 && y <= B) {
        if (visited.indexOf(x + '' + y) === -1) {
          queue.push(x, y, curr[2] + 1)
        }
      }
    }

  }
  return -1
}
console.log('res', knight(4, 4, 1, 1, 4, 4));

function move(x, y, A, B) {
  let arr1 = [];
  console.log('in move', x, y, visited)
  if (x - 2 <= A && y - 1 <= B && x - 2 > 0 && y - 1 > 0) {
    console.log('test1', (x - 2, y - 1), visited.includes((x - 2, y - 1)));
    if (visited.includes((x - 2, y - 1)) === false) {
      arr1.push([x - 2, y - 1])
      visited.push((x - 2, y - 1))
    }
  }
  if (x - 2 <= A && y + 1 <= B && x - 2 > 0 && y + 1 > 0) {
    console.log('test2', (x - 2, y + 1), visited.includes((x - 2, y + 1)));
    if (visited.includes((x - 2, y + 1)) === false) {
      arr1.push([x - 2, y + 1])
      visited.push((x - 2, y + 1))
    }
  }
  if (x - 1 <= A && y - 2 <= B && x - 1 > 0 && y - 2 > 0) {
    console.log('test3', (x - 1, y - 2), visited.includes((x - 1, y - 2)));
    if (visited.includes((x - 1, y - 2)) === false) {
      arr1.push([x - 1, y - 2])
      visited.push((x - 1, y - 2))
    }
  }
  if (x - 1 <= A && y + 2 <= B && x - 1 > 0 && y + 2 > 0) {
    console.log('test4', (x - 1, y + 2), visited.includes((x - 1, y + 2)));
    if (visited.includes((x - 1, y + 2)) === false) {
      arr1.push([x - 1, y + 2])
      visited.push((x - 1, y + 2))
    }
  }
  if (x + 1 <= A && y - 2 <= B && x + 1 > 0 && y - 2 > 0) {
    console.log('test5', (x + 1, y - 2), visited.includes((x + 1, y - 2)));
    if (visited.includes((x + 1, y - 2)) === false) {
      arr1.push([x + 1, y - 2])
      visited.push((x + 1, y - 2))
    }
  }
  if (x + 1 <= A && y + 2 <= B && x + 1 > 0 && y + 2 > 0) {
    console.log('test6', (x + 1, y + 2), visited.includes((x + 1, y + 2)));
    if (visited.includes((x + 1, y + 2)) === false) {
      arr1.push([x + 1, y + 2])
      visited.push((x + 1, y + 2))
    }
  }
  if (x + 2 <= A && y - 1 <= B && x + 2 > 0 && y - 1 > 0) {
    console.log('test7', (x + 2, y - 1), visited.includes((x + 2, y - 1)));
    if (visited.includes((x + 2, y - 1)) === false) {
      arr1.push([x + 2, y - 1])
      visited.push((x + 2, y - 1))
    }
  }
  if (x + 2 <= A && y + 1 <= B && x + 2 > 0 && y + 1 > 0) {
    console.log('test8', (x + 2, y + 1), visited.includes((x + 2, y + 1)));
    if (visited.includes((x + 2, y + 1)) === false) {
      arr1.push([x + 2, y + 1])
      visited.push((x + 2, y + 1))
    }
  }
  console.log('arr1', x, y, arr1, visited)
  return arr1;
}
-----------------------------------------
//Knight On Chess Board solution
function knight(A, B, C, D, E, F) {
  let visited = {};
  let queue = [];
  let xnumbers = [-2, -2, -1, -1, 1, 1, 2, 2];
  let ynumbers = [-1, 1, -2, 2, -2, 2, -1, 1];
  queue.push([C, D, 0]);
  visited[C + '+' + D] = 1;
  while (queue.length) {
    console.log('queue,visited', queue, visited)
    let curr = queue.shift();

    if (curr[0] === E && curr[1] === F) {
      console.log('path found')
      return curr[2];
    }
    for (let j = 0; j < xnumbers.length; j++) {
      let x = curr[0] + xnumbers[j];
      let y = curr[1] + ynumbers[j];
      if (x >= 1 && x <= A && y >= 1 && y <= B) {
        if (!visited[x + '+' + y]) {
          queue.push([x, y, curr[2] + 1]);
          visited[x + '+' + y] = 1;
        }
      }
    }

  }
  return -1
}
console.log('res', knight(17, 14, 1, 5, 11, 4));
-------------------------------------------------
//Transform One String to Another using Minimum Number of Given Operation O(n2)
function transformString(S1, S2) {
  if (S1.length !== S2.length) {
    return -1;
  }
  let arr1 = S1.split('').sort(), arr2 = S2.split('').sort()
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log('Element not matches')
      return -1;
    }
  }

  let temp = S1;
  let count = 0;
  while (temp !== S2) {
    for (let i = temp.length - 1; i >= 0; i--) {
      if (temp[i] !== S2[i]) {
        temp = temp[i] + temp.substr(0, i) + temp.substr(i + 1);
        break;
      }
    }
    count++;
  }
  return count;
}
console.log('res', transformString('ABD', 'BAD'))
---------------------------------------------
//Transform One String to Another using Minimum Number of Given Operation O(n)
function transformString(S1, S2) {
  if (S1.length !== S2.length) {
    return -1;
  }
  let obj = {};
  for (let i = 0; i < S1.length; i++) {
    obj[S1[i]] = 1
  }
  for (let i = 0; i < S2.length; i++) {
    if (obj[S2[i]]) {
      obj[S2[i]] = obj[S2[i]] - 1;
    } else {
      return false;
    }
  }
  for (let i in obj) {
    if (obj[i] !== 0) {
      return false;
    }
  }
  let count = 0;
  let i = S1.length - 1, j = S2.length - 1;
  while (i >= 0) {
    if (S1[i] !== S2[j]) {
      while (i >= 0 && S1[i] !== S2[j]) {
        count++;
        i--;
      }
    } else {
      i--;
      j--;
    }
  }
  return count;
}
console.log('res', transformString('ABD', 'BAD'))
------------------------------------------
function transformString(S1, S2) {
  if (S1.length !== S2.length) {
    return -1;
  }
  let obj = {};
  for (let i = 0; i < S1.length; i++) {
    if (!obj[S1[i]]) {
      obj[S1[i]] = 1
    }
    else {
      obj[S1[i]] = obj[S1[i]] + 1;
    }
  }
 // console.log('in tes', obj)
  for (let i = 0; i < S2.length; i++) {
    if (obj[S2[i]]) {
      obj[S2[i]] = obj[S2[i]] - 1;
    }
  }

  for (let i in obj) {
    if (obj[i] !== 0) {
      return false;
    }
  }
 // console.log('in tes', obj)
  if (S1 !== S2 && S1 === sortSubstr(S1, 0, S1.length - 1)) {
    console.log('in tes', obj)
    return false;
  }
  let str = S1;
  let i = 0, j = 0;
  while (i <= S1.length - 1) {
   // console.log('str',str,i,j)
    if (str === S2) {
      return true;
    }
    if (str[i] !== S2[j]) {
      let p = i;
      while (p < S1.length - 1 && str[p] !== S2[j]) {
        p++;
      }
      str = str.substr(0, i) + sortSubstr(str, i, p) + str.substr(p + 1)
//console.log('strp',str,i,p)
    }
    i++;
    j++;
  }

  return str === S2;
}
//console.log('res', transformString('34521', '23415'))//23451
//console.log('res', transformString('84532', '34852'))//34582
console.log('res', transformString('848188', '818884')) //814888
function sortSubstr(str, i, j) {
  let temp = str[i];
  let min = str[i];
  for (let p = i + 1; p <= j; p++) {
    if (str[p] < min) {
      min = str[p];
      temp = str[p].concat(temp);
    } else {
      temp = temp.concat(str[p]);
    }
    //console.log(temp)
  }
  return temp;
}
----------------------------------
//transform string with delet elowe rcase and converting lowercase to upper case
function transformString(s1, s2) {
  let j = 0, i = 0;
  while (i < s1.length && j < s2.length) {
    if (s1[i].toLowerCase() !== s2[j].toLowerCase()) {
      i++;
    } else {
      s1 = s1.substr(0, i) + s1.charAt(i).toUpperCase() + s1.substr(i+1)
      j++;
      i++;
    }
  };

  s1=s1.replace( /[a-z]/g, '' );
   console.log(s1);
  if(s1===s2){
    return true
  }
  return false;
}
console.log('res', transformString('daBcd', 'ABC'))
------------------------------------
function canConvertString(s, t, k) {
  let obj = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15,
    p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  };
  let diffObj = {};
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      let diff = obj[t[i]] - obj[s[i]]
      if (diff >= 1 && diff <= k) {
        if (!diffObj[diff]) {
          diffObj[diff] = 1
        } else {
          diffObj[diff] = diffObj[diff] + 1
        }
      } else {
        return false;
      }
    }
  }
  console.log('diff', s, diffObj);
  for (let i in diffObj) {
    if (i >= 1 && i <= k && diffObj[i] === 1) {
      flag = true;
    } else if (k > 25 && k % 26 == i) {
     diffObj[i]=diffObj[i]-1;
    } else {
      flag = false;
    }
  }
  return flag;
}
console.log('res', canConvertString('input', 'ouput', 9))
// console.log('res', canConvertString('abc', 'bcd', 9))
// console.log('res', canConvertString('aab', 'bbb', 27))
--------------------------------------------
//Implement strstr
function strStr(A, B) {
  if (!A.length || !B.length) {
    return -1;
  }
  let i = 0, k = 0,
    j = 0;
  let ind = -1;

  while (i < A.length) {
    if (A[i] === B[j]) {
      if (ind === -1) {
        ind = i;
         k=i;
      }
    
      j++;
      i++;
    } else if (j > 0 && A[i] !== B[j]) {
      j = 0;
      ind = -1;
      i=k+1;
    } else {
      i++;
    }
      if(j>B.length-1){
        return ind;
      }
    //console.log('2nd', i, j,k)
  }

  return j < B.length ? -1 : ind;
}
console.log(strStr("aabbbabbab", "bba" ));
-------------------------------------------
//evaluate prefix expression
console.log('res', convertToInfix('* + 2 x y', { "x": 2, "y": 3 }))
function convertToInfix(expression, variables) {
    let stack = [];
    let str = "";
    let exp=expression.split(' ');
    for (let i = exp.length - 1; i >= 0; i--) {
            if ((exp[i] !== '')) {
                if (exp[i] === '+' || exp[i] === '-' || exp[i] === '*' || exp[i] === '/') {
                    if (stack.length < 2) {
                       // console.log('ll')
                        return null
                    }
                    let op1 = stack.pop();
                    let op2 = stack.pop();
                    str = '(' + op1 + exp[i] + op2 + ')';
                  str=Math.floor(eval(str))
                 // console.log('half',str)
                    stack.push(str);
                } else {
                    if (!(exp[i]).match('^[1-9][0-9]*$')) {
                        //console.log('in regex', exp[i])
                        if(variables[exp[i]]){ stack.push(variables[exp[i]]);}else{return null}
                       
                    } else {
                        stack.push(exp[i]);
                    }
                }
             
        }
    }
    if (stack.length > 1) {
        return null
    }
    let result = stack.pop();
    return (result);
}
----------------------------------------------

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function addTwoNumbers(l1, l2) {
    let out;
    let last = out;
    let i = l1, j = l2;
    let carry = 0;
    while (i || j) {
        console.log('out', out)
        let sum = i && j ? carry + i.val + j.val : i ? carry + i.val : carry + j.val;
        carry = 0;
        if (sum > 9) {
            carry = Math.floor(sum / 10);
            if (!out) {
                out = new ListNode(sum % 10);
                last = out;
            } else {
                last.next = new ListNode(sum % 10, null);
                last = last.next;
            }
        } else {
            if (!out) {
                out = new ListNode(sum, null);
                last = out;
            } else {
                last.next = new ListNode(sum);
                last = last.next;
            }
        }

        i = i ? i.next : '';
        j = j ? j.next : '';

    }
    if (carry) { last.next = new ListNode(carry) }
    return out;
}
let n1 = new ListNode(2);
n1.next = new ListNode(4);
n1.next.next = new ListNode(3);

let n2 = new ListNode(5);
n2.next = new ListNode(6);
n2.next.next = new ListNode(4);

console.log(addTwoNumbers(n1, n2))
-----------------------------------------------------
//longest-substring-without-repeating-characters
function lengthOfLongestSubstring(s){
    let obj={};
    let len=0,i=0;;
    while(i<s.length){
        if(!obj.hasOwnProperty(s[i])){
          obj[s[i]]=i;
          i++;
        }else{
            len= Math.max(len,Object.values(obj).length);
            i=obj[s[i]]+1;
            obj={}
        }
    }
  
    return Math.max(len,Object.keys(obj).length);;
}

console.log(lengthOfLongestSubstring('abcabcbb'))
-----------------------------------------------------
//median-of-two-sorted-arrays
function findMedianSortedArrays(nums1, nums2) {
    let i = 0, j = 0, newArr = [];
    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            newArr.push(nums1[i])
            i++;
        } else if (nums1[i] > nums2[j]) {
             newArr.push(nums2[j])
            j++;
        }else if(nums1[i] === nums2[j]){
           newArr.push(nums1[i],nums2[j]);
          i++;
          j++;
        }else{
         // console.log('thir',nums1[i],nums2[j])
            if(nums1[i]!==null && nums1[i]!==undefined){
                newArr.push(nums1[i]);
            }else if(nums2[j]!==null && nums2[j]!==undefined){
              newArr.push(nums2[j]);
            }
          i++;j++;
        }
    }
    let len=Math.floor(newArr.length/2);
    if(newArr.length%2===0){
     return ((newArr[len]+newArr[len-1])/2);
    }else{
      return newArr[len];
    }
}
console.log(findMedianSortedArrays([0,0], []))
------------------------------------
function longestPalindrome(s) {
    let i = 0, j = s.length - 1;
    let palind="";
    if(s.length===1)return s;
    while (i < s.length) {
        while (j > i) {
            if (s[i] !== s[j]) {
                j--;
            }else{
                 let str=s.substring(i,j+1);
                if(str.length>1 && str.length > palind.length && isPalindrome(str)){
                 console.log('test')                    
               palind= !palind?str:palind.length>=str.length?palind:str;
                    i++;
                    j=s.length-1;
                }else{
                    j--;
                }
            }
console.log('palind',palind,i,j)
        }
 
        i++;
        j=s.length-1;
    }
    return palind;
}
function isPalindrome(str){
 let i=0,j=str.length-1;
    while(i!==j){
        if(str[i]===str[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
}
console.log(longestPalindrome('cbbd'))
----------------------------------
// Longest palindrome
function longestPalindrome(s) {
    let palind = "";
    if (!s.length) return null;
    if (s.length === 1) return s;
    //if(isPalindrome(s,0,s.length-1)===s){return s}
    for (let i = 0; i < s.length; i++) {
        //console.log('i',i);
        let str1 = isPalindrome(s, i, i);
        let str2 = isPalindrome(s, i, i + 1);
        console.log('str1,str2', str1, str2);
        if (str1.length >= str2.length) {
            palind = palind && palind.length >= str1.length ? palind : str1;
        } else {
            palind = palind && palind.length >= str2.length ? palind : str2;
        }
    }
    return palind;
}
function isPalindrome(str, s, e) {
    let i = s, j = e;
    let flag=false;
    while (i >= 0 && j <= str.length - 1) {
        if (str[i] === str[j]) {
            i--;
            j++;
           flag=true;
        }else{ break;}
    }
    return flag?str.substring(i+1, j):'';
}
console.log(longestPalindrome('babad'))
----------------------------------------------------
//K Closest Points to Origin
function kClosest(points, K) {
    let result=[],stack=[];
    for (let i = 0; i < points.length; i++) {
        let newdist = (Math.sqrt(points[i][0] * points[i][0] + points[i][1] * points[i][1]).toFixed(2)); 
         stack.push({[newdist]:points[i]})
    }
    
    //console.log(stack)
    stack.sort((a,b)=>Object.keys(a)-Object.keys(b))
      for(let i=0;i< stack.length;i++){
        if(result.length<K){
          result.push(...Object.values(stack[i]))
       }
      }
    
  return result;
}
console.log(kClosest([[1,3],[-2,2]], 1))
---------------------------------------------
//check-if-a-string-can-break-another-string
function checkIfCanBreak(s1, s2) {
    let s1Arr = s1.split('').sort(), s2Arr = s2.split('').sort(), greater = "";
    for (let i = 0; i < s1Arr.length; i++) {
        if (s1Arr[i] > s2Arr[i]) {
            if(!greater){
                greater = 's1';
            }else if(greater && greater!=='s1'){
                return false;
            }
        }
        if (s1Arr[i] < s2Arr[i]) {
            if(!greater){
                greater = 's2';
            }else if(greater && greater!=='s2'){
                return false;
            }
        }
    }
    return true;
}
console.log(checkIfCanBreak('abe', 'acd'))
-------------------------------------------------------
//can-convert-string-in-k-moves
function canConvertString(s, t, k) {
    let obj = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15,
        p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };
    let used = {};
    if (s.length !== t.length) return false;
    if (s === t) return true;
    for (let i = 0; i < s.length; i++) {
        if (t[i] !== s[i]) {
            let diff = obj[t[i]] >obj[s[i]] ? (obj[t[i]] - obj[s[i]]) % 26 : 26-(obj[s[i]] - obj[t[i]]);
            //console.log(i)
            if (diff > k) { return false; }
            if (!used.hasOwnProperty(diff)) {
                used[diff] = 1;
            } else {
                if (used[diff] * 26 + diff <= k) {
                    used[diff] = used[diff] + 1;
                } else {
                    return false;
                }
            }

            console.log(used)
        }
    }
    return true;
}
console.log(canConvertString("atmtxzjkz", "tvbtjhvjd", 35))
-------------------------------------------
//String compress
function compress(chars) {
    //let prev = chars[0];
    let i = 0,j=1;
    let count = 1, str = "";
    while (i < chars.length) {
        if (chars[i] === chars[j]) {
            count++;
            j++;
        } else {
          console.log('chars1',chars,i,j)
          if(count>1){
              chars.splice(i+1,j-i-1,...count.toString().split(''));
              i=i+2;              
          }else{
            i=i+1;         
          }
          j=i+1;
          count=1;
        }
      //console.log(chars,i,j)
    }
 return chars;
}
console.log(compress(["a","a","a","b","b","a","a"]))
---------------------------------------
//Count Islands
function numIslands(grid) {
    let islands = [], visited = {}, queue = [];
    let i = 0, j = 0, count = 0;;
    while (i < grid.length) {
        while (j < grid[0].length) {
            if (grid[i][j] === '1' && !visited.hasOwnProperty(i + ' ' + j)) {
                visited[i + ' ' + j] = 1;
                queue.push([i, j]);
                while (queue.length) {
                    let curr = queue.shift();
                    let x = parseInt(curr[0]);
                    let y = parseInt(curr[1]);
                    //console.log('xy',x,y)
                    if (y < grid[0].length - 1 && !visited.hasOwnProperty(x + ' ' + (y + 1)) && grid[x][y + 1] === '1') {
                        queue.push([x, y + 1])
                        visited[x + ' ' + (y + 1)] = 1
                    }
                    if (x < grid.length - 1 && !visited.hasOwnProperty((x + 1) + ' ' + y) && grid[x + 1][y] === '1') {
                        queue.push([x + 1, y])
                        visited[(x + 1) + ' ' + y] = 1;
                    }
                    if (y > 0 && !visited.hasOwnProperty(x + ' ' + y - 1) && grid[x][y - 1] === '1') {
                        queue.push([x, y - 1])
                        visited[x + ' ' + (y - 1)] = 1;
                    }
                    if (x > 0 && !visited.hasOwnProperty((x - 1) + ' ' + y) && grid[x - 1][y] === '1') {
                        queue.push([x - 1, y])
                        visited[(x - 1) + ' ' + y] = 1;
                    }
                    console.log('queue', queue)
                }
                count++;
            }
            j++;
        }
        i++;
        j = 0;
    }
    console.log(count);
}
console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))
---------------------------------------------------------------------
//zigzag-conversion
function convert(s, numRows) {
   if(numRows>=s.length){return s;}
    let obj={}
      for(let i=0;i<numRows;i++){
          obj['s'+i]=""
      }
    console.log(obj)
      let i=0,j = 0,zigzag=false;
      while (i < s.length) {
          if (!zigzag) {
              while (j < numRows && s[i]) {
                  //arr[j].push(s[i]);
                obj['s'+j]= obj['s'+j]+s[i]
                  j++;
                  i++;
              }
              zigzag=true;
              j=numRows-2;
          } else {
              while(j>=1 && s[i]){
                 // arr[j].push(s[i]);
                obj['s'+j]= obj['s'+j]+s[i]
                  j--;
                  i++;
              }
              zigzag=false;
              j=0;
          }
          console.log(obj)
      }
  return Object.values(obj).join('')
  }
  console.log(convert('PAYPALISHIRING', 5))
-----------------------------------------------
//string-to-integer-atoi
function myAtoi(s) {
     let str=""
    for (let i = 0; i < s.length; i++) {
        if(!str && s[i]!==' ')
        {
          if(!matchNum(s[i])){
             return 0;
          }else{
            str=str+s[i];
          }
        }else if(str) {
            if(!isNaN(str+s[i])){
                str=str+s[i];
            }else{
              break;
            }
        } 
    }
 
  if (str && +str < (Math.pow(2, 31) * -1)) return (Math.pow(2, 31) * -1);
  if(str && +str > (Math.pow(2, 31) - 1)) return Math.pow(2, 31) - 1;
  return str && +str? +str:0;
}

function matchNum(s) {
    if (s.match("^\[0-9]+$") || s === '-' || s === '+'){
        return true;
    }
    return false;
}
console.log(myAtoi(" +1 2"));
---------------------------
//container-with-most-water
function maxArea(height) {
    let maxheight = 0;
    let l = 0, r = height.length - 1;
    for (let i = 0; i < height.length; i++) {
        if (i > 0) {
            while (l < i) {
                if(height[l] >= height[i]){
                    break;
                }else{
                    l++;
                }
            }
        }
        if (i < height.length - 1) {
            while (r > i) {
                if(height[r] >= height[i]){
                    break;
                }else{
                    r--;
                }
            }
        }
       //console.log('left,right',l,r)
        let subHeight = height[i] * (r - l);
        maxheight = Math.max(subHeight, maxheight);
        l = 0; r = height.length - 1;
       // console.log('subHeight',subHeight)
    }
    return maxheight;
}
console.log(maxArea([1,2,1]))
-----------------------------------------
//integer-to-roman
function intToRoman(num) {
    let romanObj = {
        1: 'I', 4:"IV", 5: 'V',9:'IX', 10: 'X', 40:"XL",50: 'L',90:"XC", 100: 'C',400:"CD", 500: 'D',900:"CM", 1000: 'M'
    }
    if(romanObj[num]){return romanObj[num];}
    let count = "";
    let keys=Object.keys(romanObj)
    for (let i=0; i<keys.length;i++) {
        if (num < keys[i]) {
          return romanObj[keys[i-1]]+intToRoman(num - keys[i-1]);
        }else if(i===keys.length-1){
          return romanObj[keys[i]]+intToRoman(num - keys[i]);
        }
    }
   return count;
}
console.log(intToRoman(1994))
------------------------------------------------
// three sum
function threeSum(nums) {
    if (!nums.length) return [];
    nums.sort((a, b) => a - b);
    let out = [];
    let i = 0;
    while (i < nums.length) {
      if (nums[i] > 0) break
        let j = i + 1; let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
              out.push([nums[i], nums[j], nums[k]])
                j++;
                k--;
              while(j<k && nums[j]===nums[j-1]){j++;}
            }
        }
      while(i<k && nums[i]===nums[i+1]){i++;}
      i++;
    }
    return out;
}
console.log(threeSum([-2,0,0,2,2]))
------------------------------------------
//closest three sum
function threeSumClosest(nums, target) {
    let i = 0; closestSum = Infinity;
    nums.sort((a, b) => a - b);
    while (i < nums.length) {
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (closestSum === Infinity) { closestSum = sum; }
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            }
            if ((closestSum > target && ((sum < closestSum && sum > target) || Math.abs(closestSum - target) > Math.abs(target - sum)))
                || (closestSum < target && ((sum > closestSum && sum < target) || Math.abs(target - closestSum) > Math.abs(sum - target)))){
                closestSum = sum;
            }
          //  console.log('closestSum', closestSum)
            //console.log('sum', sum)
        }
        i++;
    }
    return closestSum;
}
console.log(threeSumClosest([-1,2,1,-4], 1))
-------------------------------------------
//letter-combinations-of-a-phone-number
function letterCombinations(digits) {
    let dict = {
        2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z']
    }
    let i = 0;
    let output = [...dict[digits[i]]];

    if (!digits.length) return [];
    if (digits.length === 1) return dict[digits];
   i++;
    while (i < digits.length) {
        output = [...createCombination(output, dict[digits[i]])]
        i++;
    }
 return output;
}
function createCombination(str1, str2) {
    let i = 0, output = [];
    while (i < str1.length) {
      let j=0;
        while (j < str2.length) {
            output.push(str1[i] + str2[j]);
            j++;
        }
        i++;
    }
    return output;
}
console.log(letterCombinations('79'))
----------------------------------------
//4sum
function fourSum(nums, target) {
    if (!nums.length) { return [] };
    nums.sort((a, b) => a - b);
    let output = [], i = 0;
    while (i < nums.length) {
        let j = i + 1; k = j + 1;
        while (j < nums.length-2) {
            let l = nums.length - 1;       
            while (k < l) {
              let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum < target) {
                    k++;
                } else if (sum > target) {
                    l--;
                } else {
                    output.push([nums[i], nums[j], nums[k], nums[l]]);
                  console.log('output',output)
                    k++;
                    l--;
                    while (nums[k] === nums[k-1] && k < l) { k++ };
                }
            }
            j++;
            while (nums[j] === nums[j-1] && j < nums.length - 1) { j++ };
            k=j+1;
        }
        i++;
      while (nums[i] === nums[i-1] && i < nums.length) { i++ };
    }
    return output
}
console.log(fourSum([1,0,-1,0,-2,2], 0))
-----------------------------------------------------
//remove-nth-node-from-end-of-list
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function removeNthFromEnd(head, n) {
    let i = head, j = head, icount = 0, jcount = 0;
    if(!head) return[]
    while (j) {
        j = j.next;
        jcount++;
    }
    while (i) {
        icount++;
        if(jcount-n===0){
            head=i.next;
            return head;
        }
        if(icount===jcount-n){
            if(i.next){
                i.next=i.next.next;
                return head;
            }else{
                return head;
            }
        }
        i=i.next;
    }
    return head;
}

let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);
node.next.next.next.next = null;
console.log(removeNthFromEnd(node,2));
-------------------------------------
//generate parenthesis
function generateParenthesis(n) {
  let arr=[];
  generateforTwo(arr,"",0,0,n);
  return arr;
}
function generateforTwo(arr,curr,open,close,max) {
    if(curr.length===max*2){
      arr.push(curr);
      return;
    };
    if(open<max){
        generateforTwo(arr,curr+"(",open+1,close,max);
    }
    if(close<open){
        generateforTwo(arr,curr+")",open,close+1,max);
    }
}
console.log(generateParenthesis(2));
----------------------------------------
//valid paranthesis
function isValid(s) {
    let stack = [], dict = { ")": "(", "}": "{", "]": "[" };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else{
            if (stack.pop() !== dict[s[i]]) {
                return false;
            }
        }
    }
    return stack.length ? false : true;
}
console.log(isValid("{[]}"))
-----------------------------------------------
// minimum-add-to-make-parentheses-valid
function minAddToMakeValid(S) {
    let stack = [], dict = { ")": "("};;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "(") {
            stack.push(S[i]);
        } else{
           if(stack.length && stack[stack.length-1]===dict[S[i]]){
                stack.pop();
           }else{
               stack.push(S[i]);
           }
        }
    }
    return stack.length;
}
console.log(minAddToMakeValid("()))(("))
---------------------------------------------
// swap node pair
function swapPairs(head) {
    if(!head) return null;
    if(!head.next) return head;
    let prev = null, curr = head;
    while (curr) {
        if (curr === head) {
            let temp = curr;
            head = curr.next;
            curr = head;
            let temp2 = curr.next;
            curr.next = temp;
            curr.next.next = temp2;   
        } else if(curr.next) {
            let temp = curr.next;
            curr.next = curr.next.next;
            prev.next = temp;
            prev.next.next = curr;
            curr=prev.next;
        }
        
        prev = curr.next ?curr.next:null;
        curr = curr.next && curr.next.next ? curr.next.next:null;
    }
    return head;
};
---------------------------------
//divide 
function divide(dividend, divisor) {
   let retNegative = true;
	if ((dividend >= 0 && divisor >= 0) || (dividend <= 0 && divisor <= 0)) { retNegative = false; }
	divisor = Math.abs(divisor);
	dividend = Math.abs(dividend);
	if (dividend < divisor) return 0;
	let count=0;
	while (divisor <= dividend) {
	   let mul=1;
	   let value=divisor
	   while(value + value < dividend){
		   value=value+value;
		   mul=mul+mul;
	   }
	   dividend=dividend-value;
	   count=count+mul
	}
	if(count >((2**31)-1)){
	return retNegative? -(2**31):(2**31)-1;
	}
	return retNegative?-(count):(count);
	}
-------------------------------------------------------------
// next permutation
function nextPermutation(nums) {
  if (nums.length === 1) return nums;
  let prev = nums.length - 1, i;

  for (i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[prev]) {
      break;
    }
    prev--;
  }
  for (let j = nums.length - 1; j >= prev; j--) {
    if (nums[j] > nums[i]) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      break;
    }
  }
  console.log(nums)
  let p=prev
  for (let k = nums.length - 1; k >= p; k--) {
    if (k!==p) {
      let temp = nums[p];
      nums[p] = nums[k];
      nums[k] = temp;
    }
    p++;
  }
  return nums;
}
console.log(nextPermutation([1,2]))
------------------------------------------------
// find start and end index of target in sorted array
function searchRange(nums, target) {
let out={}
for(let i=0;i<nums.length;i++){
  if(nums[i]===target && !out[target]){
    out[target]=[i];
    endInd=i;
  }else if(nums[i]===target && out[target]){
    endInd++;
  }
}
  if(out[target] && out[target].length){out[target].push(endInd); return out[target];}
  
  return [-1, -1]
}
console.log(searchRange([5, 7, 8, 8, 10], 10))
----------------------------------------
var reverseKGroup = function (head, k) {
  let newHead=new ListNode(-1,head);
  let S = head,begin=head, prev = newHead, i = 0;
  while (S) {
    if (i % k === 0) {
      begin = reverse(begin,S.next);
    }else{
      S = S.next;
    }
    i++;
  }
  return head
}
function reverse(begin, end) {
  let curr = begin, prev, nextt;
  while (curr != end) {
    nextt = curr.next;
    curr.next = prev ? prev : null;
    prev = curr;
    curr = nextt;
  }
  return curr;
}
-------------------------------------------
// can jump
function canReach(nums) {
    let validInd=nums.length-1;
    for(let i=nums.length-2;i>=0;i--){
      
      if(i+nums[i]>=validInd){validInd=i}
    }
  return validInd===0;
}
console.log(canReach([3,2,1,0,4]))
-----------------------------------
// N queen problem
function queensAttacktheKing(queens, king) {
    let k1 = king[0], k2 = king[1], output = [], temp = {};
    for (let q = 0; q < queens.length; q++) {
        let q1 = queens[q][0], q2 = queens[q][1];
        if (q1 > k1 && q2 === k2) {
            if (temp['B']) {
                if (q1 < temp['B'][0] && q1 > k1) {
                    temp['B'] = queens[q]
                }
            } else {
                temp['B'] = queens[q]
            }
        } else if (q1 < k1 && q2 === k2) {
            if (temp['T']) {
                if (q1 > temp['T'][0] && q1 < k1) {
                    temp['T'] = queens[q]
                }
            } else {
                temp['T'] = queens[q]
            }
        } else if (q1 === k1 && q2 < k2) {
            if (temp['L']) {
                if (q2 > temp['L'][1] && q2 < k2) {
                    temp['L'] = queens[q]
                }
            } else {
                temp['L'] = queens[q]
            }
        } else if (q1 === k1 && q2 > k2) {
            if (temp['R']) {
                if (q2 < temp['R'][1] && q2 > k2) { temp['R'] = queens[q] }
            } else { temp['R'] = queens[q] }
        } else if (q1 > k1 && q2 < k2 && (q1 + q2 === k1 + k2)) {
            if (temp['BN']) {
                if (q1 < temp['BN'][0] && q1 > k1 && q2 > temp['BN'][1] && q2 < k2) {
                    temp['BN'] = queens[q];
                }
            } else {
                temp['BN'] = queens[q];
            }
        } else if (q1 < k1 && q2 < k2 && (q1 - q2 === k1 - k2)) {
            if (temp['TN']) {
                if (q1 > temp['TN'][0] && q1 < k1 && q2 > temp['TN'][1] && q2 < k2) {
                    temp['TN'] = queens[q];
                }
            } else {
                temp['TN'] = queens[q];
            }
        } else if (q1 < k1 && q2 > k2 && (q1 + q2 === k1 + k2)) {
            if (temp['TP']) {
                if (q1 > temp['TP'][0] && q1 < k1 && q2 < temp['TP'][1] && q2 > k2) {
                    temp['TP'] = queens[q];
                }
            } else {
                temp['TP'] = queens[q];
            }
        } else if (q1 > k1 && q2 > k2 && (q1 - q2 === k1 - k2)) {
            if (temp['BP']) {
                if (q1 < temp['BP'][0] && q1 > k1 && q2 < temp['BP'][1] && q2 > k2) {
                    temp['BP'] = queens[q];
                }
            } else {
                temp['BP'] = queens[q];
            }
        }
    }
    return temp;
}
console.log(queensAttacktheKing([[1,3],[0,7],[5,1],[2,5],[7,2],[1,2],[6,7],[3,3],[5,5],[1,5],[5,0],[0,4],[4,1],[1,1],[3,2],[2,3],[4,2],[1,0],[6,5],[2,7],[3,1],[4,3],[3,4]],
[0,2]))
----------------------------------------------------------------------------
// valid sudoku
function isValidSudoku(board) {
    let obj = {};
    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        obj = {};
        for (let j = 0; j < row.length; j++) {
            if (row[j] !== '.') {
                if (row[j] >= 1 || row[j] <= 9) {
                    if (!obj[row[j]]) {
                        obj[row[j]] = 1;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
    }
    obj = {};
    for (let i = 0; i < board[0].length; i++) {
        obj = {};
        for (let j = 0; j < board.length; j++) {
            if (board[j][i] !== '.') {
                if (board[j][i] >= 1 || board[j][i] <= 9) {
                    if (!obj[board[j][i]]) {
                        obj[board[j][i]] = 1;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
    }
    let c1 = 0, k = 0;
    obj={}
    while (k < 9) {
        for (let i = 0; i < 9; i++) {
            if (c1 === 3) {
                obj = {}; c1 = 0;
            }
            for (let j = k; j < k + 3; j++) {
              if(board[i][j] !=='.'){
                if (board[i][j] >= 1 || board[i][j] <= 9) {
                   if (!obj[board[i][j]]) {
                    obj[board[i][j]] = 1
                } else {
                    return false;
                }
                }
              }
               
            }
            c1++;
        }
        k += 3;
    }
  return true;
}
console.log(isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."], 
    [".", "1", "5", ".", ".", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", "2", ".", ".", "."], 
    [".", "2", ".", "9", ".", ".", ".", ".", "."], 
    [".", ".", "4", ".", ".", ".", ".", ".", "."]]))
----------------------------------------------
function multiply(num1, num2) {
    let sum = 0,count='';
    for (let i = num1.length-1; i >=0; i--) {
        let s=mult(num2, num1[i])+''+count;
      console.log(sum,+s)
        sum = sum + parseInt(s)
     // sum.push(+s)
        count=count+'0'
    }
  return sum;
}
function mult(a, b, c) {
    let sum = 0;
    for (let i = 0; i < b; i++) {
        sum = sum + +a;
    }
    return sum;
}
console.log(multiply("123456789","987654321"))
-------------------------------------------------
//merge overlapping intervals
function merge(intervals) {
    if(intervals.length<=1)return intervals;
    intervals.sort((a,b)=>a[0]-b[0])
        let left = intervals[0][0], right = intervals[0][1];
        let output = [[left,right]]
    for (let i = 1; i < intervals.length; i++) {
        if (output.length) { left = output[output.length - 1][0]; right = output[output.length - 1][1]; }

        if ((intervals[i][0] >= left && intervals[i][0] <= right) ||
            (intervals[i][1] >= left && intervals[i][1] <= right)) {
              output.pop();
            if (intervals[i][1] > right) { right = intervals[i][1] }
            output.push([left, right]);

        }else{
            
            output.push(intervals[i]);
        }
    }
    return output;
}
console.log(merge([[1, 3], [3, 6], [8, 10], [8, 18]]));
------------------------------------------------------
//find unique paths
function uniquePaths(m, n) {
    let subarr = new Array(n).fill(1);
    let arr = new Array(m).fill(subarr);
   for(let i=1;i<m;i++){
     for(let j=1; j<n;j++){
       arr[i][j]=arr[i-1][j]+arr[i][j-1];
     }
   }
  return arr[m-1][n-1];
}
---------------------------------------------------
// generate unique binary search tree
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function generateTrees(n) {
   if(!n)return []
  return createBST(1, n);
}
function createBST(start, end) {
  let result = [];
  if (start === end) return [new TreeNode(start)];
  if (start > end) return [null];
  for (let i = start; i <= end; i++) {
    let left = createBST(start, i - 1);
    let right = createBST(i + 1, end);
    for (let j = 0; j < left.length; j++) {
      for (let k = 0; k < right.length; k++) {
        let node = new TreeNode(i);
        node.left = left[j];
        node.right = right[k];
        result.push(node);
      }
    }
  }
console.log(result)
  return result;
}
console.log(generateTrees(3))
-----------------------------------------
// minimum path sum

var minPathSum = function(grid) {
 let subArr=new Array(grid[0].length);
 let arr= new Array(grid.length).fill(subArr),sum=0;
  //console.log(arr)
 for(let i=0;i<grid.length;i++){
   for (let j=0;j<grid[0].length;j++){
     let curr=grid[i][j]
     if(i===0 && j===0){
       arr[i][j]= curr;
     }else if(i===0){
       arr[i][j]=curr + arr[i][j-1];
     }else if(j===0){
       arr[i][j]=curr + arr[i-1][j];
     }else{
       arr[i][j]= curr + Math.min(arr[i-1][j], arr[i][j-1])
     }
     //console.log(arr[i][j],arr)
   }
   
 }
 return arr[grid.length-1][grid[0].length-1]
};
console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]))
-----------------------------------------------
// sort colors
function sortColors(nums) {
  let i = 0, j = nums.length - 1;
  while (i < nums.length) {
    while(i<j){
    if (nums[i] > nums[j]) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      j--;
      }
    }
    i++;
    j=nums.length-1;
  }
  return nums;
}
console.log(sortColors([2, 0, 1]));
--------------------------------------------
// combinations
function combine(n, k) {
  let out = [];
  build = (arr, ind) => {
    if(arr.length===k){out.push(arr);arr=[];}
    for (let i = ind + 1; i <= n; i++) {
      arr.push(i);
      build(arr,i+1)
      arr.pop();
    }
  }
  return build([], 1);
}
----------------------------------------------
//print all subsets combinations
function subsets(nums) {
  let output = [];
  for (let i = 0; i <= nums.length; i++) {
    output.push(...createCombinations(nums,i))
  }
  return output;
}
function createCombinations(arr, k) {
  let output = [];
  function combine(arr1, ind) {
    if (arr1.length === k) { return output.push(arr1.slice([])) }
    for (let i = ind; i < arr.length; i++) {
      arr1.push(arr[i]);
      combine(arr1, i + 1);
      arr1.pop();
    }
  }
  combine([], 0);
  return output;
}
console.log(subsets([1, 2, 3]))
---------------------------------------------
//pow(x,n)
function myPow(x, n) {
    if(n===0)return 1;
    if(n===1)return x;
    let negPower=false;
    if(n<0){negPower=true}
    n=Math.abs(n);
    let n1 = Math.floor(n / 2);
    let p1 = myPow(x, n1);
    if (n % 2 !== 0) {
        return !negPower ? p1 * p1 * x : 1/(p1 * p1 * x);
    } else {
        return !negPower ? p1 * p1 : 1/(p1 * p1) ;
    }
}
console.log(myPow(2.10000, 3))
-----------------------------
//multiply string
function multiply(num1, num2) {
   let arr = new Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
        let carry = 0;
        for (let j = num2.length - 1; j >= 0; j--) {
            let mul=num1[i] * num2[j];
            arr[i + j + 1] += (carry+mul);
            carry = Math.floor(arr[i + j + 1]/ 10);
            arr[i + j + 1]=arr[i + j + 1]%10;
        }
        arr[i] = arr[i] + carry;
    }
  return arr.join('').replace(/^0*(\d)/,"$1")
}
console.log(multiply("123", "456"))
----------------------------------------------
// combination sum
function combinationSum(candidates, target){
    let result=[]
    function backTrack(start,sum,arr){
        if(sum>=target){
            if(sum===target){result.push([...arr])}
            return;
        }
        for(let i=start;i<candidates.length;i++){
            arr.push(candidates[i]);
            backTrack(i,sum+candidates[i],arr);
            arr.pop();
        }
    }
        backTrack(0,0,[]);
        return result;
}
console.log(combinationSum([2, 3, 6, 7], 7))
-------------------------------------------------
//combinations sum 2
function combinationSum(candidates, target) {
    let results = [], visited = {};
    candidates.sort((a, b) => a - b)
    function backTrack(start, sum, arr) {
        if (sum >= target) {
            if (sum === target) {
                visited[arr] = 1
            }
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            arr.push(candidates[i]);
            backTrack(i + 1, sum + candidates[i], arr);
            arr.pop();
        }
    }
    backTrack(0, 0, []);
    let keys = Object.keys(visited)
    for (let i = 0; i < keys.length; i++) {
        results.push(keys[i].split(',').map(val => parseInt(val)))
    }
    return results;
}
console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8))
-------------------------------------------------
// overlapping interval
function overLap(intfir, intsec) {
    if ((intsec[1] >= intfir[1] && intsec[0] <= intfir[1]) ||
        (intsec[0] <= intfir[1])) { return true; }
    return false;
}
function merge(intfir, intsec) {
    return [Math.min(intfir[0], intsec[0]), Math.max(intfir[1], intsec[1])]
}
function insert(intervals, newInterval) {
if (!intervals.length) return [newInterval];
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length-1; i++) {
        if(overLap(intervals[i],intervals[i+1])){
            intervals[i]= merge(intervals[i],intervals[i+1]);
            intervals.splice(i+1,1);
            i--;
        }
    }
    return intervals;
}
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
------------------------------------------------------------------------
//simplify path
function simplifyPath(path) {
    let res = [];
    path = path.split('/')
    for (let i = 0; i <= path.length - 1; i++) {
        if (path[i]) {
            if (path[i] === '..') {
                res.pop();
            } else if (path[i] !== '.') {
                res.push(path[i]);
            }
        }
    }
    return '/' + res.join('/');
}
console.log(simplifyPath("/a//b////c/d//././/.."))
-------------------------------------------------------------------------
// word search
function exist(board, word) {
    let k = 0, i = 0, foundFirst = false;
    while (i < board.length) {
        let j = 0;
        while (j < board[0].length) {
            if (board[i][j] === word[0]) {
                if (findPath(board, word, i, j, k + 1)) {
                    return true;
                }
            }
            j++;
        }
        i++
    }
    return false;
}
function findPath(board, word, i, j, k) {
    if (k > word.length - 1) { return true; }
    let isFound = false;
    let temp = board[i][j];
    board[i][j] = "."
    if ((i + 1) < board.length && j < board[0].length && board[i + 1][j] === word[k]
    ) {
        isFound = findPath(board, word, i + 1, j, k + 1)

    }
    if (!isFound && i < board.length && (j + 1) < board[0].length && board[i][j + 1] === word[k]) {
        isFound = findPath(board, word, i, j + 1, k + 1)
    }
    if (!isFound && i < board.length && (j - 1) >= 0 && board[i][j - 1] === word[k]) {
        isFound = findPath(board, word, i, j - 1, k + 1)

    }
    if (!isFound && (i - 1) >= 0 && j < board[0].length && board[i - 1][j] === word[k]
    ) {
        isFound = findPath(board, word, i - 1, j, k + 1)

    }
    board[i][j] = temp;
    return isFound;
}
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    "ABCCED"))
-------------------------------------------------
function removeCharacter(S,K){
     S=S.split('')
    let j = S.length - 1, matchFound = false, ind = -1;
    while (j >= 0) {
        let i = 0;
        while (i < j) {
            if (!matchFound && S[i] === S[j]) {
                matchFound = true;
            } else if (matchFound && S[i] !== S[j]) {
                ind = i;
                break;
            }
            i++;
        }
        if (ind !== -1) break
        j--;
    }
   S.splice(ind,K)
    return S;
}
function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
      S=[...removeCharacter(S,K)]
      let i = 0,j=1;
      let count = 1, str = "";
      while (i < S.length) {
          if (S[i] === S[j]) {
              count++;
              j++;
          } else {
            if(count>1){
                S.splice(i,j-i-1,...count.toString().split(''));
                i=i+2;              
            }else{
              i=i+1;         
            }
            j=i+1;
            count=1;
          }
      }
   return S.join('').length;
}
--------------------------------------------------
function solution(S, X, Y) {
    let obj = {};
    for (let i = 0; i < X.length; i++) {
        let dist = +Math.sqrt((X[i] * X[i]) + (Y[i] * Y[i])).toFixed(2)
        if (!obj.hasOwnProperty(dist)) {
            obj[dist] = S[i]
        } else {
            obj[dist] = [...obj[dist], S[i]]
        }
    }
    let keys = Object.keys(obj), tempObj = {}
    keys.sort((a, b) => a - b);
    for (let i = 0; i < keys.length; i++) {
        if (Array.isArray(obj[keys[i]]) && obj[keys[i]].length) {
            break;
        } else {
            if (!tempObj.hasOwnProperty(obj[keys[i]])) {
                tempObj[obj[keys[i]]] = 1
            } else {
                break;
            }
        }
    }
    return Object.keys(tempObj).length
}
console.log(solution('ABB', [1, -2, -2], [1, -2, 2]))
------------------------------------------------------------
//buy sell stock easy [7,1,5,3,6,4]
var maxProfit = function(prices) {
    let min=prices[0],max=prices[0],profit=0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i];
            max=prices[i];
        }else{
            max=Math.max(max,prices[i])
        }
        subprofit=max-min;
        profit=Math.max(profit,subprofit)
    }
    return profit;
};
------------------------------------------------------
//buy sell stock with cooldown
var maxProfit = function(prices) {
    let memo={}
     function calculateProfit(i, j) {
          let profit = -Infinity;
        if(memo.hasOwnProperty([i+' '+ j])) return memo[i+' '+ j]
        if (j >= prices.length) return 0;
        if (prices[j] <= prices[i]) {
            profit = Math.max(profit, calculateProfit(j, j + 1));
        } else if (prices[i] < prices[j]) {
            profit = Math.max(profit, prices[j] - prices[i] + calculateProfit(j + 2, j + 3));
            profit = Math.max(profit, calculateProfit(i, j + 1))
        }
         memo[i+' '+ j]=profit;
        return profit;
    }
    return calculateProfit(0, 1)
};
-------------------------------------------------------
// buy sell stock with transaction
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let memo={}
       function calculateProfit(i, j) {
        if(memo[i+' '+j]) return memo[i+' '+j];
        let profit = -Infinity;
        if (j >= prices.length) return 0;
        if (prices[j] <= prices[i]) {
            profit = calculateProfit(j, j + 1);
        } else {
            
        if(prices[j] - prices[i] - fee > 0){
            let k = j;
            while (prices[k] > prices[i] && k < prices.length) {
                let p1 = prices[k] - prices[i] - fee + calculateProfit(k + 1, k + 2)
                k++;
                profit = Math.max(p1, profit)
            }
             }else{
                 profit = calculateProfit(i, j + 1);
             }
  
        }
         memo[i+' '+j]=profit;
         return profit;
    };
  return calculateProfit(0, 1)
};
--------------------------------------------
//set matrix zeroes
function setZeroes(matrix) {
    let indArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                indArr.push([i, j]);
            }
        }
    }
    while (indArr.length) {
        let curr = indArr.pop();
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[curr[0]][i]=0;
        }
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][curr[1]]=0;
        }
    }
    return matrix;
}
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
--------------------------------------------------------
// clone graph
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
function cloneGraph(node) {
  if(!node) return null
    let memo = {};
    function clone(val, nb) {
        if (!memo.hasOwnProperty(val)) {
            let newNode = new Node(val);
            memo[val] = newNode;
            for (let i = 0; i < nb.length; i++) {
                newNode.neighbors.push(clone(nb[i].val, nb[i].neighbors))
             }
             return newNode;
         } else {
                return memo[val];
         }
                return newNode;
    }
    return clone(node.val, node.neighbors);
}
console.log(cloneGraph([[2, 4], [1, 3], [2, 4], [1, 3]]))
--------------------------------------------------
// isBapartite
function isBipartite(graph) {
  let vertObj={};
    if(!graph[graph.length-1].length)return true;
       function check(node, status) {
        vertObj[node]=status;
        let neigh = graph[node];
        for (let i = 0; i < neigh.length; i++) {
            if (vertObj[node] === vertObj[neigh[i]]) return false
            if (!vertObj[neigh[i]] && !check(neigh[i], !status)) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < graph.length; i++) {
        if (vertObj[[i]]) {
            continue
        }
        if(!check(i, 0)) return false;
    }
    return true;
}
console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]]))
-------------------------------------------------
// stock span problem
var StockSpanner = function() {
    this.stocks=[];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.stocks.push(price);
    let count=0;
    for(let i=this.stocks.length-1;i>=0;i--){
        if(this.stocks[i]<=price){
            count++;
        }else{
            break;
        }
    }
    return count;
};
------------------------------------------------
//kth grammer
var kthGrammar = function(N, K) {
    if(N===1 && K===1)return 0;
    let str = "";
    let mid= (Math.pow(2,N-1))/2;
    if(K<=mid){
       return kthGrammar(N-1,K)
    }else{
        result=kthGrammar(N-1,K-mid)
        if(result===1)return 0
        return 1;
    }
};
---------------------------------------
//increasing triplet
var increasingTriplet = function(nums) {
    let min1 = Infinity, min2 = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>min2){
            return true;
        }else if(nums[i]>min1){
            min2=nums[i]
        }else{
            min1=nums[i]
        }
    }
    return false;
};
-----------------------------
//count-triplets-that-can-form-two-arrays-of-equal-xor
function countTriplets(arr) {
   let i = 0, r1=null,count=0;
    while (i < arr.length) {
        r1 = r1!==null ? r1 ^ arr[i] : arr[i];
        let j = i + 1;
        while (j < arr.length) {
            let k = j;
            let r2=null;
            while (k < arr.length) {
                r2 = r2!==null ? r2 ^ arr[k]:arr[j];
                if (r1 === r2) {
                    //result.push([i, j, k])
                    count++;
                }
                k++;
            }
            r1=r1^arr[j];
            j++;
        }
        i++;
        r1=null
    }
    //console.log(result);                        
    return count;
}
console.log(countTriplets([1,3,5,7,9]))
-------------------------------------------------
//zigzag order traversal
var zigzagLevelOrder = function(root) {
    if(!root)return []
    let result=[[root.val]],queue=[[root]],flag=false;
    while(queue.length){
        let c= queue.shift(),temp1=[],temp2=[],i=c.length-1;
        if(!flag){
            while(i>=0){
                if(c[i].right){
                    temp1.push(c[i].right.val);
                    temp2.push(c[i].right)
                }
                if(c[i].left){
                    temp1.push(c[i].left.val);
                    temp2.push(c[i].left)
                }
                i--;
            }
        }else{
            while(i>=0){
                 if(c[i].left){
                    temp1.push(c[i].left.val);
                    temp2.push(c[i].left)
                }
                if(c[i].right){
                    temp1.push(c[i].right.val);
                    temp2.push(c[i].right)
                }
                i--;
            }
        }
        if(temp1.length){result.push(temp1);}
        if(temp2.length){queue.push(temp2);}
            flag=!flag;
    }
    return result;
};
--------------------------------------------
//minimum-difference-between-largest-and-smallest-value-in-three-moves
var minDifference = function(nums) {
    if (nums.length <= 4) return 0;
    nums.sort((a, b) => a - b);
    let min = nums[nums.length - 1] - nums[0];
    for (let i = 0; i < nums.length; i++) {
      if((nums.length - 4 + i)<nums.length){
        let diff = nums[nums.length - 4 + i] -nums[i]
        min=Math.min(min, diff);
      }
       //console.log(min)
    }
 return min;
};
------------------------------------------
// remove duplicates from Array 
var removeDuplicates = function(nums) {
    let prev=nums[0],count=1,tLen=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]===prev){
            count++;
            if(count>2){
                nums.splice(i,1)
                count--;
                i--;
            }
        }else{
            count=1;
            prev=nums[i]
        }
        tLen=tLen+count;
    }
    return tLen;
};
---------------------------------------------
//partition list
function insert(head, node, i) {
    let count = 0, curr = head, prev;
    if (i === 1) {
        node.next = curr;
        head=node;
        return head;
    }
    while (curr) {
        count++;
        if (count === i) {
            prev.next = node;
            node.next = curr;
            return head;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
}
var partition = function(head, x) {
        let ind = -1, count = 0, currFound = false, prev;
    let curr = head;
    while (curr) {
        count++;
        if (ind === -1 && curr.val >= x) {
            ind = count;
        }
        if (ind!==-1 && curr.val < x) {
            prev.next = prev.next && prev.next.next ? prev.next.next:null;
            head=insert(head, new ListNode(curr.val), ind)
            ind=ind+1;
            curr=prev;
        }
        prev = curr;
        curr = curr.next;
       
    }
    return head;
};
----------------------------------
// power set
var subsetsWithDup = function(nums) {
    let n = nums.length;
    let visited = new Set()
    let res = []
    
    nums.sort((a,b)=>a-b)
    
    function backtrack(i, arr){
        res.push([...arr])
        visited.add(arr.toString())
        
        for(let j=i; j<n; j++){
            arr.push(nums[j])
            if(!visited.has(arr.toString())){
               backtrack(j+1, arr)
            }
            arr.pop()
        }
    }
    
    backtrack(0, [])
    return res
};
-----------------------------------------------
// decode-ways
var numDecodings = function (s) {
let temp = {}, res = [];
	function decode(str,temp) {
      if(temp.hasOwnProperty(str)){return temp[str]};
      //console.log(str)
        let count=0;
		if (str[0] == '0') return 0;
		if (str.length<=1) return 1;
        let p1=str.slice(0, 1),p2=str.slice(1);
        count=count+decode(p2,temp);
      
        let q1=str.slice(0, 2),q2=str.slice(2)
        if(q1<=26){
          count=count+decode(q2,temp);
        }
        temp[str]=count;

		return count;
	}
	return decode(s,temp)
};
----------------------------------------------
//reverse linkedList between
var reverseBetween = function(head, m, n) {
    let curr=head,count=0,prev=null;
    while(curr.next){
        count++;
        if(count===n){return head;}
        if(count===m){
            if(prev&&prev.next){prev.next=null};
           let c=curr,p=null,c2=curr;
           while(count<=n){
               let t=c.next;
               c.next=p;
               p=c;
               c=t;
               count++;
           } 
            c2.next=c;
            if(prev){
                prev.next=p;
                return head;
            };
            return p;
        }
        prev=curr;
        curr=curr.next;
    }
   return head;
};
-------------------------------------------
// word ladder
function findDiff(prev,w2){
    let count=0;
     for(let j=0;j<prev.length;j++){
            if(prev[j]!==w2[j]){
                count++;
            }
    }
    return count;
}
var ladderLength = function(beginWord, endWord, wordList) {
	if (!wordList.includes(endWord)) return 0;
	let temp = {}, queue = [];
	queue.push({ word: beginWord, level: 1 })
	while (queue.length) {
        //console.log(queue)
		let pre = queue.shift();
		if(pre.word===endWord)return pre.level;
		for (let i = 0; i < wordList.length; i++) {
			if(temp[wordList[i]])continue;
			let count = findDiff(pre.word, wordList[i]);
			if (count === 1) {
				queue.push({ word: wordList[i], level: pre.level+1 })
				temp[wordList[i]] = 1
			}
		}
	}
	return 0;
};
-----------------------------------
//sorted list to BST
var sortedListToBST = function(head) {
    //console.log(head)
    if(!head)return null
    let tLength=0,curr=head,arr=[];
    while(curr){
		tLength++;
		arr.push(curr.val);
        curr=curr.next;
    }
   // console.log('arr',arr);
    function createBST(arr,start,end){
      //  console.log('arr,s,e',start,end);
        if((end-start)===0)return new TreeNode(arr[start]);
        if((end-start)===1)return new TreeNode(arr[end],new TreeNode(arr[start]),null);
        let mid=Math.ceil((start+end)/2);
        let node=new TreeNode(arr[mid]);
        node.left=createBST(arr,start,mid-1);
        node.right=createBST(arr,mid+1,end);
     //   console.log('node',node);
        return node;
    }
    return createBST(arr,0,arr.length-1);
};
----------------------------------------------------
//minimum path sum triangle
var minimumTotal = function(triangle) {
   for (let i = triangle.length - 2; i >= 0; i--) {
		for (let j = 0; j < triangle[i].length; j++) {
			triangle[i][j] += Math.min(triangle[i+1][j],triangle[i+1][j+1])
		}
	}
	return triangle[0][0]
};
--------------------------------------------------
// surounded regions
var solve = function(board) {
let memo = {},i=0;
	while (i < board.length) {
		let j = 0;
		while (j < board[0].length) {
			if (board[i][j] === 'O' && (i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1)) {
				doReplace(i,j);
			}
			j++;
		}
		i++;
	}
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]==='W'){
                board[i][j]='O';
            }else{
                 board[i][j]='X';
            }
        }
    }
    function doReplace(i, j) {
      //  console.log(i,j)
        if(i<0 || j<0 || i >= board.length  || j >= board[0].length || board[i][j]==='X' || board[i][j]==='W')return;
        
        board[i][j]='W';
        doReplace(i+1,j);
        doReplace(i-1,j);
        doReplace(i,j+1);
        doReplace(i,j-1);
        return;
	}
}
---------------------------------------------------------
// search in rotated array
var search = function(nums, target) {
        let isFound=false;
        function findTarget(start,end){
        if(start > end || start<0 || end>=nums.length)return false;
        let mid=Math.floor((end+start)/2);
        if(target===nums[mid]){
           isFound=true;
        return isFound;
        }
        if(target<nums[mid]){
            if(findTarget(start,mid-1)){
                isFound=true
                return isFound;
            }else{
               findTarget(mid+1,end);
            }            
        }else{
            if(findTarget(mid+1,end)){
                isFound=true
                return isFound;
               }else{
                   findTarget(start,mid-1);
               }
        }
        return isFound;
    }
    return findTarget(0,nums.length-1)
};
------------------------------------------------------------
// generate spiral matrix
function generateMatrix(n) {
    let matrix = [];
    for (let i = 1; i <= n; i++) {
        matrix.push(new Array(n))
    }
    let top = 0, bottom = n - 1, left = 0, right = n - 1, temp = [], j = 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = j;
            j++;
        }
        top = top + 1;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = j;
            j++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = j;
            j++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = j; 
            j++;
        }
        left++; 
    }
    return matrix;
}
console.log(generateMatrix(2))
-----------------------------
// Plaindrome partitioning
function isPalindrome(s) {
    //if(!s)return false;
    let i = 0, j = s.length-1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

var partition = function(ss) {
    if (!ss) return [[]];
    if (ss.length === 1) return [[ss[0]]];
    let result = [];
    function find(s,arr) {
        if(!s.length) result.push(arr);
        for (let i = 1; i <= s.length; i++) {
            let s1 = s.substring(0, i), s2 = s.substring(i);
            if (isPalindrome(s1)) {
                //arr.push([s1,...find(s2,[])]);
                find(s2,[...arr,s1])
            }
        }
    }
    find(ss,[]);
    return result;
};
----------------------------------------
// can complete circuit
var canCompleteCircuit = function(gas, cost) {
   let sum = 0,start=0,diff=0;
    for(let i=0;i<gas.length;i++){
     sum=sum+gas[i]-cost[i];
        if(sum<0){
            start=i+1;
            diff=diff+sum
             sum=0;
        }   
       /// console.log(sum,diff);
    }
    return sum+diff>=0?start:-1;
};
------------------------------------------
// fnd single number
var singleNumber = function(nums) {
    let temp={};
    for(let i=0;i<nums.length;i++){
        if(!temp.hasOwnProperty(nums[i])){
            temp[nums[i]]=1;
        }else{
            temp[nums[i]]=temp[nums[i]]+1;
            if(temp[nums[i]]===3){
                delete temp[nums[i]]
            }
        }
    }
   // console.log(temp)
    return Object.keys(temp)[0];
};
---------------------------------------------
//ksmallest pairs
var kSmallestPairs = function(nums1, nums2, k) {
    let temp={}
    let i=0;
    
    while(i<nums1.length){
        let j=0;
        while(j<nums2.length){
            let s=nums1[i]+nums2[j];
            if(!temp.hasOwnProperty(s)){
                temp[s]=[[nums1[i],nums2[j]]]
            }else{
                temp[s].push([nums1[i],nums2[j]]);
            }
            j++;
        }
        i++;
    }
   // console.log(temp);
    let keys=Object.keys(temp).sort((a,b)=>a-b)
  // console.log(keys);
    let res=[];
    for(let i =0;i<keys.length;i++){
         if(res.length===k){
            return res;
        }else if(res.length < k){
            if((res.length + temp[keys[i]].length)< k){
               res.push(...temp[keys[i]])
              }else{
               let t= ((res.length + temp[keys[i]].length)-k)  
               //console.log(t)
               res.push(...(temp[keys[i]].slice(t)))
              }
        }
    }
    return res;
};
---------------------------------------------
// john casino
function solve(N, K) {
    //let count = 0;
    function get(num, k, count) {
        //console.log('n,k,c',num,k,count)
        if (num === 1) return count;
        if (k === 0) {
            console.log('in 00', count, num);
            count = count + num - 1;
            //console.log('in 00',count,num);
            return count;
        }
        if (num % 2 === 0) {
            num = num / 2;
            k--;
            return get(num, k, count + 1);
        } else {
            num = num - 1;
            return get(num, k, count + 1);
        }
    }
    return get(N, K, 0)
}
console.log(solve(18, 2))
-----------------------------------------
//find-and-replace-in-string
var findReplaceString = function(S, indexes, sources, targets) {
 let orig = S, obj = {};
    for (let i = 0; i < indexes.length; i++) {
        obj[indexes[i]] = [sources[i], targets[i]]
    }
    console.log(obj)
    let j = 0;
    for (let i in obj) {
        i = +i;
        let str = orig.substring(i, i + obj[i][0].length)
        // console.log('in 2', str, sources[i],i, +i + obj[i][0].length)
        if (str === obj[i][0]) {
            S = S.substr(0, i + j) + obj[i][1] + S.substr(i + str.length + j);
            j = j + obj[i][1].length - obj[i][0].length;
        }
        console.log(j)
    }
    return S
};
-------------------------------------------------------------
//all-paths-from-source-to-target
var allPathsSourceTarget = function(graph) {
    let edges={},result=[];
    for(let i=0;i<graph.length;i++){
        edges[i]=[...graph[i]]
    }
    function findEdges(node,arr){
        if(node===graph.length-1){
            arr.push(node);
            result.push([...arr]);
            return;
        }
        arr.push(node);
        let k=[];
        if(edges[node].length){
            for(let i=0;i<edges[node].length;i++){
                findEdges(edges[node][i],arr);
                arr.pop();
            }
        }
    }
    findEdges(0,[]);
    return result
};
-----------------------------------------------
//count-sorted-vowel-strings
var countVowelStrings = function(n) {
    let vowels = ['a','e','i','o','u'];
    let result =[...vowels]
    if(n===1)return vowels.length;
    let k=1;
    while(k<n){
        result=[...multiply(result)];
            k++;
        }
    function multiply(r){
        let out=[]
            for(let i=0;i<vowels.length;i++){
                 for(let j=i;j<r.length;j++){
                     if(r[j][0]>= vowels[i]){
                        out.push(vowels[i]+r[j]);
                    }
                }
            }
        return out;
    }
    return result.length;
};
--------------------------------------
//keys-and-rooms
var canVisitAllRooms = function(rooms) {
    if(rooms.length===1 && !rooms[0].length)return true;
    let roomObj={},visited={};
    for(let i=1;i<rooms.length;i++){
        roomObj[i]=1
    };
    for(let i=0;i<rooms[0].length;i++){
        if(dfs(rooms[0][i])){
            return true;
        }
    }
    function dfs(node){
        delete roomObj[node];
        if(!roomObj){return true;}
        for(let i=0;i<rooms[node].length;i++){
            if(!visited[rooms[node][i]] && rooms[node][i]!==0){
                    visited[node]=1
                    dfs(rooms[node][i]);
            }
        }
        if(!Object.keys(roomObj).length){
            return true;
        }
    }
    return false;
};
--------------------------------------
//sum-of-nodes-with-even-valued-grandparent
var sumEvenGrandparent = function(root) {
    function recur(c){
        let sum=0;
        if(c.left){
          sum=recur(c.left);
        }
        if(c.right){
          sum=sum+recur(c.right);
        }
        if(c.val%2===0){
            sum=sum+dfs(c,0);
        }
        return sum;
    }
    
    function dfs(node,sum){
            let curr=node;
                if(curr.left){
                    sum=curr.left.left ? sum + curr.left.left.val:sum;
                    sum=curr.left.right ? sum + curr.left.right.val:sum;
                }
                if(curr.right){
                    sum=curr.right.left ? sum + curr.right.left.val:sum;
                    sum=curr.right.right ? sum + curr.right.right.val:sum;
                }
        return sum;
    }
    return recur(root);
};
-------------------------------------------
//minesweeper
var updateBoard = function(board, click) {
    if(board[click[0]][click[1]]==='M'){
        board[click[0]][click[1]]='X'
        return board;
    }
    function checkAdj(i,j){
        let adj=[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]];
        let count=0;
        for(let k=0;k<adj.length;k++){
            let x=adj[k][0]+i;
            let y=adj[k][1]+j;
            if(x>=0 && x< board.length && y>=0 && y<board[0].length && board[x][y]==='M'){
                count++;
            }
        }
        board[i][j] = count>0 ? ""+count : 'B';
        if(board[i][j]==='B'){
            for(let k=0;k<adj.length;k++){
                let x=adj[k][0]+i;
                let y=adj[k][1]+j;
                if(x>=0 && x < board.length && y>=0 && y<board[0].length && board[x][y]==='E'){
                   checkAdj(x,y);
                }
            }
        }
        return board;
    }
    return checkAdj(click[0],click[1])
};
----------------------------------------------
//maximum-level-sum-of-a-binary-tree
var maxLevelSum = function(root,sub) {
    let lvl=1,maxlvl=1,max=root.val,queue=[[root]];
    while(queue.length){
        let curr=queue.shift();
        let t=[],sub=0;
        for(let i=0;i<curr.length;i++){
            if(curr[i].left){
                sub=sub+curr[i].left.val;
                t.push(curr[i].left);
            }
            if(curr[i].right){
                sub=sub+curr[i].right.val;
                t.push(curr[i].right);
            }
        }
        if(t.length){
            queue.push(t)
            lvl++;
            if(sub>max){
                max=sub;
                maxlvl=lvl;
            }
        }
    }
    return maxlvl;
};
---------------------------------
//smallest-subtree-with-all-the-deepest-nodes
var subtreeWithAllDeepest = function(root) {
    let lc=calucateDepth(root.left);
    let rc=calucateDepth(root.right);
    if(lc===rc)return root;
    return lc > rc ? subtreeWithAllDeepest(root.left):subtreeWithAllDeepest(root.right);
    
    function calucateDepth(node){
        if(!node)return 0;
        return Math.max(calucateDepth(node.left),calucateDepth(node.right))+1;
    }
};
---------------------------------------------
//lexicographically-smallest-string-after-applying-operations
function addOddInd(s,a){
    let str="";
    for(let i=0;i<s.length;i++){
        if(i%2!==0){
            let c = (Number(s[i])+a)%10;
            str=str+c;
        }else{
            str=str+s[i];
        }
    }
    return str;
}
function rotateByN(s,b){
    return s.slice(-b)+s.slice(0,s.length-b)
}
var findLexSmallestString = function(s, a, b) {
    let visit={},queue=[s],min=s;
    while(queue.length){
        let curr= queue.shift();
        min = min.localeCompare(curr) < 0 ? min : curr;
        let [s1,s2]=[addOddInd(curr,a),rotateByN(curr,b)]
         if(!visit[s1]){
            queue.push(s1);
            visit[s1]=1
        }
        if(!visit[s2]){
            queue.push(s2);
            visit[s2]=1
        }
    }
    return min;
};
----------------------------------------
//jump-game-iii
var canReach = function(arr, start) {
    let queue=[start],vis={};
    while(queue.length){
        let curr = queue.shift();
        if(!vis.hasOwnProperty(curr)){
             if(arr[curr]===0){
                return true;
                }
        let l=curr-arr[curr];
        let r=curr+arr[curr];
        if(l>=0 && l<arr.length){
            queue.push(l);
        }
        if(r>=0 && r<arr.length){
            queue.push(r);
        }
            vis[curr]=1;
    }
}
    return false;
};
-----------------------------------------
//matrix-block-sum
var matrixBlockSum = function(mat, K) {
    let ans=[];
    for(let i=0;i<mat.length;i++){
        let temp=[]
        for(let j=0;j<mat[0].length;j++){
            temp.push(convert(i,j,K));
            
        }
        ans.push(temp)
    }
    function convert(m,n,k){
            let rs=m-k,re=m+k;
            let cs=n-k,ce=n+k;
            let sum=0;
            for(let i=rs;i<=re;i++){
                for(let j=cs;j<=ce;j++){
                    if(i>=0 && i<mat.length && j>=0 && j<mat[0].length){
                        sum=sum+mat[i][j];
                        
                    }
                }
            }
        return sum;
    }
    return ans;
};
-------------------------------------------
///count-square-submatrices-with-all-ones
var countSquares = function (matrix) {
    let r = matrix.length, c = matrix[0].length, count = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] === 1) {
                if (i > 0 && j > 0) {
                    matrix[i][j] = matrix[i][j] + Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1])
                    count = count + matrix[i][j];
                } else {
                    count++;
                }
            }
        }
    }
    return count;
};
---------------------------------------------------
// counting-bits
function findBinCountOne(num){
    let count=0;
    while(num>0){
        count=num%2===1?count+1:count
        num=Math.floor(num/2)
    }
    return count;
}
var countBits = function(num) {
    let res=[];
    for(let i=0;i<=num;i++){
        res.push(findBinCountOne(i))
    }
    return res;
};
---------------------------------------------------
//count-number-of-teams
var numTeams = function(rating) {
    let i=0,count=0;
    while(i<rating.length){
        let j=i+1;
        while(j<rating.length){
            if(rating[j]>rating[i]){
                let k=j+1;
                while(k<rating.length){
                     if(rating[k]>rating[j]){
                         count++;
                     }
                    k++;
                }
            }
            j++;
        }
        i++;
    }
    i=0;
  while(i<rating.length){
        let j=i+1;
        while(j<rating.length){
            if(rating[j]<rating[i]){
                let k=j+1;
                while(k<rating.length){
                     if(rating[k]<rating[j]){
                         count++;
                     }
                    k++;
                }
            }
            j++;
        }
        i++;
    }
  return count;
};
---------------------------------
//group-the-people-given-the-group-size-they-belong-to
var groupThePeople = function(groupSizes) {
    let obj={},res=[];
    for(let i=0;i<groupSizes.length;i++){
        if(!obj.hasOwnProperty(groupSizes[i])){
            obj[groupSizes[i]]=[i];
        }else{
            if(obj[groupSizes[i]].length===groupSizes[i]){
                res.push(obj[groupSizes[i]]);
                obj[groupSizes[i]]=[i];
            }else{
                obj[groupSizes[i]].push(i);
            }
        }
    }
    res.push(...Object.values(obj));
    return res;
};
-------------------------------------------
// partitioning-into-minimum-number-of-deci-binary-numbers
var minPartitions = function(n) {
    let max=0;
    for(let i=0;i<n.length;i++){
        max=Math.max(max,Number(n[i]))
    }
    return max;
};
--------------------------------------------
//score-after-flipping-matrix
var matrixScore = function(A) {
    let sum=0;
     for (let i = 0; i < A.length; i++) {
        if(A[i][0]===0){
          toggleRow(i)
        }
    }
    for (let i = 0; i < A[0].length; i++) {
        let c=0,g=0;
        for(let j=0;j<A.length;j++){
            if (A[j][i] === 0) {
                c++;
            }else{
                g++
            }
        }
        if (c>g) {
           toggleColumn(i);
        }
    }
   
    function toggleColumn(col) {
        for (let i = 0; i < A.length; i++) {
            A[i][col] = A[i][col] === 1 ? 0 : 1;
        }
    }
    function toggleRow(row) {
        for (let i = 0; i < A[0].length; i++) {
            A[row][i] = A[row][i] === 1 ? 0 : 1;
        }
    }
    for(let i=0;i<A.length;i++){
        sum=sum+parseInt(A[i].join(''),2)
    }
    return sum;
};
--------------------------------------
// beautiful arrangements not solved
var countArrangement = function(n) {
    let arr = [];
    for (i = 1; i <= n; i++) {
        arr.push(i);
    }
    // console.log(arr)
    function perm(arr) {
        if (arr.length === 1) return arr;
        if (arr.length === 2) return [arr, [arr[1], arr[0]]];
        return arr.reduce((acc, item, i) => {
            return acc.concat(perm([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val]))
        }, [])
    }
    let res = perm(arr);
   // console.log(res)
    let count=0;
    for (let i = 0; i < res.length; i++) {
        let flag=false;
        for (let j = 1; j <= n; j++) {
            if(res[i][j-1]%j===0 || j%res[i][j-1]===0){
                //console.log(res[i])
                flag=true;
            }else{
                 //console.log('false',res[i])
                flag=false;
                break;
            }
        }
       // console.log(flag,res[i])
        if(flag){count++};
    }
    return count;
};
--------------------------------------------------
//sequential-digits
var sequentialDigits = function(low, high) {
    let str='123456789';
    let result=[],l=(""+low).length,h=(""+high).length;
    for(let i=l;i<=h;i++){
        for(let j=0;(i+j)<=str.length;j++){
            let res= +str.substring(j,i+j)
            if(res>=low && res<=high){
                result.push(res)
            }
        }
    }
    return result;
};
-----------------------------------------------
//count-of-matches-in-tournament
var numberOfMatches = function(n) {
    let c=0;
    while(n>1){
        if(n%2===0){
            c=c+(n/2);
            n=n/2;
        }else{
            c=c+(((n-1)/2));
            n=((n-1)/2)+1
        }
        //console.log(c,n)
    }
    return c;
};
--------------------------------------
//letter-tile-possibilities
var numTilePossibilities = function(tiles) {
 let res = 0;
    
    function permute(str, opt) {
      //  console.log(str,opt)
        res++;
        for(let i = 0; i < opt.length; i++) {
            if(opt[i] === opt[i-1]) continue;
          //   console.log('res',str + opt[i], opt.slice(0, i) + opt.slice(i+1))
            permute(str + opt[i], opt.slice(0, i) + opt.slice(i+1));
        }
    }
    permute('', [...tiles].sort().join(''));
    return res-1;
};
-------------------------------------
// partition-labels
var partitionLabels = function(S) {
  let first=0,last=-1,vis={},arr=[];
  
  for(let i=0;i<S.length;i++){
      if(i===last){
          arr.push(last-first+1)
          last=-1;
          first=i+1;
      }else{
          if(!last){
              for(let j=S.length-1;j>i;j--){
                  if(S[j]===S[first]){
                      last=j;
                      break;
                  }
              }
          }else{
               for(let j=S.length-1;j>last;j--){
                  if(S[j]===S[i]){
                      last=j;
                      break;
                  }
              }
          }
      }
      if(last===first){
          arr.push(1);
          first=first+1;
          last=-1;
      }
  }
  return arr;
};
------------------------------
//find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
var getTargetCopy = function(original, cloned, target) {
  //console.log(target.val);
  if(cloned.val===target.val){
      //console.log(cloned)
      return cloned;
  }
  if(cloned.left){
      let t=getTargetCopy(original,cloned.left,target);
      if(t)return t;
  }
  if(cloned.right){
      let t=getTargetCopy(original,cloned.right,target);
      if(t)return t;
  }
  return null;
};
----------------------------
//daily-temperatures
var dailyTemperatures = function(T) {
  let stack=[0],res=[];
  for(let i=1;i<T.length;i++){
      while(T[i]>T[stack[stack.length-1]]){
          let c=stack.pop();
          res[c]=i-c;
      }
      stack.push(i)
  }
  while(stack.length){
      let c= stack.pop();
      res[c]=0;
  }
  return res;
};
------------------------------------
//max-increase-to-keep-city-skyline/
function findMax(num,type,grid){
  let max=-1;
  if(type==='row'){
      for(let i=0;i<grid[0].length;i++){
          if(grid[num][i]>max){
              max=grid[num][i];
          }
      }
  }else{
      for(let i=0;i<grid.length;i++){
          if(grid[i][num]>max){
              max=grid[i][num];
          }
      }
  }
  return max;
}
var maxIncreaseKeepingSkyline = function(grid) {
  let val=0,column={};
  for(let i=0;i<grid.length;i++){
      let maxRow=findMax(i,'row',grid);
      for(let j=0;j<grid[0].length;j++){
          let maxColumn=!column[j] ? findMax(j,'column',grid):column[j];
          val=maxColumn>maxRow?val+(maxRow-grid[i][j]):val+(maxColumn-grid[i][j]);
          column[j]=maxColumn;
      }
  }
  return val;
};
--------------------------------------
//widest-vertical-area-between-two-points-containing-no-points/
var maxWidthOfVerticalArea = function(points) {
  let sortedPoints = points.sort((a,b)=>a[0]-b[0]);
  let width=0;
  for(let i=0;i<sortedPoints.length-1;i++){
      width= Math.max(width,sortedPoints[i+1][0]-sortedPoints[i][0])
  }
  return width;
};
-----------------------------------
//binary-search-tree-to-greater-sum-tree
var bstToGst = function(root) {
  let sum=0;
  function findSum(node){
      if(!node.left && !node.right) { 
          sum = sum+node.val;
          return sum;
      }
      if(node.right){
          node.right.val=findSum(node.right)
      }
      node.val=node.val+sum;
      sum=node.val;
      if(node.left){
          node.left.val=findSum(node.left);
          sum=Math.max(sum,node.left.val);
      }
      return node.val;
  }
  findSum(root);
  return root;
};
----------------------------
//sort-the-matrix-diagonally
function sortMat(i,j,mat){
  while(i<mat.length && j<mat[0].length){
     let m=i,n=j;
      while(m>0 && n>0 && mat[m][n]<mat[m-1][n-1]){
          [mat[m][n],mat[m-1][n-1]]=[mat[m-1][n-1],mat[m][n]]
          m--;n--;
      }
      i++;j++;
  }
}
var diagonalSort = function(mat) {
  let i=0,j=0;
  while(j<mat[0].length){
      sortMat(i,j,mat);
      j++;
  }
  i=1;j=0;
    while(i<mat.length){
      sortMat(i,j,mat);
      i++;
  }
  return mat;
};
--------------------------
//queries-on-a-permutation-with-key
var processQueries = function(queries, m) {
  let obj=[],res=[];
  for(let i=1;i<=m;i++){
      obj.push(i);
  }
  for(let i=0;i<queries.length;i++){
      let c=obj.indexOf(queries[i])
      res.push(c);
      obj.splice(c,1);
      obj.unshift(queries[i]);
  }
  return res;
};
--------------------------------
///check-completeness-of-a-binary-tree/
var isCompleteTree = function(root) {
  let queue=[[root]],nullTrue=false;
  while(queue.length){
      let curr=queue.shift();
      let temp=[];
      for(let i=0;i<curr.length;i++){ 
          if(curr[i]&&nullTrue){return false;}
          if(!curr[i]){
              nullTrue=true;
          }else{temp.push(curr[i].left,curr[i].right)}
      }
      if(temp.length){queue.push(temp);}
  }
  return true;
};
----------------------------------
//maximum-binary-tree
function findLargest(start,end,nums){
  let L=-Infinity,ind=-1;
  for(let i=start;i<=end;i++){
      if(nums[i]>L){
          ind=i;
          L=nums[i];
      }
  }
  return ind;
}
var constructMaximumBinaryTree = function(nums) {
  function construct(start,end){
      let largestInd= findLargest(start,end,nums);
      let node=new TreeNode(nums[largestInd]);
      if((largestInd-1)>=start){
          node.left=construct(start,largestInd-1);
      }
      if((largestInd+1)<=end){
          node.right=construct(largestInd+1,end);
      }
      return node;
  }
  return construct(0,nums.length-1);
};
------------------------------
// minimum-operations-to-make-array-equal
var minOperations = function(n) {
  let arr=[];
  for(let i=0;i<n;i++){
      arr[i]= (2*i)+1;
  }
  let c=0,i=0,j=arr.length-1;
     while(i<j){
         c=c+(n-arr[i]);
         arr[i]=n;
         arr[j]=n;
         i++;j--;
     }
  return c;
};
------------------------------------
//construct-binary-search-tree-from-preorder-traversal
var bstFromPreorder = function(preorder) {
  let i=1, node= new TreeNode(preorder[0]),curr=node,arr=[curr];
  while(i<preorder.length){
      if(preorder[i]<curr.val){
          curr.left = new TreeNode(preorder[i]);
          curr=curr.left;
      }else{
          while(arr[arr.length-2] && preorder[i]>arr[arr.length-2].val){
               arr.pop();
          }
          curr=arr[arr.length-1];
          arr.pop();
          curr.right=new TreeNode(preorder[i]);
          curr=curr.right;
      }
      arr.push(curr);
      i++;
  }
  return node;
};
---------------------------------------------
// minimum-number-of-operations-to-move-all-balls-to-each-box
var minOperations = function(boxes) {
  let out=[], arrOfOnes=[];
  for(let i=0; i<boxes.length; i++){
      if(boxes[i] === '1'){
          arrOfOnes.push(i);
      }
  }
  for(let i=0; i<boxes.length; i++){
      let c=0;
       for(let j=0; j<arrOfOnes.length; j++){
         c=c+Math.abs(i-arrOfOnes[j]);
       }
      out[i]=c;
  }
  return out;
};
--------------------------------------------
// all-elements-in-two-binary-search-trees
var getAllElements = function(root1, root2) {
  let arr1=[],arr2=[],out=[];
  function inOrderTraversal(node,arr){
      if(node.left){
           inOrderTraversal(node.left,arr);
      }
      arr.push(node.val);
      if(node.right){
         inOrderTraversal(node.right,arr);
      }
      return arr;
  }
  arr1=root1 ? inOrderTraversal(root1,[]):[]
  arr2=root2?inOrderTraversal(root2,[]):[]
  let m= arr1.length,n=arr2.length;
  let i=0,j=0;
  while(i<arr1.length && j<arr2.length){
      if(arr1[i]<arr2[j]){
          out.push(arr1[i]);
          i++;
      }else{
          out.push(arr2[j]);
          j++;
      }
  }
  if(i!==arr1.length){
      out.push(...arr1.splice(i));
  }else{
      out.push(...arr2.splice(j));
  }
  return out;
};
-------------------------------------------------------------------------
//number-of-boomerangs
var numberOfBoomerangs = function(points) {
  let boom=0;
  for(let i=0;i<points.length;i++){
      let map={};
      for(let j=0;j<points.length;j++){
          if(i!==j){
              const dis= Math.pow(points[i][0] - points[j][0],2) + Math.pow(points[i][1] - points[j][1],2);
                  if(map[dis]){
                      boom+=map[dis]*2;
                      map[dis]+=1;
                      
                  }else{
                      map[dis] = 1;
                  }
          }
      }
  }    
  return boom;
};
---------------------------------------------
// deepest-leaves-sum
var deepestLeavesSum = function(root) {
  let queue=[[root]],sum=root.val;
  while(queue.length){
      let curr = queue.shift();
      let temp=[],cSum=0;
      for(let i=0;i<curr.length;i++){
          if(curr[i].left) {temp.push(curr[i].left); cSum+=curr[i].left.val;}
          if(curr[i].right) {temp.push(curr[i].right);cSum+=curr[i].right.val;}
      }
      
      if(temp.length){
          queue.push(temp);
          sum=cSum;
      }else{
          return sum;
      }
  }
  return sum;
};
-------------------------------------------
// find-center-of-star-graph
var findCenter = function(edges) {
  if( (edges[1].indexOf(edges[0][0]))>-1){
      return edges[0][0];
    }else{
       return edges[0][1];
    }
};

---------------------------------------
// tictactoe
var tictactoe = function(moves) {
  const dict = [
    ['00', '01' ,'02'],
    ['10' ,'11', '12'],
    ['20', '21', '22'],
    ['00', '11','22' ],
    ['02', '11' ,'20'],
    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],
 ]
 let isATurn = true;
 const aMap={} ,bMap ={};
 
 for(let i =0;i<moves.length;i++){
     if(isATurn) aMap [String(moves[i][0])+String(moves[i][1])]=1;
     else bMap[String(moves[i][0])+String(moves[i][1])]=1;
     isATurn =  !isATurn;
 }
 let aCount =0, bCount=0;
 for(let i =0; i<dict.length; i++){
     let c1 = 0, c2=0;
     for(let j = 0; j<dict[i].length; j++){
          if(aMap.hasOwnProperty((dict[i][j]))){
              c1++;
          }
         if(bMap.hasOwnProperty((dict[i][j]))){
              c2++;
          }
       
         if(c1 === 3) aCount++;
         if(c2 === 3) bCount++;
     }
 }
 
 if(aCount>bCount) return 'A';
 else if(aCount<bCount) return 'B';
 
 if(moves.length === 9) return 'Draw';
 else return 'Pending';
};
------------------------------
// two sum
var twoSum = function(nums, target) {
  const ind={};
  for(let i =0;i<nums.length;i++){
      if(!ind.hasOwnProperty(nums[i])) ind[nums[i]] = [i];
      else ind[nums[i]].push(i);
  }
  nums = nums.sort((a,b)=>a-b);
  let i=0;j=nums.length-1;
  while(i<=j){
      const sum = nums[i]+nums[j];

     if(sum === target){
         if(nums[i] === nums[j])  return ind[nums[i]];
          else return [ind[nums[i]],ind[nums[j]]];
     }else if(sum > target){
         j--;
     }if(sum < target){
         i++;
     }
  }
};

var twoSum = function(nums, target) {
  const ind={};
  for(let i =0;i<nums.length;i++){
     ind[target-nums[i]] = i;
  }
 for(let i =0;i<nums.length;i++){
     if(ind.hasOwnProperty(nums[i]) && i!== ind[nums[i]]){
         return [i,ind[nums[i]]];
     }
 }
};
----------------------------------
// reverse a number
var reverse = function(x) {
  let str1 = String(Math.abs(x)).split('');
  str1=+(str1.reverse().join(''));
  if(str1 > Math.pow(2,31)) return 0;
  return x< 0 ? -str1 : str1;
};
--------------------------------
//isPalindrome
var isPalindrome = function(x) {
  if(x<0) return false;
  let str = String(x);
  let i=0,j=str.length-1;
  while(i<j){
      if(str[i] === str[j]) {
          i++;j--;
      }else{
          return false;
      }
  }
  return true;
};

-------------------------------
// longest palindrome string
var longestPalindrome = function(s) {
  let result=s[0];
  for(let i = 0; i<s.length; i++){
      const p1 = isPalindrome(s,i,i);
      const p2 = isPalindrome(s,i,i+1);
      if(p1.length>result.length) result = p1;
      if(p2.length>result.length) result = p2;
  }
  
  function isPalindrome(str,left,right){
      let i= left, j= right, res='';
      while(i>=0 && j<= str.length-1){
          if(str[j]!==str[i]) return res;
          else {
              res=str.substring(i,j+1);
               i--;j++;
          }
      }
      return res;
  }
  
  return result;
};
--------------------------------------
// add two linked list

var addTwoNumbers = function(l1, l2) {
  let n1 = traverseAndGetString(l1);
  let n2 = traverseAndGetString(l2);

n3 = String(Number(n1)+Number(n2));

function traverseAndGetString(list){
    let curr = list, n1='';
    while(curr) {
      n1 = Number(curr.val) + n1;
      curr=curr.next
    }
    return n1;
}

let carry = 0, i=n1.length-1, j = n2.length-1;
let sum = +n1[i]+ +n2[j];
 if(sum > 9) {
        carry = Math.floor(sum/10);
        sum=sum%10;
  }
let head = new ListNode(sum);
let curr= head;
i--;j--;

while(i>=0 || j>=0){
    let cSum = Number((+n1[i] || 0) + (+n2[j] || 0));
     cSum= cSum + carry;
    
    if(i=== n1.length-2 && j === n2.length-2) {
        curr = head;
    }
    
    if(cSum > 9) {
        carry = Math.floor(cSum/10);
        curr.next = new ListNode(cSum%10);
   }else{
       curr.next = new ListNode(cSum);
       carry = 0;
   }
    i--;j--;curr=curr.next;
}
if(carry) curr.next = new ListNode(carry);
return head;
};

-------------------------------------------
// find word in matrix

function findPath(board, word, i, j, k) {
  if (k > word.length - 1) { return true; }
  let isFound = false;
  let temp = board[i][j];
  board[i][j] = "."
  if ((i + 1) < board.length && j < board[0].length && board[i + 1][j] === word[k]
  ) {
      isFound = findPath(board, word, i + 1, j, k + 1)

  }
  if (!isFound && i < board.length && (j + 1) < board[0].length && board[i][j + 1] === word[k]) {
      isFound = findPath(board, word, i, j + 1, k + 1)
  }
  if (!isFound && i < board.length && (j - 1) >= 0 && board[i][j - 1] === word[k]) {
      isFound = findPath(board, word, i, j - 1, k + 1)

  }
  if (!isFound && (i - 1) >= 0 && j < board[0].length && board[i - 1][j] === word[k]
  ) {
      isFound = findPath(board, word, i - 1, j, k + 1)

  }
  board[i][j] = temp;
  return isFound;
}
var exist = function(board, word) {
  let k = 0, i = 0, foundFirst = false;
  while (i < board.length) {
      let j = 0;
      while (j < board[0].length) {
          if (board[i][j] === word[0]) {
              if (findPath(board, word, i, j, k + 1)) {
                  return true;
              }
          }
          j++;
      }
      i++
  }
  return false;
};
----------------------------------------------
// zigzag-conversion
var convert = function(s, numRows) {
  let obj = {};
  let p = 1, isZig = false;
  for(let i=0;i<s.length;i++){
      if(p === numRows) isZig=!isZig; 
      if(p === 1 && isZig)  isZig=!isZig;    
      
      if(!obj[p]) obj[p] = s[i];
      else obj[p] = obj[p] + s[i];
      
      if(!isZig) p++;
      else p--;
  }
  let res='';
   for(let i in obj){
      res=res+obj[i];
  }
  return res;
};
---------------------------------------------------
//container-with-most-water
var maxArea = function(height) {
  let i = 0, j = height.length-1, max = -Infinity;
  while(i<j){
      if(height[i]<height[j]) {
          max = Math.max(max, (j-i)*height[i]);
          i++;
      }
      else{
          max = Math.max(max, (j-i)*height[j]);
          j--;
      } 
  }
  return max;
};
-------------------------------
//integer-to-roman
var intToRoman = function(num) {
  const dict = {
      1:'I',4:'IV', 5:'V',9:'IX', 10:'X', 40:'XL',50:'L', 90:'XC', 100:'C', 400:'CD',500:'D', 900:'CM',   1000:'M' };
  
  
  function call(n, res){
      if(dict[n]) return res + dict[n];
      
      const keys =   Object.keys(dict);
      for(let i = keys.length-1 ; i>=0; i--){
          if(n > keys[i]) {
              res = res + dict[keys[i]];
              return call(n-keys[i], res); 
          }
      }
      return res;
  }
  
  return call(num, '');
};

-----------------------------------------
// closest sum to target

var threeSumClosest = function(nums, target) {
  nums=nums.sort((a,b)=>a-b);
  let closest = Infinity;
  
  for(let i = 0; i < nums.length-2; i++){
      let j = i+1; let k = nums.length-1;
      
      while( j < k ){
          let sum = nums[i] + nums[j] + nums[k];
          if(closest === Infinity) closest = sum;
          else if(Math.abs(sum-target) <  Math.abs(closest - target) ) closest = sum;
          if(sum < target) j++; 
          else k--;
      }
  }
  return closest;
};
-----------------------------------------
// letter-combinations-of-a-phone-number
var letterCombinations = function(digits) {
  if(!digits) return [];
   const dict = {
      2: ['a','b','c'],
      3: ['d','e','f'],
      4: ['g','h','i'], 
      5: ['j','k','l'],
      6: ['m','n','o'],
      7: ['p','q','r','s'],
      8: ['t','u','v'],
      9: ['w','x','y','z']
  };
  let out = dict[digits[0]];
  for(let i=1; i < digits.length; i++) {
      out= concat(out, dict[digits[i]]);
  }
  
  function concat(arr1, arr2 ){
      let res=[];
      for(let i = 0; i< arr1.length; i++){
          for(let j = 0; j<arr2.length; j++){
               res.push(arr1[i]+arr2[j]);
          }
      }
      return res;
  }
  
  return out;
};
--------------------------------------
// Four sum
var fourSum = function(nums, target) {
  nums= nums.sort((a, b) => a-b);
  let i =0; let result = {};
  
  while(i < nums.length - 3 ){
      let j = i+1;
      while(j < nums.length - 2){
           let k=j+1 , l = nums.length-1;
          while(k < l) {
              let sum = nums[i] + nums[j] + nums[k] + nums[l];
              
              if(sum < target) k++;
              else if(sum > target ) l--;
              else {
                 result[[nums[i] +','+ nums[j]+','+ nums[k]+','+nums[l]]] = [nums[i],nums[j],nums[k],nums[l]];
                  k++;l--;
              }
          }
          j++;
      }
      i++;
  }
  return Object.values(result);
};
-------------------------------------------
// delete last nth node linkedlist
var removeNthFromEnd = function(head, n) {
  let len = 0;
  let curr = head;
  while(curr){
      len++;
      curr = curr.next;
  }
  const toRemoveInd = len - n;
  if(toRemoveInd == 0)   return head = head.next;
  curr = head; let count = 0;
  while(curr){
      count++;
      if(count === toRemoveInd){
          curr.next = curr.next?.next || null;
          break;
      }
      curr = curr.next;
  }
  return head;
};
-----------------------------------------
// valid-parentheses
var isValid = function(s) {
  const dict = { ')':'(',']':'[','}':'{' };
  let arr =[]
  for(let i = 0;i<s.length;i++){
      if(s[i] === '(' || s[i] === '[' || s[i] ==='{'){
         arr.push(s[i]);
      }else{
         if(arr[arr.length-1] === dict[s[i]]){
             arr.pop()
         }else return false;
      } 
  }
  return arr.length === 0;
};
-----------------------------------
// deepest leaves sum
var deepestLeavesSum = function(root) {
  let queue=[[root]],sum=root.val;
  while(queue.length){
      let curr = queue.shift();
      let temp=[],cSum=0;
      for(let i=0;i<curr.length;i++){
          if(curr[i].left) {temp.push(curr[i].left); cSum+=curr[i].left.val;}
          if(curr[i].right) {temp.push(curr[i].right);cSum+=curr[i].right.val;}
      }
      
      if(temp.length){
          queue.push(temp);
          sum=cSum;
      }else{
          return sum;
      }
  }
  return sum;
};
--------------------------------------
// SWAP Pairs
var swapPairs = function(head) {
  let curr = head, prev = new ListNode(null);
  while(curr?.next){
        let temp = curr.next.next;
        prev.next = curr.next;
        curr.next.next = curr;
        curr.next = temp;
        curr = prev.next;
        if(curr.next === head) head = curr;
        prev = curr.next;
        curr = curr.next.next;
  }
 return head;
};
--------------------------------------------
//divide-two-integers
var divide = function(dividend, divisor) {
  let sign = '-';
  
   if(dividend < 0 === divisor < 0) sign = '';
  
   dividend = Math.abs(dividend);
   divisor = Math.abs(divisor);
   if(divisor === 1 && ( dividend < Math.pow(2,31)-1 && dividend > -Math.pow(2,31))) return sign + dividend;

 let count = 0;
while(dividend >= divisor){
    let cSum = divisor, mul=1; 
    
    while((cSum + cSum) <= dividend) {
       cSum=cSum + cSum;
       mul = mul + mul; 
    }
    dividend = dividend-cSum;
    count = count + mul;
}
  count = sign + count;
  if(count > (Math.pow(2,31)-1)) return Math.pow(2,31)-1;
  if(count < -Math.pow(2,31)) return -Math.pow(2,31);
  
  return count;
};
--------------------------------------------
//next-permutation
var nextPermutation = function(nums) {
    
  function swap(i,j,arr){
      let temp = arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
  }
  function reverse(start,end, arr){
      while(start<end){
          swap(start,end,arr);
          start++;end--;
      }
  }
  let i = nums.length-2, prev = nums.length-1;
  let mutationInd=-1;
  while(i>=0){
      if(nums[i]<nums[prev]){
          mutationInd = i;
          break;
      }
      i--;prev--;
  }
  if(mutationInd === -1) return nums.sort((a,b)=>a-b);
  // find number which is closest greater to nums[i] from i+1 to nums.length;
  for(let j=nums.length-1; j>mutationInd; j--){
      if(nums[j]>nums[mutationInd]) {
          swap(j,mutationInd, nums);
          break;
      }
  }
  reverse(prev,nums.length-1,nums);
  return nums;
};
----------------------------------
//search-in-rotated-sorted-array
var search = function(nums, target) {
  let start = 0, end = nums.length-1;
  
  while(start >=0 && end <= nums.length-1 && start <= end){
      let mid = Math.floor((start + end)/2);
      
      if(target === nums[start]) return start;
      if(target === nums[end]) return end;
      if(target === nums[mid]) return mid;
      
      if(target < nums[mid]){
          if(target < nums[start]) start= start+1;
          else end= mid-1;
      }else{
           if(target > nums[end]) end = end-1 ;
           else start= mid+1;          
      }
  }
  return -1;
};
----------------------------------------------
//find-first-and-last-position-of-element-in-sorted-array
var searchRange = function(nums, target) {
  let start = 0, end= nums.length-1;let mid = -1;
  
  while(start>=0 && end< nums.length && start<=end){
       mid = Math.floor((start+end)/2);
      if(target===nums[mid]) break;
      if(target<nums[mid])end=mid-1;
      else start=mid+1;
  }
  start = mid , end = mid;
  while( end < nums.length && start >=0){
      if(nums[start-1] !== target && nums[end+1] !== target )break;
      if(nums[start-1] === target ) start--;
      if(nums[end+1] === target) end++;
  }
  return nums[mid] === target ? [start,end] :[-1,-1];
};
----------------------------------------------
//valid-sudoku
var isValidSudoku = function(board) {
  let c = board[0].length, r = board.length;
  let map={boxes:{}};let box = 1;
  
  for(let i = 0; i<r; i++){
      for(let j = 0; j<c; j++){
           if(i!==0 && i%3 === 0 && j == 0){
               map.boxes={}
               box = 1;
           } 
           if(j!==0 && j % 3 === 0) box++ ;
           if(j===0) box = 1
          
          if(board[i][j] !== '.'){
              let cRow = i+'_r';
              let cCol = j + '_c';
              let cBox = box+'_box'

              // push into row
              if(!map[cRow]) map[cRow] = {};
              if(!map[cRow].hasOwnProperty(board[i][j]))  map[cRow][board[i][j]]=1
              else return false;

              // push into column
              if(!map[cCol]) map[cCol] = {};
              if(!map[cCol].hasOwnProperty(board[i][j]))  map[cCol][board[i][j]]=1
              else return false;

              // push into box
              if(!map.boxes[cBox]) map.boxes[cBox] = {};
              if(!map.boxes[cBox].hasOwnProperty(board[i][j]))  map.boxes[cBox][board[i][j]]=1
              else return false; 
              
          }
      }
  }
  return true;
};
----------------------------------------
//count-and-say
var countAndSay = function(n) {
  let str='1', newStr = '1';
  for(let i=2;i<=n; i++){
      newStr = say(str);
      str = newStr;
  }
  return str;
  function say(str){
      let i=0;let count = 1, res='';
      while(i<str.length){
          if(str[i]!==str[i+1]){
              res= res + count + str[i];
              count=1;
          }else count++;    
          i++;
      }
      return res;
  }
};
--------------------------------
// combination-sum
var combinationSum = function(candidates, target) {
  let out=[];
  function pushRepeatedSum(arr, start, target, tempArr){
      if(target<0) return;
      if(target===0) {
        out.push([...tempArr])
        return;
      }else{
      for(let i = start; i<arr.length; i++){
            if(target- arr[i]>=0){
                  pushRepeatedSum(arr, i, target- arr[i], [arr[i],...tempArr]);
            }
        }
       if(tempArr) tempArr.pop();
      }
      return out;
    }
  return pushRepeatedSum(candidates, 0,target,[]);
};
---------------------------------------------
// combination-sum-ii/
var combinationSum2 = function(candidates, target) {
  let out=[];
  candidates = candidates.sort((a,b)=>a-b);   
  
  function backTrack(result, sum, start){
      if(sum===0) out.push(result);
      if(sum>=0){
          for(let i=start;i<candidates.length;i++){
              if(i !== start && candidates[i] === candidates[i-1] )continue;
              if(sum-candidates[i] >= 0 ) backTrack([...result, candidates[i]], sum-candidates[i], i+1);
          }
      }
      return out;
  }
  
  backTrack([],target,0);
  return out;
};
--------------------------------------
//multiply-strings
var multiply = function(num1, num2) {
  let arr = new Array(num1.length+num2.length).fill(0);
  for(let i = num1.length-1; i>=0; i--){
      let carry=0,temp=0,s='';
      for(let j = num2.length-1;j>=0; j--){
          let mul =   arr[i+j+1] + carry + num1[i]*num2[j];
          let digit= mul%10;
          carry = Math.floor(mul/10);
          arr[i+j+1] = digit ;
      }
      arr[i] = arr[i]+carry;
  }
  return arr.join('').slice(1);
};
---------------------------------
//permutations
var permute = function(nums) {
  if(nums.length === 0) return [[]];
  if(nums.length === 1) return [nums];
  if(nums.length === 2) return [[nums[0],nums[1]],[nums[1],nums[0]]];
    
  const result = nums.reduce(function(res, item, i){
             const nextPerm = permute([...nums.slice(0,i), ...nums.slice(i+1)]);
             const tempArr = nextPerm.map((item)=> [nums[i],...item]);
          return res.concat(tempArr);
      }, []);
      
   return result;
};
---------------------------------
//rotate-image
var rotate = function(matrix) {
  let m = matrix.length;
  let i=0,j=0;
  let n = 0; // no. of iterations
  
  let k = m; // end
  let p=0; // start
  
  while(n < (m/2)){
      let arr=[];
  
      // traverse left to right
      let c=0
      while(j<k && j>=p){
              let temp=matrix[i][j];
              matrix[i][j] = arr[c] ? arr[c]:matrix[i][j];
              arr[c] = temp;
              j++;c++;
      }
      j--;
      
      // traverse top  to bottom
      c=0;
      while(i<k && i>=p){
              let temp=matrix[i][j];
              matrix[i][j] = arr[c];
              arr[c] = temp;
              i++;c++
      }
      i--;
      
      // traverse right to left
      c = 1;
      j=j-1;
      while(j>=p && j <=k){
              let temp=matrix[i][j];
              matrix[i][j] = arr[c];
              arr[c] = temp;
              j--;c++;
      }
      j++;
      
      // traverse bottom to top
      c=1;
      i=i-1;
      while(i>=p && i<=k){
              let temp=matrix[i][j];
              matrix[i][j] = arr[c];
              arr[c] = temp;
              i--;c++;
      }
      i++;
    
      // update left to right
      c=1;
      j++;
      while(j>=p && j < k){
              let temp=matrix[i][j];
              matrix[i][j] = arr[c];
              arr[c] = temp;
              j++;c++;
      }
      j--;
      
      n++; i++; j=i;  // i,j= inner matrix
      k--; p++; // update start and end points
  }
};                 
-------------------------------
//group-anagrams
var groupAnagrams = function(strs) {
  let map={};
  for(let i=0;i<strs.length;i++){
      let s = strs[i].split('').sort().join('');
      if(!map[s]) map[s] = [strs[i]];
      else map[s].push(strs[i]);
  }
  return Object.values(map);
};
--------------------------------------
// powx-n
var myPow = function(x, n) {
  if(n===0) return 1;
  if(n===1) return x;
  let sign = n<0 ?'-':'';
  n = Math.abs(n);
  if(n%2 === 0) {
      let res = myPow(x,n/2);
      return sign === '-' ? 1/(res*res) : res*res;
  }else {
      n = n-1;
      return sign === '-' ? 1/(x*myPow(x,n)) : x*myPow(x,n);
  } 
};
-----------------------------------------
//spiral-matrix
var spiralOrder = function(matrix) {
  let m = matrix.length, n=matrix[0].length;
  let out =[];
  let rStart = 0,rEnd=m,cStart=0, cEnd = n;
  let k =1;
  let steps = m<n?m:n;
  while(k <= Math.ceil(steps/2)){
      let i=rStart, j=cStart;
      
      //left to right
      while(j>=cStart && j< cEnd){
          out.push(matrix[i][j]);
          j++;
      }
      rStart++;
     
      if(rStart === rEnd)break;
      
      //top to bottom
       i++;j--;
       while(i>=rStart && i< rEnd){
          out.push(matrix[i][j]);
          i++;
      }
      cEnd--;
      if(cEnd === cStart)break;
      
      //right to left;
      j--;i--;
      while(j>=cStart && j<cEnd){
          out.push(matrix[i][j]);
          j--;
      }
      rEnd--;
      
      
      //bottom to top
      i--;j++;
       while(i>=rStart && i<rEnd){
          out.push(matrix[i][j]);
          i--;
      }
      cStart++;
      
      k++;
  }
  return out;
};
------------------------------
//merge-intervals/
var merge = function(intervals) {
  intervals = intervals.sort((a,b)=>a[0]-b[0]);
  let i = 1,res=[];
  let curr = intervals[0];
  while(i<intervals.length){
      if(intervals[i][0]<=curr[1]){
          curr = [curr[0],Math.max(curr[1],intervals[i][1])];
      }else{
         res.push(curr);
         curr = intervals[i];
      }
      i++;
  }
  res.push(curr);
  return res;
};
------------------------------------------------
// insert interval
const isOverLap = function(int1,int2){
  if((int2[0]>=int1[0] && int2[0]<=int1[1]) || (int2[1]>=int1[0] && int2[1]<=int1[1])  || (int2[0]<=int1[0] && int2[1]>=int1[1])){
      return true;
  }
  return false;
}

const mergeInterval = function(itr1,itr2){
  return [Math.min(itr1[0],itr2[0]), Math.max(itr1[1],itr2[1])];
}

var insert = function(intervals, newInterval) {
  let ind1 = -1, ind2 = -1;
  let overlap =[];
  
  if(!intervals.length) return [newInterval];
  
  if(newInterval[1]<intervals[0][0]) {
     intervals.unshift(newInterval); return intervals; 
  }
  
  if(newInterval[0]>intervals[intervals.length-1][1]) {
     intervals.push(newInterval); return intervals; 
  }
  
  intervals.push(newInterval);
  intervals.sort((a,b)=>a[0]-b[0]);
  
  for(let i=0;i<intervals.length-1;i++){
       if( isOverLap(intervals[i], intervals[i+1])){
           intervals[i] = mergeInterval(intervals[i], intervals[i+1]);
           intervals.splice(i+1,1);
           i--;
       };
  }
  return intervals.sort((a,b)=>a[0]-b[0]);
};
-----------------------------------
// rotate-list
var rotateRight = function(head, k) {
  if(!head || k===0) return head;
  let curr = head; let length=1;
  while(curr.next){
      length++;
      curr=curr.next;
  }
  if(k>=length) k=k%length;
 
   while(k>0){
       let curr = head; 
       while(curr.next){
           if(!curr.next.next){
               let temp = curr.next;
               curr.next= null;
               let cHead = head;
               head =  temp;
               temp.next = cHead;
           }else curr=curr.next;
       }
      k--;
   }
   return head;
};
-------------------------------
// unique-paths
var uniquePaths = function(m, n) {
  let a1 = new Array(n).fill(0);
  let a2 = new Array(m).fill(a1);
  
  
  for(let i=1;i<m;i++){
      for(let j=1;j<n;j++){
          a2[i][j]= a2[i-1][j] + a2[i][j-1] + 1;
      }
  }
  return a2[m-1][n-1] + 1;
};
-----------------------------------------
// generate spiral-matrix-ii
var generateMatrix = function(n) {
  // let a1 = new Array(n).fill('x');
   let a2 = new Array()
   for(let i=0;i<n;i++){
       a2.push(new Array(n).fill('x'));
   };
   
   let k =0;
   let rS = 0, rE = n-1, cS=0, cE=n-1;
   let count = 1;
   while(k <= Math.floor(n/2)){
       
       //left to right
       let i=cS;
       while(i<=cE){
           a2[rS][i] = count;
           i++;count++;
       }
   
       //top to bottom
       rS++;
       i = rS;
       while(i<=rE){
           a2[i][cE] = count;
           i++;count++;
       }
   
    //right to left
       cE--;
       i = cE;
       while(i>=cS){
           a2[rE][i] = count;
           i--;count++;
       }
   
   //bottom to top
       rE--;
       i = rE;
       while(i>=rS){
           a2[i][cS] = count;
           i--;count++;
       }
       cS++;

   k++;
   }
   return a2;
};
------------------------------------------------------
// sort arrays 0's, 1's and 2's
function swap(ind1,ind2,arr){
  let temp= arr[ind2];
  arr[ind2] = arr[ind1];
  arr[ind1]=temp;
  return arr;
}

var sortColors = function(arr) {
     let start=0, end= arr.length-1, mid=Math.floor(arr.length/2);
  let isLeft = true;
  
 while(start<=mid && mid <= end){

   if(arr[start]>arr[mid]){
     arr = swap(start,mid, arr);
   }

   if(arr[end] < arr[mid]){
     arr = swap(end, mid, arr);
   }

   
    while(arr[start]===0)start++;
    while(arr[end]===2) end--;
   
   if(arr[start]<=arr[mid] && arr[mid]<=arr[end] && arr[mid]===1 && isLeft ) mid--;
   if(arr[start]<=arr[mid] && arr[mid]<=arr[end] && arr[mid]===1 && !isLeft ) mid++;
   
   if(mid<start) {
     mid = start+1;
     isLeft = false;
   }
  
 }
  return arr;
};
-----------------------------------------------------
// right image of binary tree
var rightSideView = function(root) {
  if(!root) return [];
  let levelArr=[[root]]; 
  let dataLevelArr = [[root.val]];
  let result = [root.val];
  
  while(levelArr.length){
      let curr = levelArr.shift();
      let currLevelArr = [];let currDataLevelArr=[];
      
      for(let i=0;i<curr.length;i++){
          if(curr[i].left) {
              currLevelArr.push(curr[i].left);
              currDataLevelArr.push(curr[i].left.val);
          }
          if(curr[i].right) {
              currLevelArr.push(curr[i].right);
              currDataLevelArr.push(curr[i].right.val); }
      }
      if(currLevelArr.length){
          levelArr.push(currLevelArr);
          dataLevelArr.push(currDataLevelArr);
          result.push(currDataLevelArr[currDataLevelArr.length-1]);
      }
  }
  return result;
};
----------------------------------------------------
// clone graph
var cloneGraph = function(node) {
  let visited={};
  if(!node) return null;
  
  function dfs(node){
      if(visited[node.val]) return visited[node.val];
      else{
          let newNode = new Node(node.val, []);
          visited[newNode.val] = newNode;
          
          if(node.neighbors && node.neighbors.length) {
                 for(let i=0;i< node.neighbors.length; i++){
                  newNode.neighbors.push(dfs(node.neighbors[i]));
              }
          }
          return newNode;
      }
  }
  
  return dfs(node);
};
--------------------------------------------
// Topological sort- not optimal solution
var canFinish = function(numCourses, prerequisites) {
  let map ={}, visited={}, stack=[], result=[],out=true;
 
  // create a map
  for(let i=0;i<prerequisites.length;i++ ){
      if(!map.hasOwnProperty(prerequisites[i][0])) map[prerequisites[i][0]]=[prerequisites[i][1]];
      else map[prerequisites[i][0]].push(prerequisites[i][1]);
  }
  console.log('map',map);
  
  // traverse a map
      for(let i in map){
         if(!visited.hasOwnProperty(i)){
             findSort(+i);
             visited[i]=1;
             stack.push(+i);
         }
      }

      function findSort(curr){
          if(map.hasOwnProperty(curr)){
               if(result.indexOf(curr)!==-1) {
                   out=false ;return;
               }
               else result.push(curr);
             // console.log('result',result,curr);
              for(let i=0;i<map[curr].length;i++){
                  if(!visited[map[curr][i]]){
                      findSort(map[curr][i]);
                      stack.push(map[curr][i]);
                      visited[map[curr][i]]=1;
                      result.pop();
                  }
              }
          }
      }
  //console.log('stack',stack);
  return out;
}
---------------------------------------------
//course-schedule
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let map ={},  result=[],removedEdges=0;
  let innerEdges = new Array(numCourses).fill(0);
  
  // create a map of adjacency list
  for(let i=0;i<prerequisites.length;i++ ){
      const [first,second] = prerequisites[i];
      if(first === second) return false; // self cycle
      if(!map.hasOwnProperty(first)) map[first]=[second];
      else map[first].push(second);
      innerEdges[second]++;
  };
  
  let q=[];
  for(let i=0; i< innerEdges.length;i++){
      if(innerEdges[i]===0){
          q.push(i);
      };
  }
  
  while(q.length){
      //console.log('q',q);
        let c = q.shift();
        removedEdges++;
      if(map.hasOwnProperty(c)){
        for(let i = 0; i<map[c].length;i++){
            innerEdges[map[c][i]]--;
            if(innerEdges[map[c][i]]===0) q.push(map[c][i]);
        }
      }
  }
 // console.log('map',map,innerEdges,q, removedEdges);
  
  return removedEdges === numCourses;
}
