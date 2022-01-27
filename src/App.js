import './style/style.css'
import {useEffect, useState} from "react";
import Card from "./components/Card";
import Sizes from "./components/Sizes";
import Navbar from "./components/Navbar";
import Basket from "./components/Basket";


function App() {

  const INITIAL_STATE = [
      {"id": 12,
    "sku": 12064273040195392,
    "title": "Cat Tee Black T-Shirt",
    "description": "4 MSL",
    "availableSizes": ["S", "XS"],
    "style": "Black with custom print",
    "price": 10.9,
    "installments": 9,
    "currencyId": "USD",
    "currencyFormat": "$",
    "isFreeShipping": true,
    "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"},


    {
      "id": 13,
      "sku": 51498472915966366,
      "title": "Dark Thug Blue-Navy T-Shirt",
      "description": "",
      "availableSizes": ["M"],
      "style": "Front print and paisley print",
      "price": 29.45,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg"
    },

    {
      "id": 14,
      "sku": 10686354557628303,
      "title": "Sphynx Tie Dye Wine T-Shirt",
      "description": "GPX Poly 1",
      "availableSizes": ["XS", "L", "XL"],
      "style": "Front tie dye print",
      "price": 9.0,
      "installments": 3,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg"
    },

    {
      "id": 15,
      "sku": 11033926921508487,
      "title": "Skuul",
      "description": "Treino 2014",
      "availableSizes": ["XS", "L", "XL", "XXL"],
      "style": "Black T-Shirt with front print",
      "price": 14.0,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg"
    },

    {
      "id": 11,
      "sku": 39876704341265606,
      "title": "Wine Skul T-Shirt",
      "description": "",
      "availableSizes": ["XS", "L"],
      "style": "Wine",
      "price": 13.25,
      "installments": 3,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.a313534c.jpg"
    },

    {
      "id": 16,
      "sku": 10412368723880253,
      "title": "Short Sleeve T-Shirt",
      "description": "",
      "availableSizes": ["XS", "L", "XXL", "XL"],
      "style": "Grey",
      "price": 75.0,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.87b5353e.jpg"
    },

    {
      "id": 0,
      "sku": 8552515751438644,
      "title": "Cat Tee Black T-Shirt",
      "description": "14/15 s/nº",
      "availableSizes": ["XS", "L", "XL", "XXL"],
      "style": "Branco com listras pretas",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310_1.75f51cec.jpg"
    },

    {
      "id": 1,
      "sku": 18644119330491312,
      "title": "Sphynx Tie Dye Grey T-Shirt",
      "description": "14/15 s/nº",
      "availableSizes": ["XS", "L", "XL", "XXL"],
      "style": "Preta com listras brancas",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.7faf6a31.jpg"
    },

    {
      "id": 2,
      "sku": 11854078013954528,
      "title": "Danger Knife Grey",
      "description": "14/15 s/nº",
      "availableSizes": ["XS", "L"],
      "style": "Branco com listras pretas",
      "price": 14.9,
      "installments": 7,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg"
    },

    {
      "id": 3,
      "sku": 876661122392077,
      "title": "White DGK Script Tee",
      "description": "2014 s/nº",
      "availableSizes": ["XS", "L"],
      "style": "Preto com listras brancas",
      "price": 14.9,
      "installments": 7,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676_1.59b64365.jpg"
    },

    {
      "id": 4,
      "sku": 9197907543445677,
      "title": "Born On The Streets",
      "description": "14/15 s/nº - Jogador",
      "availableSizes": ["XL"],
      "style": "Branco com listras pretas",
      "price": 25.9,
      "installments": 12,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888_1.54fbf816.jpg"
    },

    {
      "id": 5,
      "sku": 10547961582846888,
      "title": "Tso 3D Short Sleeve T-Shirt A",
      "description": "14/15 + Camiseta 1º Mundial",
      "availableSizes": ["XS", "L", "XL"],
      "style": "Preto",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891_1.45a051e0.jpg"
    },

    {
      "id": 6,
      "sku": 6090484789343891,
      "title": "Man Tie Dye Cinza Grey T-Shirt",
      "description": "Goleiro 13/14",
      "availableSizes": ["XL", "XXL"],
      "style": "Branco",
      "price": 49.9,
      "installments": 0,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.d78e2790.jpg"
    },

    {
      "id": 7,
      "sku": 18532669286405342,
      "title": "Crazy Monkey Black T-Shirt",
      "description": "1977 Infantil",
      "availableSizes": ["S"],
      "style": "Preto com listras brancas",
      "price": 22.5,
      "installments": 4,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.843a4713.jpg"
    },

    {
      "id": 8,
      "sku": 5619496040738316,
      "title": "Tso 3D Black T-Shirt",
      "description": "",
      "availableSizes": ["XL"],
      "style": "Azul escuro",
      "price": 18.7,
      "installments": 4,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.843a4713.jpg"
    },

    {
      "id": 9,
      "sku": 11600983276356165,
      "title": "Crazy Monkey Grey",
      "description": "",
      "availableSizes": ["L", "XL"],
      "style": "",
      "price": 134.9,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.06ec2c62.jpg"
    },

    {
      "id": 10,
      "sku": 27250082398145995,
      "title": "On The Streets Black T-Shirt",
      "description": "",
      "availableSizes": ["L", "XL"],
      "style": "",
      "price": 49.0,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "quantity": 0,
      "img": "https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.4c799bac.jpg"
    }]
  const [api,setApi] = useState(INITIAL_STATE)
  const [basketCount,setBasketCount] = useState(0)
  const [selectBasketCount,setSelectBasketCount] = useState([])
  const [basketTrue,setBasketTrue]= useState(false)
  const [deneme,setDeneme]= useState([])
  const [sortPrices,setSortPrices] = useState(0)
  const [total,setTotal] =useState([])
  const [filteredApi,setFilteredApi] = useState(INITIAL_STATE)

  const addToCard = (item) => {
    const checkCard = selectBasketCount.filter((e)=> e.id === item.id).length === 0

    if(checkCard){
      item.amount = 1
      setBasketCount(basketCount+1)
      setSelectBasketCount([...selectBasketCount, item])
      setBasketTrue(basketTrue ? basketTrue : !basketTrue)

    }else{

      const c = selectBasketCount.map((a)=> {
        if(a.id === item.id){
          a.amount++
        }
        return a
      })
      setSelectBasketCount(c)
      setBasketCount(basketCount+1)
      setBasketTrue(basketTrue ? basketTrue : !basketTrue)

    }
  }


  useEffect(()=>{
    const initialValue = 0
    const toplam =  selectBasketCount.reduce((previousValue,currentValue)=>previousValue +(currentValue.amount* currentValue.price),initialValue)
    setTotal([toplam])
  },[selectBasketCount])



  const minusIcon = (item) => {
      const c = selectBasketCount.map((a)=> {
        if(a.id === item.id && a.amount >1){
          a.amount--
          setBasketCount(basketCount-1)
        }
        return a
      })
      setSelectBasketCount(c)
  }

  const basketDeleted = (item)=>{
    const newBasket = selectBasketCount.filter((e)=> item.id !== e.id)
    setSelectBasketCount(newBasket)
    setBasketCount( basketCount - item.amount)
  }

  const orderBy = (secim) => {
    if(secim == "Lowest to highest"){
     const temp = filteredApi.sort((a,b) => a.price-b.price)
      setFilteredApi(temp)
      setSortPrices(sortPrices+1)
    }
    if(secim == "Highest to lowest"){
      const temp = filteredApi.sort((a,b) => b.price-a.price)
      setFilteredApi(temp)
      setSortPrices(sortPrices+1)
    }
  }

  const sizes = (beden) => {
  const seciliBeden = api.filter((a)=>a.availableSizes.filter((z)=>z == beden).length >0 )
  setFilteredApi(seciliBeden)
}

  const clearFilter = ()=> {
    setFilteredApi(api)
}

  return (

    <div className={"container allPage"}>
        <Navbar basketTrue={basketTrue} setBasketTrue={setBasketTrue} basketCount={basketCount}/>
        <div className={"row"}>
          <div  className={"mb-lg-4"}>
              <Sizes clearFilter={clearFilter} sizes={sizes} orderBy={orderBy}/>
            {sortPrices? "" : ""}
          </div>
            <div className={basketTrue ? "col-8" : "col-10"}>
                <Card addToCard={addToCard}  api={filteredApi}/>
            </div>
          <div className={"col-4"}>
                <Basket  total={total}  minusIcon={minusIcon} addToCard={addToCard} deneme={deneme} setDeneme={setDeneme} basketDeleted={basketDeleted} setSelectBasketCount={setSelectBasketCount} basketTrue={basketTrue} setBasketTrue={setBasketTrue} selectBasketCount={selectBasketCount} api={api} setBasketCount={setBasketCount} basketCount={basketCount}/>
          </div>
        </div>

    </div>
  );
}

export default App;
