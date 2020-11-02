import React from 'react';
import Header from './Header';
import Footer from './footer';
import '../static/css/singleproduct.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { NavLink} from 'react-router-dom'

var time = new Date();
console.log(time);



class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,

        };

    }

    componentDidMount() {
        let path = this.props.match.params.id;
        //console.log(path)
        console.log(this.props.match.params.id);
        axios.get('http://localhost:5000/item/item/?id=' + path)
            .then((res) => {
                this.setState({ data: res.data });
                console.log(this.state.data);
            }).catch(err => console.error(err))
    }
    handlesubmit=()=>{
        //alert('Congratulations!You shown intrested on this post.You can contact by given phone number')
        return <Redirect to="/myaccount"/>
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <div className="container">
                    <Header />
                    <div className="row" id="product">

                        <div id="product-detail" className="col-md-8">
                            <div style={{ borderBottom: '1px solid gray', marginBottom: '5px' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '17px', marginTop: '15px', paddingLeft: '5px' }}>{data !== undefined ? data[0].title : ''}</p>
                                <p style={{ marginTop: '-15px', paddingLeft: '5px', fontSize: '14px' }}><i className="fas fa-map-marker-alt"></i> <u>{data !== undefined ? data[0].city : ''} | </u><u> Added on: </u>{data !== undefined ? data[0].date : 'Not Add'} </p>
                            </div>
                            <div id="slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        {data !== undefined && <img className="d-block w-100" src={'http://localhost:5000/uploads/' + data[0].photo[0]} alt="First slide" height="450" />}
                                    </div>
                                    <div className="carousel-item ">
                                        {data !== undefined && <img className="d-block w-100" src={'http://localhost:5000/uploads/' + data[0].photo[1]} alt="Second slide" height="450" />}
                                    </div>
                                    <div className="carousel-item">
                                        {data !== undefined && <img className="d-block w-100" src={'http://localhost:5000/uploads/' + data[0].photo[2]} alt="Three slide" height="450" />}
                                    </div>
                                    <div className="carousel-item">
                                        {data !== undefined && <img className="d-block w-100" src={'http://localhost:5000/uploads/' + data[0].photo[3]} alt="Four slide" height="450" />}
                                    </div>


                                </div>
                                <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <hr />
                            <b><p>Description:</p></b>
                            <p>{data !== undefined ? data[0].description : ''}</p>
                            <p style={{ color: 'black', fontSize: '14px', fontFamily: 'calibri' }}>Please contact shared product person</p>
                            

                        </div>

                        <div id="seller-detial" className="col-md-4">

                            <div id="price">
                                <button type="button" id="price-btn" >Rs.{data !== undefined ? data[0].price : ''}</button>

                            </div>
                            <div id="seller">
                                <p style={{ fontWeight: 'bold', lineHeight: '0px' }}><i className="fas fa-user-tie" style={{ color: '#777', fontSize: '30px' }}></i> &nbsp;&nbsp;{data !== undefined ? data[0].name : ''}</p>
                                <p style={{ color: 'green', lineHeight: '0px', fontSize: '11px', paddingLeft: '40px' }}>Online</p>
                                <p style={{ fontSize: '13px', paddingLeft: '40px', color: 'blue' }}>(Active on site since 1 week)</p>
                                <p style={{ textAlign: 'center', fontSize: '18px' }}><i className="fas fa-phone"></i> {data !== undefined ? data[0].phone : ''}</p>
                            </div>
                            <div id="message">
                                {/* <button type="button" id="msg-btn"
                                 onClick={this.handlesubmit}>
                                     Intrested</button> */}
                                     <NavLink to='/Chat'><button type="button" className="btno"style={{marginLeft: "88px"}}   >intrested</button></NavLink>
                            </div>
                            <div id="tips">
                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Safety Tips for Buyers</p>
                                <ol type="1">
                                    <li>Meet shared person at a safe location</li>
                                    <li>Check the item before you buy</li>
                                    <li>Enjoy by sharing benefits


            
                                    </li>
                                </ol>

                            </div>


                        </div>
                    </div>

                </div>
                <Footer />
            </div>

        );
    }
}

export default SingleProduct;
