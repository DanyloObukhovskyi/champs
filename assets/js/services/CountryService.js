import Service from "./Service";

class CountryService extends Service {

    getCountries = () => {
        return this.send('countries')
    }

    getCities = (countryId, query) => {
        return this.send(`cities/${countryId}`, {query})
    }
}

export default new CountryService;