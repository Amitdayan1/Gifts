import * as React from "react";
import "./App.css"
import Product from "./Product";
import moment from "moment";
import axios from "axios";
import Cookies from "universal-cookie/lib";

class HomePage extends React.Component{
    state = {
        products:[],
        selectedCategory: "Category",
        categories: ["Vacation", "Food", "Clothing"],
        selectedRegion: "Region",
        regions: ["South", "North", "East", "West","Central"],
        selectedPriceRange:"Price",
        priceRange:["100","300","600"],
        currentCurrency:"EUR",
        currencySign:["USD","ILS","GBP"],
        result:"",
        dateCreate: moment().format("YYYY-MM-DD"),
        nameFilter:"",
        accessKey:"",
        token:"",
        username:""
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8989/get-products`)
            .then(response => {
                const products = response.data;
                this.setState({products:products});
            })
        axios.get('http://127.0.0.1:8989/access-key')
            .then(response=>{
                const accessKey=response.data;
                this.setState({accessKey:accessKey})
            })
        const cookies=new Cookies();
        let tempToken=cookies.get("token")
        {this.setState({
            token:tempToken
        })}
        axios.get('http://127.0.0.1:8989/get-user',{
            params:{
                token:tempToken
            }
        }).then(response=>{
            this.setState({
                username:response.data.username
            })
        })
    }

    categoryChange = (event) => {
        const value = event.target.value;
        this.setState({
            selectedCategory: value
        })
    }

    regionChange = (event) => {
        const value = event.target.value;
        this.setState({
            selectedRegion: value
        })
    }
    priceRangeChange = (event) => {
        const value = event.target.value;
        this.setState({
            selectedPriceRange: value
        })
    }
    convertOption=(event)=>{
        const value = event.target.value;
        this.setState({
            currentCurrency: value,
        })}
    doConversion=()=>{
        axios.get("http://data.fixer.io/api/"+this.state.dateCreate+this.state.accessKey+this.state.currentCurrency).then(
            (response) => {
                const value = response.data.rates[this.state.currentCurrency];
                this.setState({
                    result:value
                })
                const tempProducts=this.state.products
                tempProducts.map(product=>{
                    return(
                        product.price=(product.price*value).toFixed(3)
                    )
                })
                this.setState({
                    products:tempProducts
                })
            })
    }
    filter = () => {
        const filtered = this.state.products.filter(product => {
            return (this.state.selectedCategory == "Category" || product.category == this.state.selectedCategory)
                &&(this.state.selectedRegion == "Region" || product.region == this.state.selectedRegion)
                &&(this.state.selectedPriceRange=="Price"|| product.price <= this.state.selectedPriceRange)
                &&(product.name.includes(this.state.nameFilter))

        })
        return filtered;
    }
    inputChange=(event)=>{
        let value =event.target.value;
        this.setState({
            nameFilter:value
        })
    }

    render()
    {
        return(
        <div className="HomeAll">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <div>
            <h2 className="Title" >Welcome To Best Gift {this.state.token !=1 ?this.state.username: ""}</h2>
    </div>
        <div className="row g-2 Sort">
            <select value={this.state.selectedCategory} onChange={this.categoryChange} className="form-select w-auto" aria-label="Default select example" >
                    <option value={"Category"}>
                        Category
                    </option>
                {
                    this.state.categories.map(category => {
                        return (
                            <option value={category}>
                                {category}
                            </option>
                        )
                    })
                }
            </select>
            <select value={this.state.selectedRegion} onChange={this.regionChange} className="form-select w-auto" aria-label="Default select example">
                <option value={"Region"}>
                    Region
                </option>
                {
                    this.state.regions.map(region => {
                        return (
                            <option value={region}>
                                {region}
                            </option>
                        )
                    })
                }
            </select>
            <select value={this.state.selectedPriceRange} onChange={this.priceRangeChange} className="form-select w-auto" aria-label="Default select example">
                <option value={"Price"}>
                    Price
                </option>
                {
                    this.state.priceRange.map(price => {
                        return (
                            <option value={price}>
                                {price}
                            </option>
                        )
                    })
                }
            </select>
        </div>
        <div className="Conversion">
            Show Price In Currency :
            <select value={this.state.currentCurrency} onChange={this.convertOption} className="form-select w-auto" aria-label="Default select example">
                <option value={"EUR"}>EUR</option>
                {
                    this.state.currencySign.map(currency => {
                        return (
                            <option value={currency}>
                                {currency}
                            </option>
                        )
                    })
                }
            </select>
            <br/>
            <button id="convertButton" onClick={this.doConversion}>Change Prices</button>
            <div>Today's Value is : {this.state.result} </div>
            <div id="Search" >Search By Name: <input id="searchInput" value={this.state.nameFilter} onChange={this.inputChange} placeholder={"Search..."}/></div>

        </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                this.filter().map(product => {
                    return (
                        <Product data={product}/>
                    )      })
            }
        </div>
        <div style={{textAlign:"right",fontSize:"8px"}} >(The prices are shown in {this.state.currentCurrency} currency)</div>


    </div>

    ) }

}
export default HomePage;
