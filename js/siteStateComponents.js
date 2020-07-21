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
                {id: "1", type:"date", name:"checkin", title:"Check-In", value:"", placeholder:fullDate },
                {id: "2", type:"date", name:"checkout", title:"Check-Out", value:"", placeholder:fullDateAfter },
                {id: "3", type:"selector", name:"country", title:"", options:distinctCountries, value:"", placeholder:"Todos los países" },
                {id: "4", type:"selector", name:"price", title:"", options:distinctPrice, value:"", placeholder:"Cualquier precio"},
                {id: "5", type:"selector", name:"rooms", title:"", options:distinctRooms, value:"", placeholder:"Cualquier tamaño"}
            ],
            hotels: []
        };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleHotelsUpdate = this.handleHotelsUpdate.bind(this);
    };

    componentDidMount() {
        this.setState({    
            filters:[
                {id: "1", type:"date", name:"checkin", title:"Check-In", value:fullDate, placeholder:fullDate },
                {id: "2", type:"date", name:"checkout", title:"Check-Out", value:fullDateAfter, placeholder:fullDateAfter },
                {id: "3", type:"selector", name:"country", title:"", options:distinctCountries, value:"", placeholder:"Todos los países" },
                {id: "4", type:"selector", name:"price", title:"", options:distinctPrice, value:"", placeholder:"Cualquier precio"},
                {id: "5", type:"selector", name:"rooms", title:"", options:distinctRooms, value:"", placeholder:"Cualquier tamaño"}
            ],
            hotels: hotelsData});
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        const { filters } = this.state;

        const filtersUpdated = filters.map(filter => {
          if (filter.name === name) {
            return { ...filter, value};
          }
    
          return filter;
        });
    
        this.setState({ filters: filtersUpdated }, () => this.handleHotelsUpdate());
    }

    handleHotelsUpdate(e){
        // const name = e.target.name;
        // const value = e.target.value;
        // const { filters, hotels } = this.state;

        // const hotelsUpdated = hotels.filter((hotel, name) => hotel.country === value)

        // //console.log(hotelsUpdated)
        // this.setState({ hotels: hotelsUpdated  }
    }  


    render () {
        const { filters } =this.state;
        return (
            <div>
                <div className = "header">
                        <Header
                            checkin={fullDate}
                            checkout={fullDateAfter}
                        />
                </div>
                <div className = "filters">
                {filters.map(filter => {
                    if(filter.type==="date"){
                        return (
                        <Input
                            key={filter.id}
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
                            key={filter.id}
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