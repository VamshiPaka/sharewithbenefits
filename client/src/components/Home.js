import React from 'react';
import { NavLink } from 'react-router-dom';
import '../static/css/app.css';
import Header from './Header';
import Footer from './footer';
import { category } from '../config/category';
import Slider from './Slider/slideshow'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            category: [],
            place: ''
        };
    }
    componentDidMount() {
        this.setState({ category: category })

        var input = document.getElementById('location');
        var options = {
            types: ['(cities)'],
            componentRestrictions: { country: "pak" }
        };
        let autoComplete = new window.google.maps.places.Autocomplete(input, options);
        autoComplete.addListener('place_changed', () => {
            var place = autoComplete.getPlace().name;
           
            const upper = this.capital(place);
            window.location = '/cities/' + upper;
            console.log(upper);

        });
    }
    capital = (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }


    render() {
        return (
            <div>
                <div id="container" className="container">
                    <Header />
                    <div id="content">
                        

                                
                           <Slider/>

                        <div id="main-content" className="row">
                            
                          
                                {
                                    this.state.category.map((item, i) => {
                                        return (
                                            <NavLink to={`/list/${item.cate}`} key={item.cate}> <div id="cate-item">
                                                <img src={item.ic} alt={item.cate} height="50" width="50" />
                                                <p>{item.cate}</p>
                                            </div></NavLink>
                                        );

                                    })
                                }


                        

                            <div id="follow" className="col-md-4 col-sm-4  col-xs-4 col-lg-4">
                            
                            {/* <img src={"https://fbcd.co/product-lg/ce716b231574f32f8bc09ed10aa3b04a_resize.JPG"}
                            height="300" id="follow-us"/> */}
                                 {/* <Slider/> */}
                                 
                                 

                    </div>


                        </div>





                    </div>



                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;