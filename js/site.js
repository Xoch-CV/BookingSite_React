import Header from "./header";
import CardList from "./cardList";

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fullDate=`${day}-0${month}-${year}`;

const dayAfter = date.getDate() + 1;
const fullDateAfter=`${dayAfter}-0${month}-${year}`;

class Site extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkin: fullDate,
            checkout: fullDateAfter,
            country:0,
            price:0,
            rooms:0
        };
    }
    handleDate(){
        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const fullDate=`${day}-0${month}-${year}`;

        const dayAfter = date.getDate() + 1;
        const fullDateAfter=`${dayAfter}-0${month}-${year}`;

        /*if(month < 10){
            fullDate =`${day}-0${month}-${year}`
          }else{
            fullDate =`${day}-${month}-${year}`
          }
        
        this.setState({
            checkin: fullDate,
            checkout: fullDateAfte,
        });*/
    };

    render () {
        return (
            <div>
                <Header/>
                <CardList/>
            </div>
        );
    }
}
    

export default Site;