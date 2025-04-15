import React, { useState } from "react";
interface CompteurProps {
  render: (valeur: number, augmenter: () => void) => React.ReactNode;
}
function Compteur({ render }: CompteurProps) {
  const [compte, setCompte] = useState<number>(0);

  const augmenter = (): void => setCompte(compte + 1);

  return render(compte, augmenter);
}

export default Compteur;
