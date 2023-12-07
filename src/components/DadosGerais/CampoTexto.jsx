import { Form } from "react-bootstrap";
export const convert_id = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(' ','_').replace('.','')
}
function CampoTexto(props) {
  const id = convert_id(props.title);
  return (
    <Form.Group key={`${id}`} className="mt-2">
    <Form.Label sm={3} className="fw-bold">
        {props.title}
    </Form.Label>
    <Form.Control
        type={"text"}
        defaultValue={props.defaultValue}
    />
</Form.Group>
  )
}

export default CampoTexto;