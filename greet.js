function greet(name){
    if(name == null) {
        return 'Hello, my friend.'
    }else if (name.constructor !== Array && name == name.toUpperCase()){
        return `HELLO ${name.toUpperCase()}!`;
    }else if (name.constructor == Array){
       if(name.length > 2){
            str = name.slice(0, -1).join(', ') + ', and ' + name.slice(-1);
            return `Hello, ${str}.`
       }
        return `Hello, ${name.join(" and ")}.`
    }
    return `Hello, ${name}.`;
}

module.exports = greet;