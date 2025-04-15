import Compteur from "./Compteur";
import DataFetcher from "./DataFetcher";
import Toggle from "./Toggle";
type TToggleProps = {
  show: boolean;
  toggleShow: () => void;
};
function MonComposant() {
  return (
    <div>
      <Toggle
        render={() => {
          console.log("test");
        }}
      >
        {({ show, toggleShow }: TToggleProps) => (
          <div>
            <p>État : {show ? "Activé" : "Désactivé"}</p>
            <button onClick={toggleShow}>Changer d'état</button>
            <hr />
          </div>
        )}
      </Toggle>
      <Toggle>Mon Composant</Toggle>

      <DataFetcher url="https://jsonplaceholder.typicode.com/users/1">
        {({ data, loading, error }) => (
          <div>
            {loading && <p>Chargement en cours</p>}
            {error && <p>Erreur: {error}</p>}
            {data && (
              <div>
                <h1>Utilisateur : {(data as any).name}</h1>
                <p>Email: {(data as any).email}</p>
              </div>
            )}
          </div>
        )}
      </DataFetcher>

      <Compteur
        render={(valeur: number, augmenter: () => void) => (
          <div>
            <p>Le compteur est à: {valeur}</p>
            <button onClick={augmenter}>+1</button>
          </div>
        )}
      />
    </div>
  );
}

export default MonComposant;

// import { useState } from "react";
// import Toggle from "./Toggle";

// function MonComposant() {
//   const [show, setShow] = useState(false);
//   const toggleShow = () => setShow((prev) => !prev);
//   return (
//     <div>
//       <Toggle show={show} toggleShow={toggleShow} />
//     </div>
//   );
// }

// export default MonComposant;
