import { fetchWorkout } from "../utilities/fetchFunction";
import randomizeTwoFromArray from "../utilities/randomiserWorkoutFunction"

export async function upperBody() {
    try {
        const back = await fetchWorkout('back')
        const chest = await fetchWorkout('chest')
        const upperArms = await fetchWorkout('upper arms')
        const lowerArms = await fetchWorkout('lower arms')
        const shoulders = await fetchWorkout('shoulders')
        const cardio = await fetchWorkout('cardio')
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
export async function lowerBody() {
    try {
        const upperLegs = await fetchWorkout('upper legs');
        const lowerLegs = await fetchWorkout('lower legs');
        const waist = await fetchWorkout('waist');
        const cardio = await fetchWorkout('cardio');
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
export async function fullBody() {
    const upperBody = randomizeTwoFromArray(["back", "chest", "upper arms", "lower arms", "shoulders"]);
    const lowerBody = randomizeTwoFromArray(["upper legs", "lower legs", "waist"]);
    const cardio = "cardio";  // Add cardio category

    try {
        const upperBodyWorkouts0 = await fetchWorkout(upperBody[0]);
        const upperBodyWorkouts1 = await fetchWorkout(upperBody[1]);
        const lowerBodyWorkouts0 = await fetchWorkout(lowerBody[0]);
        const lowerBodyWorkouts1 = await fetchWorkout(lowerBody[1]);
        const cardioWorkout = await fetchWorkout(cardio);

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
        const cardio = await fetchWorkout('cardio')
        return cardio
    } catch (error) {
        console.error('Error fetching workouts:', error);
    }

}

export default async function DailyWorkoutChoice(choice) {
    if (choice === 'FullBody') {
        try {
            const fullBodyData = await fullBody();
            return fullBodyData
        } catch (error) {
            console.error('Error in DailyWorkout:', error);
        }
    } else if (choice === 'UpperBody') {
        try {
            const upperBodyData = await upperBody();
            return upperBodyData
        } catch (error) {
            console.error('Error in DailyWorkout:', error);
        }
    } else if (choice === 'LowerBody') {
        try {
            const lowerBodyData = await lowerBody();
            return lowerBodyData
        } catch (error) {
            console.error('Error in DailyWorkout:', error);
        }
    } else if (choice === 'Cardio') {
        try {
            const cardioData = await cardio();
            return cardioData
        } catch (error) {
            console.error('Error in DailyWorkout:', error);
        }
    }
}
