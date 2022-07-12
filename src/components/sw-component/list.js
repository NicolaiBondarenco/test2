import SwapiService from "../../service/swapi-service";
import withData from "../hoc-halpers/with-data";
import ItemList from "../item-list/item-list";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapper, fn) => {
    return (props) => {
        return(
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        )
    }
}

const renderName = (i) => (`${i.name} | Skin Color is ${i.skin_color} |`);
const renderNameAndModel = (i) => (`${i.name} | Model is ${i.model} |`);
const renderNameAndPopulation = (i) => (`${i.name} | Population is ${i.population} |`);

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople );
const PlanetsList = withData(withChildFunction(ItemList, renderNameAndPopulation), getAllPlanets );
const StarshipsList = withData(withChildFunction(ItemList, renderNameAndModel), getAllStarships );

export {
    PersonList,
    PlanetsList,
    StarshipsList
}
