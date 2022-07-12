import WithDetails from "../hoc-halpers/with-details";
import ItemDetails from "../item-details/item-details";
import { Record } from "../item-details/item-details";

const StarshipDetails = ({itemId, swapiService}) => {
    const {getStarship, imageStarship} = swapiService;
    return(
        <ItemDetails itemId={itemId}
                    getData={getStarship}
                    imageUrl={imageStarship}>
            <Record field='name' label='Name' />
            <Record field='length' label='Length' />
            <Record field='model' label='Model' />
        </ItemDetails>
    )
};
export default WithDetails(StarshipDetails);