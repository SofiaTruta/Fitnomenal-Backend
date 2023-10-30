export async function fetchWorkout(bodyPart, limit) {
const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=${limit}`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ef1594fdc0mshcf7f5a13f934140p1c5750jsn4d4ce4091c56',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result
} catch (error) {
	console.error(error);
}
}