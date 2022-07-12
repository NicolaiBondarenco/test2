import WithDetails from "../hoc-halpers/with-details";
import ItemDetails from "../item-details/item-details";
import { Record } from "../item-details/item-details";

const PlanetDetails = ({itemId, swapiService}) => {
    const {getPlanet, imagePlanet} = swapiService;
    return(
        <ItemDetails itemId={itemId}
                    getData={getPlanet}
                    imageUrl={imagePlanet}>
            <Record field='population' label='Population' />
            <Record field='diameter' label='Diameter' />
        </ItemDetails>
    )
};

export default WithDetails(PlanetDetails);