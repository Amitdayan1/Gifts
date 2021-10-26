import * as React from "react";
import "./App.css"
import Product from "./Product";
import moment from "moment";
import axios from "axios";

class HomePage extends React.Component{
    state = {
        products: [{
            name: "My Way",
            price: 300,
            category: "Food",
            region: "South",
            phone: "0502433259",
            imgLink:"images/myWay.PNG"
        }, {
            name: "Orient Jerusalem",
            price: 6700,
            category: "Vacation",
            region: "Central",
            phone: "023397333",
            imgLink:"images/orient.PNG"

        }, {
            name: "Hotel Rimonim",
            price: 3400,
            category: "Vacation",
            region: "South",
           phone: "086988877",
            imgLink:"images/rimonim.PNG"
        }, {
            name: "Club Hotel",
            price: 3500,
            category: "Vacation",
            region: "North",
            phone: "086932447",
            imgLink:"images/clubHotel.PNG"
        }, {
            name: "Queen Of Sheba",
            price: 6500,
            category: "Vacation",
            region: "South",
            phone: "086985337",
            imgLink:"images/sheba.PNG"
        }, {
            name: "Milos Dead Sea",
            price: 1000,
            category: "Vacation",
            region: "East",
            phone: "029714557",
            imgLink:"images/milos.PNG"
        }, {
            name: "H&M",
            price: 30,
            category: "Clothing",
            region: "South",
            phone: "1800993667",
            imgLink:"images/hNm.PNG"
        }, {
            name: "2C",
            price: 600,
            category: "Food",
            region: "Central",
            phone: "036595114",
            imgLink:"images/2c.PNG"
        }],
        selectedCategory: "All",
        categories: ["Vacation", "Food", "Clothing"],
        selectedRegion: "All",
        regions: ["South", "North", "East", "West","Central"],
        selectedPriceRange:"All",
        priceRange:["100","300","600"],
        currentCurrency:"EUR",
        currencySign:["USD","ILS","GBP"],
        result:"",
        dateCreate: moment().format("YYYY-MM-DD"),
        nameFilter:"",
        pageValue:""

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
        axios.get("http://data.fixer.io/api/"+this.state.dateCreate+"?access_key=31ac57b1c066ae6c762417e3a95af060&symbols="+this.state.currentCurrency).then(
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
            return (this.state.selectedCategory == "All" || product.category == this.state.selectedCategory)
                &&(this.state.selectedRegion == "All" || product.region == this.state.selectedRegion)
                &&(this.state.selectedPriceRange=="All"|| product.price <= this.state.selectedPriceRange)
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
    {return(
        <div className="HomeAll">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <div className="Title">
            <h2>Welcome To Best Gift</h2>
    </div>
        <div className="Sort">
            Category:
            <select value={this.state.selectedCategory} onChange={this.categoryChange} >
                <option value={"All"}>
                    All
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
            Region:
            <select value={this.state.selectedRegion} onChange={this.regionChange}>
                <option value={"All"}>
                    All
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
            Price:
            <select value={this.state.selectedPriceRange} onChange={this.priceRangeChange}>
                <option value={"All"}>
                    All
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
            <select value={this.state.currentCurrency} onChange={this.convertOption}>
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
            <div className="row row-cols-1 row-cols-md-3 g-4">
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
