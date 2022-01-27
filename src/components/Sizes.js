
function Sizes({orderBy,sizes}) {



    return (
        <div className={"row"}>
            <div>
            <h6 className={"baslik-sizes"}>Sizes:</h6>
            <div  className={"sizes"}>
                <button onClick={()=>sizes("XS")} type="button" className="btn size frst btn-info">XS</button>
                <button onClick={()=>sizes("S")} type="button" className="btn size btn-info">S</button>
                <button onClick={()=>sizes("M")} type="button" className="btn size btn-info">M</button>
                <button onClick={()=>sizes("L")} type="button" className="btn size btn-info">L</button>
                <button onClick={()=>sizes("XL")} type="button" className="btn size btn-info">XL</button>
                <button onClick={()=>sizes("XXL")} type="button" className="btn size son btn-info">XXL</button>
            </div>
            </div>

            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
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
