const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fullDate=`${day}-0${month}-${year}`;

const Date = () => 

<div>
<label for="checkin">Check-in</label>
    <input type="date" id="checkin" name="checkin" 
        value={fullDate}>
    </input>
</div>

export default Date;
