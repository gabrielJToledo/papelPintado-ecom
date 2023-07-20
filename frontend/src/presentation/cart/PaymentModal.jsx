import React, { useState } from 'react';
import { Modal, Form, Button, Col, Row } from 'react-bootstrap';
import './PaymentModal.css';
import InputMask from 'react-input-mask';

function PaymentModal() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [sendOffers, setSendOffers] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardName, setCardName] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [installments, setInstallments] = useState('1');
  const [isCpf, setIsCpf] = useState(true);

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    // Lógica para processar as informações de contato
    console.log('Email:', email);
    console.log('Enviar novidades e ofertas:', sendOffers);
    console.log('Nome:', firstName, lastName);
    console.log('Telefone:', phone);
    console.log('CEP:', zipCode);
    console.log('Endereço:', address, number);
    console.log('Bairro:', neighborhood);
    console.log('Complemento:', complement);
    console.log('Cidade:', city);
    console.log('Estado:', state);
    console.log('País/Região:', country);

    // Atualizar o estado para ir para a próxima etapa
    setStep(2);
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    // Lógica para processar a seleção do frete
    // ...

    // Atualizar o estado para ir para a próxima etapa
    setStep(3);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Lógica para processar os dados de pagamento
    // ...

    // Fechar o modal após enviar os dados de pagamento
    setShowModal(false);
  };

  const handleCpfCnpjChange = (e) => {
    const value = e.target.value;
    setCpfCnpj(value);
    setIsCpf(value.length <= 11); // Define isCpf baseado no número de caracteres digitados
  };

  return (
    <>
    <div className="d-flex flex-row-reverse">
      <button
        onClick={() => setShowModal(true)}
        className="buy_button buy_button-cart"
      >
        Finalizar Compra
      </button>
    </div>

    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Informações de Pagamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={`fade-transition ${step === 1 ? 'show' : ''}`}>
          {step === 1 && (
            <div>
              <h2>Contato</h2>
              <Form onSubmit={handleInfoSubmit}>
                <Form.Group className="my-2" controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-2" controlId="sendOffers">
                  <Form.Check
                    type="checkbox"
                    className="my-3"
                    label="Enviar novidades e ofertas para mim por e-mail"
                    checked={sendOffers}
                    onChange={(e) => setSendOffers(e.target.checked)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Continuar com o frete
                </Button>
              </Form>
            </div>
          )}
        </div>

        <div className={`fade-transition ${step === 2 ? 'show' : ''}`}>
          {step === 2 && (
            <div>
              <h2>Endereço de Entrega</h2>
              <Form onSubmit={handleShippingSubmit}>
                <Row>
                  <Col>
                    <Form.Group className="my-2" controlId="firstName">
                      <Form.Control
                        type="text"
                        placeholder="Nome"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="my-2" controlId="lastName">
                      <Form.Control
                        type="text"
                        placeholder="Sobrenome"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="my-2" controlId="phone">
                  <InputMask
                    mask="(99) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  >
                    {(inputProps) => (
                      <Form.Control
                        type="text"
                        placeholder="Telefone"
                        {...inputProps}
                      />
                    )}
                  </InputMask>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="my-2" controlId="zipCode">
                      <InputMask
                        mask="99999-999"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      >
                        {(inputProps) => (
                          <Form.Control
                            type="text"
                            placeholder="CEP"
                            {...inputProps}
                          />
                        )}
                      </InputMask>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="my-2" controlId="address">
                      <Form.Control
                        type="text"
                        placeholder="Rua"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="my-2" controlId="number">
                      <InputMask
                        mask="9999"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      >
                        {(inputProps) => (
                          <Form.Control
                            type="text"
                            placeholder="Número"
                            {...inputProps}
                          />
                        )}
                      </InputMask>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="my-2" controlId="neighborhood">
                      <Form.Control
                        type="text"
                        placeholder="Bairro"
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="my-2" controlId="complement">
                  <Form.Control
                    type="text"
                    placeholder="Complemento"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="my-2" controlId="city">
                      <Form.Control
                        type="text"
                        placeholder="Cidade"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="my-2" controlId="state">
                      <Form.Control
                        type="text"
                        placeholder="Estado"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="my-2" controlId="country">
                  <Form.Control
                    type="text"
                    placeholder="País/Região"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="secondary"
                  onClick={() => setStep(1)}
                  className="ml-2 my-3"
                >
                  Voltar para as informações
                </Button>

                <Button className="my-3 mx-3" variant="primary" type="submit">
                  Continuar com o frete
                </Button>
              </Form>
            </div>
          )}
        </div>

        <div className={`fade-transition ${step === 3 ? 'show' : ''}`}>
          {step === 3 && (
            <div>
              <h2>Pagamento</h2>
              <p>
                Contato: {email}
                <br />
                Endereço: {address}, {number}, {neighborhood}, {city}, {state}, {zipCode}
              </p>
              <Form onSubmit={handlePaymentSubmit}>
                <Form.Group className="my-2" controlId="cardNumber">
                  <InputMask
                    mask="9999 9999 9999 9999"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  >
                    {(inputProps) => (
                      <Form.Control
                        type="text"
                        placeholder="Número do Cartão"
                        {...inputProps}
                      />
                    )}
                  </InputMask>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="my-2" controlId="expiration">
                      <InputMask
                        mask="99/99"
                        value={expiration}
                        onChange={(e) => setExpiration(e.target.value)}
                      >
                        {(inputProps) => (
                          <Form.Control
                            type="text"
                            placeholder="Vencimento (MM/AA)"
                            {...inputProps}
                          />
                        )}
                      </InputMask>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="my-2" controlId="securityCode">
                      <Form.Control
                        type="text"
                        placeholder="Código de Segurança"
                        value={securityCode}
                        onChange={(e) => setSecurityCode(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="my-2" controlId="cardName">
                  <Form.Control
                    type="text"
                    placeholder="Nome Impresso no Cartão"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-2" controlId="cpfCnpj">
                  <InputMask
                    mask={
                      isCpf ? '999.999.999-99' : '99.999.999/9999-99'
                    }
                    value={cpfCnpj}
                    onChange={(e) => setCpfCnpj(e.target.value)}
                  >
                    {(inputProps) => (
                      <Form.Control
                        type="text"
                        placeholder="CPF/CNPJ"
                        {...inputProps}
                      />
                    )}
                  </InputMask>
                </Form.Group>
                <Form.Group className="my-2" controlId="installments">
                  <Form.Control
                    as="select"
                    value={installments}
                    onChange={(e) => setInstallments(e.target.value)}
                  >
                    <option value="1">1 parcela</option>
                    <option value="2">2 parcelas</option>
                    <option value="3">3 parcelas</option>
                    {/* Outras opções de parcelamento */}
                  </Form.Control>
                </Form.Group>
                <Button
                  variant="secondary"
                  onClick={() => setStep(2)}
                  className="mr-2 my-2"
                >
                  Voltar para o frete
                </Button>
                <Button className=' my-2 mx-2' variant="primary" type="submit">
                  Finalizar Compra
                </Button>
              </Form>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  </>
  );
}

export default PaymentModal;
