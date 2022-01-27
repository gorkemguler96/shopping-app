import React from 'react';

function Card({api,addToCard}) {



    return (
        <div className={"row "}>
            {api.map((i)=> {

                return (
                    <div className={"col-4"} key={i.id}>
                        {}
                    <div key={i.id} className="card" >
                        <img src={i.img} className="card-img-top img-size" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{i.title}</h5>
                            <p className="card-text">${i.price}</p>
                            <button onClick={()=>addToCard(i)} className="btn yellow-btn btn-dark">Add to cart</button>
                        </div>
                    </div>
                </div> )
            })}
        </div>
    );
}

export default Card;
