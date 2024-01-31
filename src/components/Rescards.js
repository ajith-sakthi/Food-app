import {CARD_URL} from "../utils/constants"

const Rescards=(props)=>{
    
    const {resData} =props

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info

    
    return (
            
            <div data-testid="testCards" className="w-80 h-[450px] p-2 m-2 bg-indigo-100 hover:bg-indigo-200 rounded-lg" >
                <img className="rounded-lg w-full h-[200px]" alt ="logo" 
                src={ CARD_URL+ cloudinaryImageId}/>
                <h3 className="text-lg font-bold py-2">{name}</h3>
                <h5 className="py-2">{cuisines.join(", ")}</h5>
                <p className="py-2" >{avgRating + " Stars"}</p>
                <p className="py-2">{costForTwo}</p>
                <p className="py-2">36 minutes</p> 
               
            </div>
    )
}

export const withPromotedcard= (Rescards)=>{
return (props)=>{
    return(
        <div>
            <label className="absolute p-2 bg-black-100 text-white rounded-md">Promoted</label>
            <Rescards {...props}/>
        </div>
    )
}
}
export default Rescards;