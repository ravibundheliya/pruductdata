import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import './style.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';
import { pushdata } from '../../store/cartSlice';

function Prodetails() {

    const cartval = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    const [data, setdata] = useState({});
    const [dataimg, setdataimg] = useState([]);
    const [qty, setqty] = useState(1);
    const [cnt, setcnt] = useState(1);
    const [message, setmessage] = useState("");
    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then((alldata) => {
                setdata(alldata);
                setdataimg(alldata.images);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [params])

    const settings = {
        customPaging: function (i) {
            return (
                <div>
                    <img src={dataimg[i]} alt='' />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const starPercentage = (data.rating / 5) * 100;
    const starPercentageRounded = `${Math.round(starPercentage)}%`;

    const dispatingdata = () => {
        const updatedval = { ...data, stock: qty }
        dispatch(pushdata(updatedval))
        const tem = cartval.find(item => item.id === data.id)
        if (tem) {
            setmessage("Product updated succefully...")
        }
        else {
            setmessage("Product added to cart...")
        }
        setqty(1);
    }

    const pluscart = () => {
        setqty(qty + 1)
        dispatch(increment())
    }
    const minusecart = () => {
        setqty((qty > 1) ? qty - 1 : 1)
        dispatch(decrement())
    }

    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col className='col-12 col-lg-7 m-0 p-0'>
                        <div className="slider-container">
                            <Slider {...settings} className='psldimg' style={{ overflow: "hidden" }}>
                                {
                                    dataimg.map((item, index) => {
                                        return (
                                            <div key={item} className='imageclass'>
                                                <img src={item} alt='' />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </Col>
                    <Col className='col-12 col-lg-5'>
                        <h1 className='fw-bolder'>{data.title}</h1>
                        <h3 className='fw-bolder py-2'>₹{data.price} <del style={{ color: "grey", fontSize: "22px" }}>₹{Math.round((data.price * 100) / (100 - data.discountPercentage))}</del></h3>
                        <div className='d-flex' style={{ gap: "4px" }}>
                            <div className="star-rating">
                                <div className="stars-outer">
                                    <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                                </div>
                                <span className="rating">{data.rating} out of 5</span>
                            </div>
                        </div>
                        <div className='py-2' style={{ color: "grey" }}>{data.description}</div>
                        <div className='py-4'>
                            <div className='d-flex'>
                                <div><input type="text" className='qtyvalue' name="" id="" value={(qty > 0) ? qty : 1} readOnly /></div>
                                <div className='d-grid qtybtn'>
                                    <button onClick={pluscart}><i className="bi bi-caret-up"></i></button>
                                    <button onClick={minusecart}><i className="bi bi-caret-down"></i></button>
                                </div>
                                <button type="button" className="btn px-5 ms-3 addtobtn" onClick={dispatingdata} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Add to cart
                                </button>
                                {/* Modal */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">{message}</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-2 d-flex heart'>
                            <div><i className="bi bi-heart"></i> <span>Add to wishlist</span></div>
                        </div>
                        <div className='p-2' style={{ cursor: "default", gap: "2px", display: "grid" }}>
                            <div className='d-flex'>
                                <div>SKU: </div>
                                <div>41236 - 1</div>
                            </div>
                            <div className='d-flex' style={{ gap: "5px" }}>
                                <div>Categories: </div>
                                <div className='d-flex ctg-det' style={{ color: "grey" }}>
                                    <div>{data.category}</div>
                                </div>
                            </div>
                            <div className='d-flex' style={{ gap: "5px" }}>
                                <div>Brands: </div>
                                <div className='d-flex ctg-det' style={{ color: "grey" }}>
                                    <div>{data.brand}</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col className="col-12">
                        <hr />
                        <div className="d-flex justify-content-center fw-bold drplist" style={{ gap: "20px" }}>
                            <div onClick={() => setcnt(1)} style={(cnt === 1) ? { color: "black" } : { color: "grey" }}>Description</div>
                            <div onClick={() => setcnt(2)} style={(cnt === 2) ? { color: "black" } : { color: "grey" }}>Review (03)</div>
                        </div>
                        <hr />
                    </Col>
                    <Col className='col-12 fw-normal'>
                        {
                            (cnt === 1) ? <p style={{ color: "grey", fontSize: "18px" }}>
                                {data.description}
                            </p> :
                                <div className='d-grid reviewlist' style={{ gap: "10px" }}>
                                    <div className='fw-bolder py-3'>Here you can review the item</div>
                                    <input type="text" className='p-2' style={{ color: "grey" }} placeholder='Name *' />
                                    <input type="email" className='p-2' style={{ color: "grey" }} placeholder='Email *' />
                                    <textarea name="" id="" className='p-2' style={{ color: "grey" }} placeholder='Address *' rows={4}></textarea>
                                    <div className='d-flex justify-content-between' style={{ alignItems: "center" }}>
                                        <div className='d-flex rw-start' style={{ gap: "5px" }}><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></div>
                                        <button className='px-5 py-3 ms-3 addtobtn'>Submit</button>
                                    </div>
                                </div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Prodetails
