import HousingCard from "./card";

import { hotelsData } from "./data";

const CardList = () => (
    <div className="list items">
      {hotelsData.map(hotel => (
        <HousingCard
            key={hotel.slug}
            name={hotel.name}
            photo={hotel.photo}
            description={hotel.description} 
            rooms={hotel.rooms}
            city={hotel.city}
            country={hotel.country}
            price={hotel.price}
            from={hotel.availabilityFrom}
            to={hotel.availabilityTo}
        />
      ))}
    </div>
  );

export default CardList;