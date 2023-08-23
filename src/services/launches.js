
const API_URL = 'https://api.spacexdata.com/v3'

export async function getAllLaunches () {
    try {
        const respone = await fetch( `${API_URL}/launches` );
        const data = await respone.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getLaunchByFlyNumber(flightNumber) {
    try {
        const respone = await fetch( `${API_URL}/launches/${flightNumber}` );
        const data = await respone.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}