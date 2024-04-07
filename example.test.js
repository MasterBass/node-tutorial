const expect = require('chai').expect;

describe('Our example test', () => {

    it('it should works as expects', () => {
        const foo = 'bar'
            , beverages = {tea: ['chai', 'matcha', 'oolong']};

        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.lengthOf(3);
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    });
});