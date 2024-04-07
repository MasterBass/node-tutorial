var expect = require('chai').expect;

const solution = (a) => {
    let max = 0;
    let arr = [];
    let acc = 0;
    for(let i = a.length - 1; i > -1; i--) {
        arr[i] = a[i] + acc;
        acc = (Math.floor((a[i] + acc)/2));
    }
    acc = 0;
    for(let i = 0; i < a.length; i++) {
        if(arr[i] + acc > max) {
            max = arr[i] + acc;
        }
        acc = (Math.floor((a[i] + acc)/2));
    }
    return max;
};


describe('Spooktober test', () => {

    it('check for [2,3,1,3]', () => {
        expect(solution([2,3,1,3])).to.equal(5);
    });


    it('check for [3,7,0,5]', () => {
        expect(solution([3,7,0,5])).to.equal(9);
    });

    it('check for [5,0,7,3]', () => {
        expect(solution([5,0,7,3])).to.equal(9);
    });

    it('check for [1,1,1,1,1]', () => {
        expect(solution([1,1,1,1,1])).to.equal(1);
    });

    it('check for []', () => {
        expect(solution([])).to.equal(0);
    });
    it('check for [0,0]', () => {
        expect(solution([0,0])).to.equal(0);
    });
    it('check for [3,3,3,3,3,3,3,3]', () => {
        expect(solution([3,3,3,3,3,3,3,3])).to.equal(7);
    });
});