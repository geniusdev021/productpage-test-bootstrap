import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const ModalService = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Get FREE 24-Hour Production on This Item</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <ul>
        <li>Ready to Ship in 1-Business Day.</li>
        <li>
          Please allow time for delivery when ordering. Transit time is based on
          the shipping method that you choose.
        </li>
        <li>
          Promotional items that are designated as a 24-Hour product can most often ship the
          next business day, for no additional charge, with final order and
          art approval received by 3:00 PM EST (times vary per product).
        </li>
        <li>
          Excludes art preparation time & applies to maximum
          quantity based on individual product.
        </li>
        <li>
          ALL standard & 24-Hour orders include a FREE digital proof.
        </li>
        <li>
          Please call or chat online with a member of the Customer
          Care team for specific product deadlines.
        </li>
      </ul>
    </Modal.Body>
  </Modal>
);

ModalService.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

ModalService.defaultProps = {
  show: false,
  handleClose: () => {},
};

export default ModalService;
