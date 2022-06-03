/**
 * Link- https://leetcode.com/problems/lru-cache/
 */

function DoublyLLNode(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
};

var LRUCache = function (capacity) {
    this.cache = {};
    this.head = null;
    this.tail = null;
    this.maxCapacity = capacity;
    this.size = 0;
};

LRUCache.prototype.insertAtFirst = function (node) {
    if (!this.head) {
        this.head = node;
        this.tail = node;
        this.head.next = null;
        this.tail.prev = null;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.head.prev = null;
    }
    return node;
}

LRUCache.prototype.deleteNode = function (node) {
    let prev = node.prev;
    if (prev) {
        if (node.next) {
            prev.next = node.next;
            prev.next.prev = prev;
        }
        else { // delete tail
            prev.next = null;
            this.tail = prev;
        }
    } else {  // delete head
        let next = node.next;
        if (next) next.prev = null;
        this.head = next;
    }
}

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
    if (!this.cache.hasOwnProperty(key)) return -1;

    const node = this.cache[key];
    this.deleteNode(node);
    const newNode = this.insertAtFirst(node);
    this.cache[key] = newNode;

    return node.val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
    if (this.cache.hasOwnProperty(key)) {

        let cNode = this.cache[key];
        this.deleteNode(cNode);
        cNode.val = value;
        const newNode = this.insertAtFirst(cNode);
        this.cache[key] = newNode;

    } else {
        const node = new DoublyLLNode(key, value);

        if (this.size >= this.maxCapacity) {
            delete this.cache[this.tail.key];
            this.deleteNode(this.tail);
            this.size--;
        }
        const newNode = this.insertAtFirst(node);
        this.cache[key] = newNode;
        this.size++;
    }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/