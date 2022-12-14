"5 kyu(Medium-)"

function moveZeros(arr) {
    let newArr = arr.filter(e => e!==0);
    
    let zeroArr = arr.filter(e => e===0);
    
    const finalArr = [...newArr, ...zeroArr];
    
    return finalArr;
  }

"Ideal Solution"

function moveZeros(arr) {
    return arr.filter(e => e!==0).concat(arr.filter(e => e === 0));
  }

  /* Description

  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] 

*/

/* Tests

const {assert, config} = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  });
});

*/