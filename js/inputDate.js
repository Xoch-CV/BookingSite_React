const Input = (props) => 
<div>
    <label for={props.name}>{props.title}</label>
    <input id={props.id} type={props.type}id={props.name} name={props.name}
            value={props.value} onChange={props.onChange} placeholder={props.placeholder}>
    </input>
</div>

export default Input;
