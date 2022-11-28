import "../App.css";

export default function WizardInfo(props){
    return (
        <div className="card flex flex-col">
            <img src = {props.item.image} alt={props.item.name}/>
            <div className="container">
                <p>Name: {props.item.name}</p>
                <p>House: {props.item.house} </p>
                <p>Skill: {props.item.skills} </p>
                <p>Price: {props.item.price}</p>
                <button  onClick={() => props.onAdd(props.item)}>
                    Add
                </button>
            </div>
        </div>
    )
}
