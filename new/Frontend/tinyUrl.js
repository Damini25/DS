// this JavaScript compiler uses the Node engine 
// use console.log(variable) to debug the code 

function urlShortner(){
    const map = {}; 
    
    function createTinyUrl(url) {
        const urlArray = url.split('/');
        const cPath = urlArray[1];  // /pay
        const encryptedPath = btoa(cPath);
        
        map[cPath] = {
            url,
            tinyUrl: encryptedPath
        }
        console.log('map', map);
        
        return 'airtel.in/' + map[cPath].tinyUrl;
    }
    
    function getActualUrl(tinyUrl){
       const urlArray = tinyUrl.split('/');
       const encryptedPath = urlArray[1];
        
       const decryptedCPath = atob(encryptedPath);
        
        if(map.hasOwnProperty(decryptedCPath)){
            return map[decryptedCPath].url;
        }
    }
    
    return {
        createTinyUrl,
        getActualUrl
    }
}

const _urlshortner = urlShortner();
const url =  'airtel.in/pay/data=xxxxxxxxccccccchkjjkhkjkb,hkjhkjhjbjhkjhkjhkjhkjhkj';
const tinyUrl = _urlshortner.createTinyUrl(url);
console.log('tinyUrl',tinyUrl)

const actualUrl = _urlshortner.getActualUrl(tinyUrl);

console.log('actualUrl',actualUrl);

