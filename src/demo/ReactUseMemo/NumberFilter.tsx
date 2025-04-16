import { useMemo } from "react";
function NumberFilter({ numbers }: { numbers: number[] }) {
  //"calcul des nombres de pairs"
  //   const evenNumbers = numbers.filter((n) => n % 2 === 0);
  const evenNumbers = useMemo(() => {
    return numbers.filter((n) => n % 2 === 0);
  }, [numbers]);
  return (
    <div>
      <p>Nombres pairs : {evenNumbers.join(", ")}</p>
    </div>
  );
}

export default NumberFilter;
