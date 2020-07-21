import HousingCard from "./card";

const CardList = (props) => (
    <div className="list items">
        <HousingCard
            key={props.slug}
            name={props.name}
            photo={props.photo}
            description={props.description} 
            rooms={props.rooms}
            city={props.city}
            country={props.country}
            price={props.price}
            from={props.availabilityFrom}
            to={props.availabilityTo}
        />
    </div>
  );

export default CardList;