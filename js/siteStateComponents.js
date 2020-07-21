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


import { hotelsData } from "./data";

const distinctCountries =  ([...new Set(hotelsData.map(hotel => hotel.country))]).sort();
const distinctPrice =  ([...new Set(hotelsData.map(hotel => hotel.price))]).sort(function(a,b){return a - b;});
const distinctRooms =  ([...new Set(hotelsData.map(hotel => hotel.rooms))]).sort(function(a,b){return a - b;});

class Site extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters:[
                {type:"date", name:"checkin", title:"Check-In", value:"", placeholder:fullDate },
                {type:"date", name:"checkout", title:"Check-Out", value:"", placeholder:fullDateAfter },
                {type:"selector", name:"country", title:"", options:distinctCountries, value:"", placeholder:"Todos los países" },
                {type:"selector", name:"price", title:"", options:distinctPrice, value:"", placeholder:"Cualquier precio"},
                {type:"selector", name:"rooms", title:"", options:distinctRooms, value:"", placeholder:"Cualquier tamaño"}
            ],
            hotels: []
        };
    
    this.handleChange = this.handleChange.bind(this);
    //this.handleHotelsUpdate = this.handleHotelsUpdate.bind(this);
    };

    componentDidMount() {
        this.setState({    
            filters:[
                {type:"date", name:"checkin", title:"Check-In", value:"", placeholder:fullDate },
                {type:"date", name:"checkout", title:"Check-Out", value:"", placeholder:fullDateAfter },
                {type:"selector", name:"country", title:"", options:distinctCountries, value:"", placeholder:"Todos los países" },
                {type:"selector", name:"price", title:"", options:distinctPrice, value:"", placeholder:"Cualquier precio"},
                {type:"selector", name:"rooms", title:"", options:distinctRooms, value:"", placeholder:"Cualquier tamaño"}
            ],
            hotels: hotelsData});
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        // this.setState( prevState => ({
        //     filters: [
        //         ...prevState.filters, {[name]: value}
        //     ]
        // }))
    }

    render () {
        const { filters } =this.state;
        return (
            <div>
                <div className = "header">
                    <Header/>
                </div>
                <div className = "filters">
                {filters.map(filter => {
                    if(filter.type==="date"){
                        return (
                        <Input
                            type={filter.type}
                            title={filter.title}
                            name={filter.name}
                            value={filter.value}
                            onChange={this.handleChange}
                            placeholder={filter.placeholder}/>
                        )
                    }
                    return (
                        <Select 
                            name={filter.name}
                            value={filter.value} 
                            onChange={this.handleChange} 
                            options={filter.options}
                            placeholder={filter.placeholder}/>    
                        )

                })}
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