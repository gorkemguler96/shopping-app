
function Sizes({orderBy,sizes,clearFilter}) {

const arr = ["XS","S","M","L","XL","XXL"]

    return (
        <div className={"row"}>
            <div className={"sizes-card"}>
            <h6 className={"baslik-sizes"}>Sizes:</h6>
            <div  className={"sizes"}>
                {arr.map((button)=>{
                    return(
                        <button onClick={()=>sizes(button)} type="button" className="btn size frst btn-info">{button}</button>
                    )
                })}
                <button onClick={()=>clearFilter()} type="button" className="btn clear frst btn-info">Clear Filter</button>

            </div>
            </div>

            <div className="dropdown">
                <button className="btn orderStyle dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Order by
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button onClick={()=>orderBy("Lowest to highest")} className="dropdown-item">Lowest to highest</button>
                    <button onClick={()=>orderBy("Highest to lowest")} className="dropdown-item">Highest to lowest</button>
                </div>
            </div>
        </div>
    );
}

export default Sizes;
