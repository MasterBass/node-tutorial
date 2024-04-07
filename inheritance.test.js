var expect = require('chai').expect;
var employee = require('./inheritance');

describe('Inharitance test', () => {

    const emp = new employee("Peter", "23", "Google");
    it('check if employee has Company property', () => {
        expect(emp).to.be.a('object');
        expect(emp).to.have.property('company').with.lengthOf(6);
    });

    it('check if employee Company is Google', () => {
        expect(emp).to.be.a('object');
        expect(emp.company).to.equal('Google');
    });
});