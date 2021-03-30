import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const FieldQty = ({ qty, setQty }) => (
  <InputGroup>
    <InputGroup.Prepend>
      <Button size="sm" variant="outline-secondary" onClick={() => setQty(qty - 12)} disabled={qty <= 0}> - </Button>
    </InputGroup.Prepend>
    <FormControl className="text-center" size="sm" type="number" aria-describedby="basic-addon1" value={qty} onChange={(e) => setQty(Number(e.target.value))} />
    <InputGroup.Append>
      <Button size="sm" variant="outline-secondary" onClick={() => setQty(qty + 12)}> + </Button>
    </InputGroup.Append>
  </InputGroup>
);

FieldQty.propTypes = {
  qty: PropTypes.number,
  setQty: PropTypes.func,
};

FieldQty.defaultProps = {
  qty: 12,
  setQty: () => {},
};

export default FieldQty;
