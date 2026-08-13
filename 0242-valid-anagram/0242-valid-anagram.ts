function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const map = new Map<string,number>();

    for(const pointer of s){
        map.set(pointer,(map.get(pointer) || 0)+1);
    }

    for(const pointer of t){
        if(map.has(pointer)){
            const value = map.get(pointer)-1;
            if(value === 0){
                map.delete(pointer);
            }else{
                map.set(pointer,value);
            }
        }
        else 
            return false;
    }

    return map.size === 0;
};