

const ListePersonnel = (props) => {
    
    const style = {
        container: {
            border: "1px solid gray",
            borderRadius: 5,
            padding: 5,
            marginTop: 15,
        },
        label: {
            letterSpacing: 1
        }
    }

    return (
        <>
            {  // je boucle sur les personnes recu depuis le parent 
                props.personnes.map((personne, i) => {
                    return (
                        <div style={style.container} key={i}>
                            <p style={style.label}>Nom : {personne.nom}</p>
                            <p style={style.label}>Prenom : {personne.prenom}</p>
                            <p style={style.label}>Age : {personne.age}</p>
                            <p style={style.label}>Genre : {personne.homme ? "homme" : "femme"}</p>
                        </div>
                    )
                })
            }
        </>
    )
}


export default ListePersonnel