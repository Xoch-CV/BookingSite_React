import Header from "./header";
import Date from "./inputDate";
import Select from "./select";
import CardList from "./cardList";

import { hotelsData } from "./data";

const distinctCountries =  ([...new Set(hotelsData.map(hotel => hotel.country))]).sort();
const distinctPrice =  ([...new Set(hotelsData.map(hotel => hotel.price))]).sort(function(a,b){return a - b;});
const distinctRooms =  ([...new Set(hotelsData.map(hotel => hotel.rooms))]).sort(function(a,b){return a - b;});


class Site extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                checkin: fullDate,
                checkout: fullDate,
                country:"",
                price: 0,
                rooms:0
            },
            hotels: []
        };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleHotelsUpdate = this.handleHotelsUpdate.bind(this);
    };

    componentDidMount() {
        this.setState({    
            filters: {
                checkin: fullDate,
                checkout: fullDate,
                country:"",
                price: 0,
                rooms:0
            },
            hotels: hotelsData});
      }
    
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        const { hotels } = this.state;

        this.setState( prevState => ({
            filters: {
                ...prevState.filters,
                [name]: value
            }
        }), () => this.handleHotelsUpdate()
        );
    }

    handleHotelsUpdate(e){
        // const value = e.target.value;

        // const { filter, hotels } = this.state;

        // const hotelsUpdated = hotels.map((hotel, prevState) => {
        //         if(...prevState.filters !== filters{})
    // })
    // const hotelsUpdated = this.state.hotels.map(hotel => {
    //   if (id === product.id) {
    //     return { ...product, votes: product.votes + 1 };
    //   }
    //   return product;
    // });

    // this.setState({ products: productsUpdated });

    };
    


    render () {
        return (
            <div>
                <div className = "header">
                    <Header/>
                </div>
                <div className = "filters">
                    <Date/>
                    <Select 
                        name="country"
                        value={this.state.country} 
                        onChange={this.handleChange} 
                        options={distinctCountries}
                        placeholder={"Todos los países"}/>
                    <Select 
                        name="price"
                        value={this.state.price} 
                        onChange={this.handleChange} 
                        options={distinctPrice}
                        placeholder={"Cualquier precio"}/>
                    <Select 
                        name="rooms"
                        value={this.state.rooms} 
                        onChange={this.handleChange} 
                        options={distinctRooms}
                        placeholder={"Cualquier tamaño"}/>
                </div>
                <div className = "list">
                {hotelsData.map(hotel => (
                    <CardList
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
            </div>
        );
    }
}
    

export default Site;