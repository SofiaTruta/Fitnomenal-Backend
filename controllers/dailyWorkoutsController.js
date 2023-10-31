import { fetchWorkout } from "../utilities/fetchFunction.js";
import randomizeTwoFromArray from "../utilities/randomiserWorkoutFunction.js"
import { randomiser, randomExtra } from "../utilities/randomiserFunction.js";

async function upperBody() {
    try {
        const back = await fetchWorkout('back', 10)
        const chest = await fetchWorkout('chest', 10)
        const upperArms = await fetchWorkout('upper arms', 10)
        const lowerArms = await fetchWorkout('lower arms', 10)
        const shoulders = await fetchWorkout('shoulders', 10)
        const cardio = await fetchWorkout('cardio', 20)
        return [
            back,
            chest,
            upperArms,
            lowerArms,
            shoulders,
            cardio
        ]
    } catch (error) {
        console.error('Error fetching workouts:', error);
    }

}
async function lowerBody() {
    try {
        const upperLegs = await fetchWorkout('upper legs', 10);
        const lowerLegs = await fetchWorkout('lower legs', 10);
        const waist = await fetchWorkout('waist', 10);
        const cardio = await fetchWorkout('cardio', 20);
        return [
            upperLegs,
            lowerLegs,
            waist,
            cardio
        ]
    } catch (error) {
        console.error('Error fetching workouts:', error);
    }
}
async function fullBody() {
    const upperBody = randomizeTwoFromArray(["back", "chest", "upper arms", "lower arms", "shoulders"]);
    const lowerBody = randomizeTwoFromArray(["upper legs", "lower legs", "waist"]);
    const cardio = "cardio";  // Add cardio category

    try {
        const upperBodyWorkouts0 = await fetchWorkout(upperBody[0], 10);
        const upperBodyWorkouts1 = await fetchWorkout(upperBody[1], 10);
        const lowerBodyWorkouts0 = await fetchWorkout(lowerBody[0], 10);
        const lowerBodyWorkouts1 = await fetchWorkout(lowerBody[1], 10);
        const cardioWorkout = await fetchWorkout(cardio, 20);

        return [
            upperBodyWorkouts0,
            upperBodyWorkouts1,
            lowerBodyWorkouts0,
            lowerBodyWorkouts1,
            cardioWorkout,
        ]
    } catch (error) {

    }
}

export async function cardio() {
    try {
        const cardio = await fetchWorkout('cardio', 20)
        return cardio
    } catch (error) {
        console.error('Error fetching workouts:', error);
    }

}

