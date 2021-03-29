import React, { useState } from 'react';
import {
  Row, Col, Image,
} from 'react-bootstrap';
import Layout from '../../components/layout';
import TablePricing from '../../components/table/TablePricing';
import ModalService from '../../components/modal/ModalService';
import HomeDescription from '../../components/HomeDescription';
import FieldQty from '../../components/FieldQty';

import './styles.scss';

const HomePage = () => {
  const [qty, setQty] = useState(12);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout>
      <Row className="page-title">
        <Col md="10">
          <p>
            20 OZ ARCTIC ZONE® TITAN THERMAL HP® COPPER BOTTLE
          </p>
        </Col>
        <Col>
          <Image role="button" src="assets/24_hour_icon.png" onClick={handleShow} />
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <Image src="assets/product_image.jpg" fluid />
        </Col>
        <Col>
          <Row>
            <Col md="12">
              <div className="product-cart">
                <div className="product-title-cart">
                  <div className="title-cart">
                    <div className="number">1</div>
                    <div>
                      <h4>ADD QUANTITY TO SELECTED PRODUCT</h4>
                      <small>QUANTITY: (MIN: 12)</small>
                    </div>
                  </div>
                </div>

                <Row>
                  <Col md="12">
                    <Image className="product-image-small" src="assets/product_image.jpg" fluid rounded />
                    <p>Brick Red</p>
                  </Col>
                  <Col md="12" lg="3">
                    <FieldQty qty={qty} setQty={setQty} />
                    <p>Enter Qty</p>
                  </Col>
                </Row>

              </div>
            </Col>
            <Col md="12">
              <div className="product-cart">
                <div className="product-title-cart">
                  <div className="title-cart">
                    <div className="number">2</div>
                    <h4>Pricing</h4>
                  </div>
                </div>
                <TablePricing />
                <p>Sale Expires: 12/31/2021</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <HomeDescription />
        </Col>
      </Row>

      <ModalService show={show} handleClose={handleClose} />
    </Layout>
  );
};

export default HomePage;
