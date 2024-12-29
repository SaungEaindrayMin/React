import { useParams } from "react-router-dom";

export default function UserDetails(){
    const params = useParams();
    const hello = params.fucku;
    console.log(params);


    return(
        <>
        <h1>This is User Details{hello}</h1>
        </>
        
    );
}