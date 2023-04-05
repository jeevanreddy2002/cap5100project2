import { React } from 'react'
import data from "./ListData.json"
import Box from '@mui/material/Box';
import ApartmentCard from "./ApartmentCard"

function List(props) {
    const requiredAmenities = props.requiredAmenities
    const maxBudget = props.maxBudget
    const maxNumberOfRoommates = props.maxNumberOfRoommates
    const hideResults = props.hideResults

    const filteredData = data.filter((el) => {
        const hasAmenities = requiredAmenities.every(val => el.amenities.includes(val))
        const withinBudget = el.price <= maxBudget
        const withinRoommates = (el.config.charCodeAt(0) - 48) - 1 <= maxNumberOfRoommates
        return !hideResults && hasAmenities && withinBudget && withinRoommates
    })

    const apartmentCards = filteredData.map((apartmentData) => 
        <ApartmentCard
            image={apartmentData.image}
            name={apartmentData.name}
            config={apartmentData.config}
            sqft={apartmentData.sqft}
            city={apartmentData.city}
            price={apartmentData.price}
            description={apartmentData.description}
            amenities={apartmentData.amenities}
            phoneNumber={apartmentData.phoneNumber}
            coordinates={apartmentData.coordinates}
        />
    );
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {apartmentCards}
            </Box>
        </div>
    )
}

export default List