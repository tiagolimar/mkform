import Form from 'react-bootstrap/Form';

function Check() {
  return (
    <Form>
        <div key={`default-checkbox`} className="mb-3">
          <Form.Check
            type='checkbox'
            id='default-checkbox'
            label='default checkbox'
          />
        </div>
    </Form>
  );
}

export default Check;