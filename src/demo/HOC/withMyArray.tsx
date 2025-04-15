export type TArray = {
    name: string, 
    age: number
}
const data: TArray[] = [
    {name: "Toto", age: 28},
    {name: "Tata", age: 32},
    {name: "Titi", age: 45},
]
const withMyArray = <P extends object>(Component: React.ComponentType<P>)  => (props: any) => {
  return (
    <Component {...props} data={data}/>
  )
}

export default withMyArray