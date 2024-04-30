import React, { useEffect, useState } from 'react'
import './style.css';
import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function Page1() {
  // For Slider MUI code
  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  // Fetch product API
  const [sproducts, setsproducts] = useState([]);
  const [allcategories, setallcategories] = useState([]);
  const [tocatcolor, settocatcolor] = useState();
  const [cnt, setcnt] = useState(0);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setsproducts(json.products));

    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(json => setallcategories(json));
  }, [])

  const searchbtn = (val) => {
    fetch('https://dummyjson.com/products/search?q=' + val)
      .then(res => res.json())
      .then(json => setsproducts(json.products));
  }

  const categoryclk = (n) => {
    if (n === 'all') {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setsproducts(json.products));
    }
    else {
      fetch('https://dummyjson.com/products/category/' + n)
        .then(res => res.json())
        .then(json => setsproducts(json.products));
    }
    setcnt(n + 1);
    settocatcolor(n);
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col className='col-4 col-md-2 part-1'>
            <div className='inpart-1 m-1 m-md-4'>
              <div>
                <div className='fw-bold'>Filter By Price</div>
                <Box className="pt-3" sx={{ width: "100%" }}>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
                <Button variant="contained" className='fw-bold bg-dark btn1'>filter</Button>
              </div>
              <div className='pt-5'>
                <div className='fw-bold'>Filter By categories</div>
                <ul className='pt-3 ctglist'>
                  <li onClick={() => categoryclk('all')} style={{ color: (tocatcolor === 'all' || cnt === 0) ? "orange" : "inherit", fontWeight: (tocatcolor === 'all' || cnt === 0) ? "700" : "400", paddingLeft: (tocatcolor === 'all' || cnt === 0) ? "5px" : "0px" }}>All category</li>
                  {
                    allcategories.map((item) => (
                      <li key={item} onClick={() => categoryclk(item)} style={{ color: (tocatcolor === item) ? 'orange' : 'inherit', fontWeight: (tocatcolor === item) ? "700" : "400", paddingLeft: (tocatcolor === item) ? "5px" : "0px" }}>{item}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='pt-5'>
                <div className='fw-bold'>Filter By Color</div>
                <ul className='pt-3 ctglist'>
                  <li>Blue(4)</li>
                  <li>Red(4)</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className='col-8 col-md-10 part-2 py-4'>
            <div className='newbox p-3 bg-dark mb-4 d-flex justify-content-evenly'>
              <h1 className='text-light'>Search any Products here --</h1>
              <input type="text" placeholder='Search product' onChange={e => searchbtn(e.target.value)} className='search' />
            </div>

            <Container>
              <Row className='gy-4'>
                {sproducts.map((item) => {
                  return (
                    <Col key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                      
                        <div className='text-center'>
                          <div className="card" style={{ width: '100%' }}>
                            <div className='imagebox'>
                              <img src={item.thumbnail} className="card-img-top pimage" alt={"Image of " + item.title} />
                            </div>
                            <div className="card-body">
                              <Link className='card-text stretched-link' to={`/pro_detail/${item.id}`}>{item.title}</Link>
                              {/* <a className="card-text" ></a> */}
                              <h6 className="card-title fw-bolder">₹{item.price} <del className='text-secondary fw-light'>{(item.price === "") ? '' : '₹'}{item.price + 85}</del></h6>
                            </div>
                          </div>
                        </div>
                    </Col>
                  )
                })}
              </Row>
            </Container>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page1;
