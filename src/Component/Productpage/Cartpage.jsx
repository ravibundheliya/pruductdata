import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearall, deletedata } from '../../store/cartSlice';

function Cartpage() {
    const cartvalue = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    const [qty, setqty] = useState(1);
    const pluscart = () => {
        setqty(qty + 1)
    }
    const minusecart = () => {
        setqty((qty > 0) ? qty - 1 : 1)
    }
    const confirmdelete=()=>{
        if (window.confirm("Are you sure you want to clear the cart?")) {
            dispatch(clearall());
        }
    }

    return (
        <>
            {
                (cartvalue.length > 0) ?
                <div className='text-center px-5 pt-5'>
                    <button className='px-5 py-3 addtobtn newaddtobtn' onClick={confirmdelete}>Clear Cart</button>
                </div>
                : ""
            }
            <Container className='pt-3 pb-5'>
                <Row>
                    <Col className='px-3 p-md-0 '>
                        <table width={"100%"}>
                            <thead className='carthead'>
                                <tr className='text-uppercase'>
                                    <th></th>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th className='text-center'>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Mapping Cart Product */}
                                {
                                    cartvalue.map((item, index) => {
                                        return (
                                            <tr className='cartborder text-center text-md-start' key={item.id}>
                                                <td className='closeborder'><i className="bi bi-x" onClick={() => dispatch(deletedata(item.id))}></i></td>
                                                <td className='cartimg p-3'><img src={item.thumbnail} alt="" /></td>
                                                <td><Link to={`/pro_detail/${item.id}`} className='plink'>{item.title}</Link></td>
                                                <td className='p-price'>₹{item.price}</td>
                                                <td>
                                                    <div className='d-flex justify-content-center'>
                                                        <div><input type="text" className='qtyvalue newqtyvalue' name="" id="" value={(qty>1)?qty:1} readOnly /></div>
                                                        <div className='d-grid qtybtn newqtybtn'>
                                                            <button onClick={pluscart}><i className="bi bi-caret-up pb-2"></i></button>
                                                            <button onClick={minusecart}><i className="bi bi-caret-down"></i></button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='p-price'>₹{item.price * item.stock}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cartpage
