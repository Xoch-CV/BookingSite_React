import Header from "./header";
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
                country:"",
                price: 0,
                rooms:0
            } 
        };
    
    this.handleChange = this.handleChange.bind(this);
    };


    /*handleChange(e) {
        this.setState({ filters:{[e.target.name]: e.target.value} }),() => console.log(this.state.filters);
    };*/

    handleChange(e) {
        this.setState( prevState => ({
            filters: {
                ...prevState.filters,
                [e.target.name]: e.target.value
            } 
        }), 
        () => console.log(this.state.filters)
        );

    }

    render () {
        return (
            <div>
                <div className = "header">
                    <Header/>
                </div>
                <div className = "filters">
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
                    <CardList/>
                </div>
            </div>
        );
    }
}
    

export default Site;