export function randomiser() {
    const dailyWorkoutArr = []
            for(let i = 0; i < 10; i++){
              const random = Math.floor(Math.random()*exercises.length)
              dailyWorkoutArr.push(exercises[random])
              exercises.splice(random, 1)
            }
      return dailyWorkoutArr
}