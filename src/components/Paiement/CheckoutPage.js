import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton, Spinner } from 'react-bootstrap';
import { FaCreditCard, FaPaypal, FaMoneyBillAlt } from 'react-icons/fa';

function CheckoutPage() {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          <div className="checkout-container">
            <div className="mb-4">
              <CheckoutProgress currentStep={3} />
            </div>
            <Row>
              <Col xs={12} md={6}>
                <BuyerInfoSection />
              </Col>
              <Col xs={12} md={6}>
                <PaymentSection />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function CheckoutProgress({ currentStep }) {
  const steps = [
    { id: 1, name: 'Shopping Summary' },
    { id: 2, name: 'Optional' },
    { id: 3, name: 'Payment' },
    { id: 4, name: 'Shipping' }
  ];

  return (
    <div className="checkout-progress">
      <div className="progress-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="step-item">
              <div className={`step-circle ${currentStep >= step.id ? 'active' : ''}`}>
                {currentStep > step.id ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              <div className="step-label">{step.name}</div>
            </div>
            {index < steps.length - 1 && (
              <div className={`step-connector ${currentStep > step.id ? 'active' : ''}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function BuyerInfoSection() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes('@')) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="buyer-info-section">
      <h2>Buyer Info</h2>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" defaultValue="Michael" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" defaultValue="Davis" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" defaultValue="108235 Alvin Prairie, Austin, TX 98451" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleEmailChange}
            isInvalid={emailError}
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" defaultValue="(512) 974-3546" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control type="text" defaultValue="Carrera Quinta 25, Popayán Avenue" />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="zipcode">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control type="text" defaultValue="52001" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control as="select" defaultValue="Sanford">
                <option>Sanford</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control as="select" defaultValue="USA">
            <option>United States</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="note">
          <Form.Label>Note</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}

function CreditCardForm() {
  return (
    <div className="credit-card-form mt-4">
      <Form.Group className="mb-4" controlId="nameOnCard">
        <Form.Label>NAME ON CARD</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="cardNumber">
        <Form.Label>CARD NUMBER</Form.Label>
        <div className="card-number-input">
          <Form.Control type="text" placeholder="0000 0000 0000 0000" />
        </div>
      </Form.Group>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Group controlId="expiryDate">
            <Form.Label>EXPIRY DATE</Form.Label>
            <Form.Control as="select">
              <option>Month</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="expiryYear">
            <Form.Label>&nbsp;</Form.Label>
            <Form.Control as="select">
              <option>Year</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="cvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" placeholder="000" />
          </Form.Group>
        </Col>
        <Col md={6} className="d-flex align-items-end justify-content-end">
          <div className="form-check">
            <Form.Check type="checkbox" id="saveCard" label="Save" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

function PaymentMethods({ selectedMethod, onSelectMethod }) {
  const methods = [
    { id: 'payTransfer', label: 'Pay & Transfer', icon: <FaMoneyBillAlt /> },
    { id: 'creditCard', label: 'Credit Card', icon: <FaCreditCard /> },
    { id: 'paypal', label: 'PayPal', icon: <FaPaypal /> }
  ];

  return (
    <div className="payment-methods">
      <div className="methods-container">
        {methods.map(method => (
          <div
            key={method.id}
            className={`payment-method ${selectedMethod === method.id ? 'active' : ''}`}
            onClick={() => onSelectMethod(method.id)}
          >
            <div className="method-icon">{method.icon}</div>
            <div className="method-label">{method.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentSection() {
  const [selectedMethod, setSelectedMethod] = useState('creditCard');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Order placed successfully!');
    }, 2000);
  };

  return (
    <div className="payment-section">
      <h2>Payment</h2>
      <PaymentMethods selectedMethod={selectedMethod} onSelectMethod={setSelectedMethod} />
      {selectedMethod === 'creditCard' && <CreditCardForm />}
      <Button variant="primary" className="w-100 mt-4" onClick={handlePlaceOrder}>
        {isProcessing ? (
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
        ) : (
          'PLACE ORDER'
        )}
      </Button>
    </div>
  );
}

export default CheckoutPage;
