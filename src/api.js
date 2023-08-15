
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const geoApiOptions = {
    method: 'GET',
    url: GEO_API_URL + '/cities?',
    headers: {
        'X-RapidAPI-Key': '27efdb7c8cmsha0515dc2c2e3379p1a47a7jsnf3d6562bc107',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

