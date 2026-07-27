function isValid(s: string): boolean {
    let stack = [];

    let i = 0;

    while(i!=s.length){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i]);
        }else{
            if(stack.length === 0) return false;
            let topVal = stack.pop();
            if(
                (topVal === '(' && s[i] !== ')')||
                (topVal === '[' && s[i] !== ']')||
                (topVal === '{' && s[i] !== '}')
            ){
                return false;
            }
        }
        i++;
    }
    return stack.length === 0;
};