export default class SwapiService {

    _apiBase = 'https://swapi.py4e.com/api';
    _apiImage = 'https://starwars-visualguide.com/assets/img';

  
    async getResorse(url){
      const res = await fetch(`${this._apiBase}${url}`);
  
      if(!res.ok){
        throw new Error(`Could not fetch: ${url}`)
      }
  
      return await res.json();
    }


  
    getAllPeople = async () => {
      const res = await this.getResorse(`/people/`);
      return res.results.map(this._transformPeople);
    }
  
    getPeople = async (id) => {
      const people = await this.getResorse(`/people/${id}/`);
      return this._transformPeople(people);
    }
  
    getAllPlanets = async () => {
      const res = await this.getResorse(`/planets/`);
      return res.results.map(this._transformPalnet);
    }
  
    getPlanet = async (id) => {
      const planet = await this.getResorse(`/planets/${id}/`);
      return this._transformPalnet(planet);
    }
  
    getAllStarships = async () => {
      const res = await this.getResorse(`/starships/`);
      return res.results.map(this._transformStarship);
    }
  
    getStarship = async (id) => {
      const starship = await this.getResorse(`/starships/${id}/`);
      return this._transformStarship(starship);
    }



    imagePerson = ({id}) => {
      return `${this._apiImage}/characters/${id}.jpg`
    }

    imagePlanet = ({id}) => {
      return `${this._apiImage}/planets/${id}.jpg`
    }

    imageStarship = ({id}) => {
      return `${this._apiImage}/starships/${id}.jpg`
    }



    regExp(item){
      const regExp = /\/([0-9]*)\/$/;
      return item.url.match(regExp)[1];
    }

    _transformPalnet = (planet) => {
      return {
        id: this.regExp(planet),
        name: planet.name,
        population: planet.population,
        rotation_period: planet.rotation_period,
        diameter: planet.diameter
      }
    }

    _transformPeople = (people) => {
      return {
        id: this.regExp(people),
        name: people.name,
        gender: people.gender,
        height: people.height,
        skin_color: people.skin_color
      }
    }

    _transformStarship = (starship) => {
      return {
        id: this.regExp(starship),
        name: starship.name,
        passengers: starship.passengers,
        length: starship.length,
        model: starship.model
      }
    }
  
  }