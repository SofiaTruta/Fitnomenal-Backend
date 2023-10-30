import randomizeTwoFromArray from "./randomiserWorkoutFunction";

export default function fullBodyRandom (){
    const upperBody = randomizeTwoFromArray(["back", "chest", "upper arms", "lower arms", "shoulders", "cardio"])
    const lowerBody = randomizeTwoFromArray(["upper legs", "lower legs", "waist"])
    console.log(upperBody, lowerBody);
}