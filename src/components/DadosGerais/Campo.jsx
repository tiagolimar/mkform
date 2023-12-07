/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import { convert_id } from "../convert_id.js";

function Campo(props) {
    const id = convert_id(props.title);
    return (
        <Form.Group key={`${id}`} className="mt-2">
            <Form.Label sm={3} className="fw-bold">
                {props.title}
            </Form.Label>
            <Form.Control type={props.type} defaultValue={props.defaultValue} />
        </Form.Group>
    );
}

export default Campo;
