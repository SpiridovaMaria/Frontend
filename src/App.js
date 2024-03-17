import React from 'react';
import './App.css';
import HelloWorld from './laba_1';
import { useState } from 'react';
import {setState} from 'react'
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Product = {
    article_number: 35472835,
    model: 'W NIKE TECH HERA',
    category: 'Sneakers',
    price: 110,
    rate: '4.0',
}

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
const list = [
  {
    article_number: 35472835,
    model: 'W NIKE TECH HERA',
    category: 'Sneakers',
    price: 110,
    rate: '4.0',
    url:'https://cdn.4stand.com/large/21/29/2129046b712883c5a8a7caeaad6f1b5bfb0a63d5.jpg',
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
    category: 'Tops',
    price: 5,
    rate: '4.0',
    url:'https://a.lmcdn.ru/product/M/P/MP002XW0P879_22270630_5_v1_2x.jpeg',
  },
  {
    article_number: 124234566,
    model: 'Pullover Tommy Hilfiger',
    category: 'Tops',
    price: 200,
    rate: '4.0',
    url:"https://a.lmcdn.ru/product/R/T/RTLADH542501_22687701_1_v1_2x.jpg",
  },
];
function Search(){
  const[searchTerm, setSearchTerm] = useState('');
  const[permTerm, setPermTerm] = useState('');
  const searchCards = list.filter(function(item){
    return item.model.toLowerCase().includes(searchTerm);
  });
  const handleChange = (event) => {
    setPermTerm(event.target.value);
  }
  const searchChange = (event) => {
    setSearchTerm(permTerm.toLowerCase());
  }
  
  return (<div>
    <h1>My shop</h1>
    <div class="input-group d-flex justify-content-center mb-5">
      <div class="form-outline" >
        <input type="search" placeholder="Search for product" class="form-control" onChange={handleChange} />
      </div>
      <button onClick={searchChange} type="button" class="btn btn-warning">
        <i class="bi bi-search"></i>
      </button>
    </div>
      
      <ListTechnologies list={searchCards}/>
    </div>
  );
}
const ListTechnologies = (props) =>{
  return(
    <div>
      <Row>
        {props.list.map(function(item)
        {
          return <Col className='col-4' key={item.article_number} style={{alignItems:'center'}}>
           
    <div class="row justify-content-center">
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
              <button type="button" class="btn btn-warning btn-lg fw-bold">Buy now</button>
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

function App(){
    return(
        <div className = "App">
           <Search/>
        </div>
    );
}
export default App;