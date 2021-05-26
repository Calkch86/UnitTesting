function Greet (name) {
    if (name === null || name === undefined) return 'Invalid Entry!';

    if (name === name.toUpperCase()){
        return 'HELLO ' + name + '!';
    }
    
    return 'Hello, ' + name;
}