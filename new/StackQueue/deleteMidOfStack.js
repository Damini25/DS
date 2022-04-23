//Link- https://practice.geeksforgeeks.org/problems/delete-middle-element-of-a-stack/1/#
deleteMid(s, sizeOfStack);
{
    let mid = Math.ceil((sizeOfStack + 1) / 2);
    let newStack = new Stack();
    for (let i = 1; i < mid; i++) {
        newStack.push(s.top());
        s.pop();
    }
    s.pop(); // delete mod elem;
    while (!newStack.empty()) {
        s.push(newStack.top());
        newStack.pop();
    }
    return s;
}

// *************** solution -2 ***********************

//Function to delete middle element of a stack.
deleteMid(s, sizeOfStack);
{
    let mid = Math.ceil(sizeOfStack / 2) - 1;
    let newStack = new Stack();

    for (let i = sizeOfStack - 1; i > mid; i--) {
        newStack.push(s.top());
        s.pop();
    }

    s.pop(); // delete mod elem;
    while (!newStack.empty()) {
        s.push(newStack.top());
        newStack.pop();
    }
    return s;
}
