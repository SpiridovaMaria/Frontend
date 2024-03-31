import React, { useEffect } from 'react';
import './App.css';
import HelloWorld from './laba_1';
import { useState } from 'react';
import {setState} from 'react'
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// 1 продукт
const Product = {
    article_number: 35472835,
    model: 'W NIKE TECH HERA',
    category: 'Sneakers',
    price: 110,
    rate: '4.0',
}
// карточка для админа с вводом инфорации + карточка для покупателя
class Product_profile extends Component{
  constructor(props){
    super(props);
    this.state = {text:this.props.text, 
                  category:this.props.category, 
                  price:this.props.price,
                  article_number:this.props.article_number};
  }
  render(){
    return(
        <section class ="d-flex justify-content-between" style={{background: '#eee'}}>   
          <div class="container py-5 fs-4">
            <div class="row justify-content-center">
              <div class="col-md-9 col-lg-6 col-xl-5">
                <div class="card" style={{borderRadius: '15 px'}}>
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://cdn.4stand.com/large/21/29/2129046b712883c5a8a7caeaad6f1b5bfb0a63d5.jpg" class="img-fluid mt-3 rounded"
                      alt="Sneakers" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p> <input type="text" placeholder="model" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}></input><button className='small' onClick={()=>this.setState({text:''})}>Reset</button></p>
                        <p class="small text-muted"><input type="text" placeholder="category" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}></input><button onClick={()=>this.setState({category:''})}>Reset</button></p>
                      </div>
                      <div>
                
                        <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <p class="small text-muted">Rated {Product.rate}/5</p>
                      </div>
                    </div>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body pb-0">
                    <div className="d-flex justify-content-between">
                      <p><a href="#!" class="text-dark">$ <input style={{width:80}} type="number" value={this.state.price} onChange={(e) => this.setState({price: e.target.value})}></input><button onClick={()=>this.setState({price:0})}>Reset</button></a></p>
                      <p className="text-dark"><input type="text" placeholder="article_number" style={{width:210}} value={this.state.article_number} onChange={(e) => this.setState({article_number: e.target.value})}></input><button onClick={()=>this.setState({article_number:''})}>Reset</button></p>
                    </div>
                  </div>
                  <hr class="my-0" />
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                      <a href="#!" class="text-danger fw-bold">Cancel</a>
                      <button type="button" class="btn btn-warning btn-lg fw-bold">Buy now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container py-5 fs-4">
            <div class="row justify-content-center">
              <div class="col-md-9 col-lg-6 col-xl-5">
                <div class="card" style={{borderRadius: '15 px'}}>
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://cdn.4stand.com/large/21/29/2129046b712883c5a8a7caeaad6f1b5bfb0a63d5.jpg" class="img-fluid mt-3 rounded"
                      alt="Sneakers" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p><a href="#!" class="text-dark fw-bold">{this.state.text}</a></p>
                        <p class="small text-muted">{this.state.category}</p>
                      </div>
                      <div>
                        <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                        <p class="small text-muted">Rated {Product.rate}/5</p>
                      </div>
                    </div>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body pb-0">
                    <div className="d-flex justify-content-between">
                      <p><a href="#!" class="text-dark">${this.state.price}</a></p>
                      <p className="text-dark">{this.state.article_number}</p>
                    </div>
                  </div>
                  <hr class="my-0" />
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                      <a href="#!" class="text-danger fw-bold">Cancel</a>
                      <button type="button" class="btn btn-warning btn-lg fw-bold">Buy now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  
      );
  }
}

class Test extends Component{
    constructor(props){
      super(props);
      this.state = {text:this.props.text};
    }
    render(){
      return(
        <div>
          <input type="text" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}></input>
          <p>{this.state.text}</p>
          <button onClick={()=>this.setState({text:''})}>Reset</button>
        </div>
      )
    }
}

