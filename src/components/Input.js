


const Input = (props) => {
    return (
        <input type={props.type} name={props.name} style={props.style} onClick={props.handleSubmit} value={props.value} onChange = {props.handleChange} />
    )
}


export default Input