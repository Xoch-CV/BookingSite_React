const HousingCard = (props) =>
    <div>
        <div className="image">
            <img src={props.photo} alt="img"/>
        </div>

        <div className="info">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <span><i className="location icon" />{props.city},{props.country}</span>
            <div>
                <span><i className="rooms icon" />Rooms: {props.rooms}</span>
            </div>
            <div>
                <span><i className="rooms icon" />Price: {props.price}</span>

            </div>
            {/*<div>
                <span>{props.from}</span>
                <span>{props.to}</span>
            </div>*/}
        </div>
        <div>
        <button className="button">Reservar</button>
        </div>
    </div>

export default HousingCard;




