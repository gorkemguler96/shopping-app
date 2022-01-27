import React from 'react';
import { MinusSquareOutlined, PlusSquareOutlined, CloseSquareOutlined} from '@ant-design/icons';

function Basket({basketCount, api, selectBasketCount,setBasketTrue,basketTrue,basketDeleted,addToCard,minusIcon,total,toplam}) {
    return (
        <div className={"basketZindex"}>
            {basketTrue ? (
                <div className="card basket-card text-white mb-3">
                    <button onClick={()=>setBasketTrue(!basketTrue)} type={"button"} className={"btn btn-settings btn-black"}>Close </button>
                    <div className="card-body">
                        <h5 className="card-title basketTitle">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwwQEgYn7+gWAAABQklEQVRIx9WTsUoDQRRF72xMYSFokcRCjBFESGWRwtZe8AtEFFNrI1bB0tLGQuzs/AJB8AO2kZRCxBiRQNKIoIYoyLFwCZuss9nNgpBXzc7be3j3zow09mU48321zVF8gNtbZ5Q1UwmGYQPIxFU5vnVdUuHfARO+OD5oa9GzM6NcbICkem+CLZ0kA1zKHQ2w6tlpqRUN4AwA5knFiTAISGsuHqDfwoOkgp4kUkoP1WI+Azt02ZYk9hle3cAEBh69c7iKEOJ30IJU/71KpqbaKCH6b0LEGgTcaYXpeIj+GJf54pyI70CSTACxq1M5ehmqvDCHfwIkFrQW4S1WzXUCq+E5lNhkMqSfo0ze3t7hlWeqIfJ3GnQo2n644ZhZYMnSL9OQcKnYAHs0ueUeY+nn6eDyRskGcFjngGxIBkUqVvk41g+oBJ136GBf8AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0xMlQxNjoxODowNiswMTowMEVm3zEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMTJUMTY6MTg6MDYrMDE6MDA0O2eNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
                                alt=""/>
                            <span className={"badge badge-warning"}>{basketCount}</span>
                            <span className={"shoppingCard"}><h4>Shopping Cart</h4></span>
                        </h5>
                        <div className="card-text">
                            {selectBasketCount.map((i,index) => {

                                    return (
                                        <div >
                                            <div key={i.id} className="card mb-3 bordr-bottom basket-item">
                                                <div className="row no-gutters">
                                                    <div className="col-md-4">
                                                        <img src={i.img} className="card-img basket-img-size" alt="..."/>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <span>
                                                            <CloseSquareOutlined onClick={()=>basketDeleted(i)} className={"cardClosed"}/>
                                                        </span>
                                                        <div className="card-body ayar">
                                                            <h6 className="card-title titleBasket">{i.title}
                                                            </h6>
                                                            <p className="card-text text-border">{i.availableSizes[0]} | {i.style}
                                                                <br/>
                                                                Quanty: <span>{ i.amount ?? 0}</span>
                                                                <span className={"priceConfig"}>Price: ${i.price}</span>
                                                                <span className={"iconS"}>
                                                                    <MinusSquareOutlined onClick={()=>minusIcon(i)} className={"iconS-minus"}/>
                                                                    <PlusSquareOutlined onClick={()=>addToCard(i)} className={"iconS-plus"}/>
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                                        <div className={"subTotal"}>
                                            <span className={"toplam"}>
                                                SubTotal
                                                <span className={"fiyat"}> $ {total ? total : total}</span>
                                            </span>
                                            <button type="button" className="btn btn-sttng btn-dark">CheckOut</button>
                                        </div>


                        </div>
                    </div>
                </div>
            ):null}
        </div>
    );
}

export default Basket;
