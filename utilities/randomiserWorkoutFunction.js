export default function randomizeTwoFromArray(arr) {
    if (arr.length < 2) {
      throw new Error('Array must contain at least two values.');
    }
  
    const randomIndexes = [];
  
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * arr.length);
  
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
  
    // Get the values at the selected indexes
    const [firstValue, secondValue] = randomIndexes.map(index => arr[index]);
  
    return [firstValue, secondValue];
  } 