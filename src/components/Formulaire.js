import { useState } from "react"
import { useDispatch } from "react-redux"
import { saveUser } from "../redux/commons/actions"


const Formulaire = (props) => {
//state globale pour le formulaire
    const [fields, setFields] = useState({
        nom: "",
        prenom: "",
        age: 20,
        homme: false,
        femme: true,
        check: true
    })
    const dispatcher = useDispatch()

    const handleChange = e => {
        setFields({
            ...fields, // cumulation des anciennes valeure du state
            [e.target.name]: e.target.type === "checkbox" ? // mise a jour de l'attribut qui match avec le nom de l'input sur lequel on saisie
                e.target.checked : e.target.value           // avec verification de s'il s'agit d'un checkbox ou pas
        })
    }

    // condition de non validité du formulaire
    const disabled = fields.nom === "" || fields.prenom === "" || fields.age < 1 || !fields.check
    

    const style = {
        radioDiv: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: '15px'
        },
        inputText: {
            width: "100%",
            height: "30px",
            borderRadius: "5px",
            border: "1px solid gray",
            marginBottom: "15px"
        },
        radio: {},
        btnValider: {
            width: '100%',
            height: 30,
            opacity: disabled ? 0.7 : 1,
            fontSize: 18,
            color: "white",
            border: disabled ?
                "1px solid gray" : "1px solid dodgerblue",
            borderRadius: 5,
            backgroundColor: disabled ?
                "gray" : "dodgerblue",
            cursor: "pointer"
        },
        confident: {
            marginBottom: 15
        }
    }
    const handleSubmit = e => {
        if (disabled) {
        } else {
            dispatcher(saveUser(fields))
            setFields({
                nom: "",
                prenom: "",
                age: 20,
                homme: false,
                femme: true,
                check: true
            })
        }
    }

    return (
        <>
            <input
                style={style.inputText}
                type="text"
                name="nom"
                value={fields.nom}
                onChange={handleChange} />
            <input
                style={style.inputText}
                type="text"
                name="prenom"
                value={fields.prenom}
                onChange={handleChange} />
            <input
                style={style.inputText}
                type="number"
                name="age"
                value={fields.age}
                onChange={handleChange} />
            <div
                style={style.radioDiv}>
                <div>
                    <input
                        style={{}}
                        type="radio"
                        id="homme"
                        name="homme"
                        checked={fields.homme}
                        onChange={() => setFields({
                            ...fields,
                            homme: true,
                            femme: false
                        })} />homme
                </div>
                <div>
                    <input
                        style={{}}
                        type="radio"
                        id="femme"
                        name="femme"
                        checked={fields.femme}
                        onChange={(e) => setFields({
                            ...fields,
                            homme: false,
                            femme: true
                        })} />femme
                </div>
            </div>
            <input
                style={style.confident}
                type="checkbox"
                name="check"
                checked={fields.check}
                onChange={handleChange} />j'accepte les conditions de confidentialité
            <input
                style={style.btnValider}
                type={"button"}
                disabled={disabled}
                value="valider"
                onClick={handleSubmit}></input>
        </>
    )
}

export default Formulaire