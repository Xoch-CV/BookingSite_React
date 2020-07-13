import { hotelsData } from "./data";

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fullDate=`${day}-0${month}-${year}`;

const dayAfter = date.getDate() + 1;
const fullDateAfter=`${dayAfter}-0${month}-${year}`;

const distinctCountries =  ([...new Set(hotelsData.map(hotel => hotel.country))]).sort();
const distinctPrice =  ([...new Set(hotelsData.map(hotel => hotel.price))]).sort(function(a,b){return a - b;});
const distinctRooms =  ([...new Set(hotelsData.map(hotel => hotel.rooms))]).sort(function(a,b){return a - b;});

const SearchFilter = () =>
  <div>
    <label for="checkin">Check-in</label>
    <input type="date" id="checkin" name="checkin" 
        value={fullDate}>
         {/*min="2018-01-01" max="2018-12-31">*/}
    </input>
    <label for="checkout">Check-out</label>
    <input type="date" id="checkout" name="checkout" 
        value={fullDateAfter}>
        {/*min="2018-01-01" max="2018-12-31">*/}
    </input>
    <select name="country">
        <option hidden selected>Todos los países</option>
        {distinctCountries.map(country => 
        <option value={country}>{country}</option> 
        )}
    </select>
    <select name="price">
        <option hidden selected>Cualquier precio</option>
        {distinctPrice.map(price => 
        <option value={price}>{price}</option> 
        )}
    </select>
    <select name="rooms">
        <option hidden selected>Cualquier tamaño</option>
        {distinctRooms.map(rooms => 
        <option value={rooms}>{rooms}</option> 
        )}
    </select>
 </div>

export default SearchFilter;