export default async function choice(req, res) {
    const choice = req.body
    
    if (choice === 'FullBody') {
        try {
            const fullBodyData = await fullBody();
            const workouts = fullBodyData.flat()

            const upperBodyWorkouts0 = [workouts[0], workouts[1], workouts[2], workouts[3], workouts[4], workouts[5], workouts[6], workouts[7], workouts[8], workouts[9]]
            const upperBodyWorkouts1 = [workouts[10], workouts[11], workouts[12], workouts[13], workouts[14], workouts[15], workouts[16], workouts[17], workouts[18], workouts[19]]
            const lowerBodyWorkouts0 = [workouts[20], workouts[21], workouts[22], workouts[23], workouts[24], workouts[25], workouts[26], workouts[27], workouts[28], workouts[29]]
            const lowerBodyWorkouts1 = [workouts[30], workouts[31], workouts[32], workouts[33], workouts[34], workouts[35], workouts[36], workouts[37], workouts[38], workouts[39]]
            const cardioWorkout = [workouts[40], workouts[41], workouts[42], workouts[43], workouts[44], workouts[45], workouts[46], workouts[47], workouts[48], workouts[49]]

            const randomUpperbody0 = randomiser(upperBodyWorkouts0);
            const randomUpperbody1 = randomiser(upperBodyWorkouts1);
            const randomLowerbody0 = randomiser(lowerBodyWorkouts0);
            const randomLowerbody1 = randomiser(lowerBodyWorkouts1);
            const randomCardio = randomizeTwoFromArray(cardioWorkout);

            const randomWorkout = [randomUpperbody0, randomUpperbody1, randomLowerbody0, randomLowerbody1, randomCardio]
            
            console.log(randomWorkout);
            res.json(randomWorkout)
            
        } catch (error) {
            console.error('Error in DailyWorkout:', error);
        }
    } else if (choice === 'UpperBody') {
        try {
            const upperBodyData = await upperBody();
            const workouts = upperBodyData.flat();

            const backWorkouts = [workouts[0], workouts[1], workouts[2], workouts[3], workouts[4], workouts[5], workouts[6], workouts[7], workouts[8], workouts[9]]
            const chestWorkouts = [workouts[10], workouts[11], workouts[12], workouts[13], workouts[14], workouts[15], workouts[16], workouts[17], workouts[18], workouts[19]]
            const upperArmsWorkouts = [workouts[20], workouts[21], workouts[22], workouts[23], workouts[24], workouts[25], workouts[26], workouts[27], workouts[28], workouts[29]]
            const lowerArmsWorkouts = [workouts[30], workouts[31], workouts[32], workouts[33], workouts[34], workouts[35], workouts[36], workouts[37], workouts[38], workouts[39]]
            const shouldersWorkouts = [workouts[40], workouts[41], workouts[42], workouts[43], workouts[44], workouts[45], workouts[46], workouts[47], workouts[48], workouts[49]]
            const cardioWorkouts = [workouts[50], workouts[51], workouts[52], workouts[53], workouts[54], workouts[55], workouts[56], workouts[57], workouts[58], workouts[59]]
            
            const randomBack = randomiser(backWorkouts)
            const randomChest = randomiser(chestWorkouts)
            const randomUpperArms = randomiser(upperArmsWorkouts)
            const randomLowerArms = randomiser(lowerArmsWorkouts)
            const randomShoulders = randomiser(shouldersWorkouts)
            const randomCardio = randomiser(cardioWorkouts)
          
            const randomWorkout = [randomBack, randomChest, randomUpperArms, randomLowerArms, randomShoulders, randomCardio]
           
            console.log(randomWorkout);
            res.json(randomWorkout)

        } catch (error) {
            console.error('Error in DailyWorkout:', error);
        }
    } else if (choice === 'LowerBody') {
        try {
            const lowerBodyData = await lowerBody();
            const workouts = await lowerBodyData.flat();

            const upperlegsWorkouts = [workouts[0], workouts[1], workouts[2], workouts[3], workouts[4], workouts[5], workouts[6], workouts[7], workouts[8], workouts[9]]
            const lowerlegsWorkouts = [workouts[10], workouts[11], workouts[12], workouts[13], workouts[14], workouts[15], workouts[16], workouts[17], workouts[18], workouts[19]]
            const waistWorkouts = [workouts[20], workouts[21], workouts[22], workouts[23], workouts[24], workouts[25], workouts[26], workouts[27], workouts[28], workouts[29]]
            const cardioWorkouts = [workouts[30], workouts[31], workouts[32], workouts[33], workouts[34], workouts[35], workouts[36], workouts[37], workouts[38], workouts[39], workouts[40], workouts[41], workouts[42], workouts[43], workouts[44], workouts[45], workouts[46], workouts[47], workouts[48], workouts[49]]

            const randomUpperlegs = randomizeTwoFromArray(upperlegsWorkouts)
            const randomLowerlegs = randomiser(lowerlegsWorkouts)
            const randomWaist = randomizeTwoFromArray(waistWorkouts)
            const randomCardio = randomizeTwoFromArray(cardioWorkouts)

            const randomWorkout = [randomUpperlegs, randomLowerlegs, randomWaist, randomCardio]
            
            console.log(randomWorkout);
            res.json(randomWorkout)

        } catch (error) {
            console.error('Error in DailyWorkout:', error);
        }
    } else if (choice === 'Cardio') {
        try {
            const cardioData = await cardio();
            const workouts = cardioData.flat();
            const randomWorkout = randomExtra(workouts);
            
            console.log(randomWorkout);
            res.json(randomWorkout)

        } catch (error) {
            console.error('Error in DailyWorkout:', error);
        }
    }
}
