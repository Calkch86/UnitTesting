import greet from './greeting';

describe ('test greet () ', function () {
    it('should greet name', function (){
        expect (greet('Calvin')).toEqual('Hello, Calvin');
    });

    it('should handle null value', function(){
        expect (greet()).toEqual('Invalid Entry!');
    });

    it('should handle uppercase greeting', function(){
        expect (greet('CALVIIN')).toEqual('HELLO CALVIN!');
    });
})