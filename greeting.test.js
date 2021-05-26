const greet = require('./greeting');

describe ('test greet () ', function () {
    it('should greet name', function (){
        expect (greet('Calvin')).toEqual('Hello, Calvin');
    });

    it('should handle null value', function(){
        expect (greet()).toEqual('Invalid Entry!');
    });

    it('should handle uppercase greeting', function(){
        expect (greet('CALVIN')).toEqual('HELLO CALVIN!');
    });

    it('should handle 2 names', function(){
        expect(greet(['Calvin', 'Isabella'])).toEqual('Hello, Calvin, Isabella');
    });

    it('should handle multiple names', function(){
        expect(greet(['Calvin', 'Isabella', 'Irene', 'Winston', 'Vera'])).toEqual('Hello, Calvin, Isabella, Irene, Winston, Vera');
    });

});