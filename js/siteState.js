import Header from "./header";
import Input from "./inputDate";
import Select from "./select";
import CardList from "./cardList";


const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fullDate=`${year}-0${month}-${day}`;

const dayAfter = date.getDate() + 1;
const fullDateAfter=`${year}-0${month}-${dayAfter}`;

// const mili = date.valueOf() + 864000000;
// const dateAfter = new Date(mili);

// const dayAfter = dateAfter.getDate();
// const monthAfter = dateAfter.getMonth() + 1;
// const yearAfter = dateAfter.getFullYear();

// const fullDateAfter=`${yearAfter}-0${monthAfter}-${dayAfter}`;



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
                checkout: fullDateAfter,
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
                checkout: fullDateAfter,
                country:"",
                price: 0,
                rooms:0
            },
            hotels: hotelsData});
      }
    
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        
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
        const { filters } =this.state;
        return (
            <div>
                <div className = "header">
                    <Header
                        checkin={filters.checkin}
                        checkout={filters.checkout}/>
                </div>
                <div className = "filters">
                    <Input
                        type="date"
                        name="checkin"
                        title="Check-in"
                        value={filters.checkin}
                        onChange={this.handleChange}
                        placeholder="2018-07-22"/>
                    <Input
                        type="date"
                        name="checkout"
                        title="Check-out"
                        value={filters.checkout}
                        onChange={this.handleChange}
                        placeholder="2018-07-22"/>
                    <Select 
                        name="country"
                        value={filters.country} 
                        onChange={this.handleChange} 
                        options={distinctCountries}
                        placeholder={"Todos los países"}/>
                    <Select 
                        name="price"
                        value={filters.price} 
                        onChange={this.handleChange} 
                        options={distinctPrice}
                        placeholder={"Cualquier precio"}/>
                    <Select 
                        name="rooms"
                        value={filters.rooms} 
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