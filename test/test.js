describe('pairwise', function(){
    it('Should return a number which is the sum of the indexes of all non repeating two combinations that add up to the requested number if there are no duplicate numbers.', function(){
        expect(pairwise([1,4,2,3,0,5], 7)).toEqual(11);
    });
    it('Should return a number which is the sum of the indexes of all non repeating two combinations that add up to the requested number', function(){
        expect(pairwise([1, 1, 1], 2)).toEqual(1);
    });
    it('Should return true', function(){
        expect(returnTrue("derp")).toEqual(true);
    });


});







