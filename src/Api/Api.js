const baseUrl = 'https://restcountries.eu/rest/v2/';

const Api = {

    fetchCountries: async (option) => {
        const res = await fetch(baseUrl + option);
        const data = await res.json();
        return data;
    }

}

export default Api;