const { step } = require('./index.js');

describe('testing game', () => {
    
    test('all-zero board is unchanged', () => {
        const startingBoard = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ];
       expect(step(startingBoard)).toBe(startingBoard);
    });
});
