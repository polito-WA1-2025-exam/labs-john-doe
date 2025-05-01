import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';


function MakeGuess (props) {
    const onGuess = props.onGuess
    const [feature, setFeature] = useState('')
    const [value, setValue] = useState('')

    const features = {
        color: ['Red', 'Blue', 'Yellow', 'Green'],
        body: ['Small', 'Large'],
        habitat: ['Forest', 'Mountain', 'Grassland', 'Lake'],
        evolution: [1, 2, 3],
        generation: [1, 2, 3, 4, 5],
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (feature && value) {
          onGuess(feature, value);
          setFeature('');
          setValue('');
        }
      };

      return (
        <Form onSubmit={handleSubmit} className="m-3">
          <Row>
            <Col>
              <Form.Select value={feature} onChange={(e) => setFeature(e.target.value)}>
                <option value="">Select feature</option>
                {Object.keys(features).map((f, i) => (
                  <option key={i} value={f}>{f}</option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select value={value} onChange={(e) => setValue(e.target.value)} disabled={!feature}>
                <option value="">Select value</option>
                {feature && features[feature].map((v, i) => (
                  <option key={i} value={v}>{v}</option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Button type="submit">Guess</Button>
            </Col>
          </Row>
        </Form>
      );
}

export default MakeGuess;