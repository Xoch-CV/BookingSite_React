import { hotelsData } from "./data";

const distinctCountries =  ([...new Set(hotelsData.map(hotel => hotel.country))]).sort();
const distinctPrice =  ([...new Set(hotelsData.map(hotel => hotel.price))]).sort(function(a,b){return a - b;});
const distinctRooms =  ([...new Set(hotelsData.map(hotel => hotel.rooms))]).sort(function(a,b){return a - b;});

const SearchFilter = (props) =>
  <div>
    <select name="country" 
        placeholder="Todos los países" 
        value={props.value} 
        onChange={props.onChange} 
        option={props.option}>
    </select>
 </div>

export default SearchFilter;