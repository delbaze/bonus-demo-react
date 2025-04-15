// type TToggleProps = {
//   show: boolean;
//   toggleShow: () => void;

import { useState } from "react";

// };
function Toggle({ children }: any) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);


  if (typeof children === "function"){
    return children({show, toggleShow});
  }

  return <>{children}
  </>;
}

export default Toggle;

// type TToggleProps = {
//   show: boolean;
//   toggleShow: () => void;
// };
// function Toggle({ show, toggleShow }: TToggleProps) {

//   return (
//     <div>
//       <p>État : {show ? "Activé" : "Désactivé"}</p>
//       <button onClick={toggleShow}>Basculer</button>
//       <hr />
//     </div>
//   );
// }

// export default Toggle;
