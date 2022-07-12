import WithDetails from "../hoc-halpers/with-details";
import ItemDetails from "../item-details/item-details";
import { Record } from "../item-details/item-details";

const PersonDetails = ({itemId, swapiService}) => {
    const {getPeople, imagePerson} = swapiService;
    return(
        <ItemDetails itemId={itemId}
                    getData={getPeople}
                    imageUrl={imagePerson}>
            <Record field='gender' label='Gender' />
            <Record field='height' label='Height' />
        </ItemDetails>
    )
};

export default WithDetails(PersonDetails);
