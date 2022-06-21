import { useState } from "react"
import Formulaire from "./Formulaire"
import ListePersonnel from "./ListePersonnel"



const Parent = () => {
    // state qui contient la cumulation des personnes envoyées par le formulaire
    const [personnes, setPersonnes] = useState([])

    // methode qui permet de faire une demande d'une personne
    const getPersonne = (personne) => {
        setPersonnes([...personnes, personne]) // mise a jour cumulée du state des personnes
    }

    return <>
        <Formulaire getPersonne={getPersonne} />

        <ListePersonnel personnes={personnes} />
    </>
}

export default Parent