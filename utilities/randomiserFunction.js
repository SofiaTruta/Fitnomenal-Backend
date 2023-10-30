export function randomiser(arr) {
  
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];
  return randomElement;
}

export function randomExtra(arr) {
  const dailyWorkoutArr = [];

  for (let i = 0; i < 4; i++) { 
    const random = Math.floor(Math.random() * arr.length);
    dailyWorkoutArr.push(arr[random]);
    arr.splice(random, 1);
  }

  return dailyWorkoutArr;
}

