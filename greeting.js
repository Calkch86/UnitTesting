function greet(name) {
    if (name === null || name === undefined) return 'Invalid Entry!';
    
    if (typeof name === typeof []) {
        if (name.length > 0) {
          let names = '';
          name.forEach((elm) => {
            names += ', ' + elm;
          });
          return 'Hello' + names;
        }
        return 'Invalid Entry!';
    }

    if (name === name.toUpperCase()){
        return 'HELLO ' + name + '!';
    }

    return 'Hello, ' + name;
}
module.exports = greet;