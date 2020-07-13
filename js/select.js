const Select = (props) =>
    <select 
        name={props.name} 
        value={props.value} 
        onChange={props.onChange} 
        option={props.option}>
        <option hidden selected>{props.placeholder}</option>
        {props.options.map(option => 
        <option key={option} value={option}>{option}</option> 
        )}
    </select>
 
 export default Select;