// данные продуктов
const list = [
  {
    article_number: 35472835,
    model: 'NIKE TECH HERA',
    category: 'footwear',
    price: 110,
    rate: '4.0',
    url:'https://a.lmcdn.ru/product/R/T/RTLADH066601_22530133_1_v1.jpg',
  },
  {
    article_number: 12345,
    model: 'Spirit Kattana',
    category: 'trousers',
    price: 100,
    rate: '4.0',
    url:'https://a.lmcdn.ru/product/M/P/MP002XW0YR8N_20984319_1_v1.jpeg',
  },
  {
    article_number: 94746353,
    model: 'SELA White T-Shirt',
    category: 'tops',
    price: 5,
    rate: '4.0',
    url:'https://a.lmcdn.ru/product/M/P/MP002XW0P879_22270630_5_v1_2x.jpeg',
  },
  {
    article_number: 124234566,
    model: 'Pullover Tommy Hilfiger',
    category: 'tops',
    price: 200,
    rate: '4.0',
    url:"https://a.lmcdn.ru/product/R/T/RTLADH542501_22687701_1_v1_2x.jpg",
  },
  {
    article_number: 1763334566,
    model: 'Volento Trousers',
    category: 'trousers',
    price: 80,
    rate: '4.0',
    url:"https://a.lmcdn.ru/img600x866/M/P/MP002XW0PBP1_22321933_1_v1.jpeg",
  },
  {
    article_number: 132453882152,
    model: 'Covani Loafers',
    category: 'footwear',
    price: 50,
    rate: '4.0',
    url:'https://a.lmcdn.ru/product/M/P/MP002XW0MUYC_22979224_2_v1.jpg',
  },
];
//поиск + фильтрация продуктов по категориям
function Search(){
  const categories = Array.from(new Set(list.map(function(item){
    return item.category;
  })));

  const useStorage = (initState,key) => {
    const[valueTerm,setValueTerm] = useState(localStorage.getItem(key) || initState);
    useEffect(() => {
      localStorage.setItem(key, valueTerm);
    },[valueTerm]);
    return [valueTerm,setValueTerm];
  }
  const useSwitch = (initState) => {
    const[valueTerm,setValueTerm] = useState(initState);
    const change = () =>{
      setValueTerm(!valueTerm);
    }
    return [valueTerm,change];
  }
  const[isShown,setIsShown] = useSwitch(true);
  const[searchTerm, setSearchTerm] = useState('');
  const[searchPermTerm, setSearchPermTerm] = useState('');
  const[filterTerm,setFilterTerm] = useState('');
  const[loginTerm,setLoginTerm] = useStorage('client','login');
  const[loginPermTerm, setLoginPermTerm] = useState('');

  const searchCards = list.filter(function(item){
    return filterTerm!="" ? item.model.toLowerCase().includes(searchTerm) & item.category==filterTerm: item.model.toLowerCase().includes(searchTerm);
  });

  const handleSearchChange = (event) => {
    setSearchPermTerm(event.target.value);
  }
  const searchChange = (event) => {
    setSearchTerm(searchPermTerm);
  }
  const filterChange=(event)=> {
    setFilterTerm(event.target.value);
  }

  const handleLoginChange = (event) => {
    setLoginPermTerm(event.target.value);
  }
  const loginChange = (event) => {
    setLoginTerm(loginPermTerm);
  }
  const loginDelete = (event) => {
    localStorage.clear();
    localStorage.removeItem("basket");
    setLoginTerm('client');
  }


  return (<div>
    <h1>My shop</h1>
    <div>
      {
        isShown &&(<div class="alert alert-warning" role="alert">
        Our team are glad to see you in our shop. There are a lot sales now, so don't miss them!
        <button onClick={setIsShown} type="button" class="btn">
        <i class="bi bi-x"></i>
      </button>
      </div>)
      }
      
    </div>
    <div class="input-group d-flex justify-content-center mb-3">
       
          {
            loginTerm==='client' &&(
            <>
              <div class="form-outline" >
                <input type="text" placeholder="Input your name" id="login" class="form-control shadow-none" onChange={handleLoginChange} />
              </div>
              <button onClick={loginChange} type="button" class="btn btn-primary">
              <i class="bi bi-box-arrow-in-right"></i>
              </button>
        </>)
          }
         {
            loginTerm!=='client' &&(
            <>
              <div class="form-outline mx-3 text-danger" >
                <h4>{loginTerm}</h4>
              </div>
              <button onClick={loginDelete} type="button" class="btn btn-danger">
              <i class="bi bi-door-closed"></i>
              </button>
        </>)
          }
       
    </div> 

    <div class="input-group d-flex justify-content-center mb-3">
       <div class="form-outline" >
            <input type="search" placeholder="Search for product" class="form-control shadow-none" onChange={handleSearchChange} />
          </div>
          <button onClick={searchChange} type="button" class="btn btn-warning">
            <i class="bi bi-search"></i>
          </button>
          <div class="form-outline mx-2">
          <select class="form-select shadow-none" aria-label="Choose category" onChange={filterChange}>
              <option value=''>Choose the category</option>
              <ListCategories list={categories}/>
          </select>
        </div>
    </div>
      
      <ListTechnologies list={searchCards}/>
    </div>
  );
}

// карточки продуктов
const ListTechnologies = (props) =>{

  return(
    <div>
      <Row>
        {props.list.map(function(item)
        {
          return <Col className='col-4' key={item.article_number} style={{alignItems:'center'}}>
           
    <div class="row justify-content-center mt-2">

      <div class="col-md-9 col-lg-6 col-xl-8">
        <div class="card" style={{borderRadius: '15 px'}}>
          <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={item.url} class="img-fluid top-rounded"
              alt="Sneakers" />
          </div>
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <div>
                <p><a href="#!" class="text-dark fw-bold">{item.model}</a></p>
                <p class="small text-muted">{item.category}</p>
              </div>
              <div>
        
                <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                <p class="small text-muted">Rated {item.rate}/5</p>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <p><a href="#!" class="text-dark">${item.price}</a></p>
              <p className="text-dark">{item.article_number}</p>
            </div>
          </div>
          <hr class="my-0" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
              <a href="#!" class="text-danger fw-bold">Cancel</a>
              <button type="button" class="btn btn-warning btn-lg fw-bold">
                Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
          </Col>
        })}
      </Row>
    </div>
  );
}

// список категорий
const ListCategories = (props) => {
  return( <>
    {props.list.map(function(item){
      return <option>{item}</option>
    })}
  </>);
}

function App(){
    return(
        <div className = "App">
           <Search/>
        </div>
    );
}
export default App;