/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";

export function Check(props) {
    return (
        <Form.Check
            key={`${props.id}`}
            type={props.type || "checkbox"}
            id={`${props.id}`}
            label={props.label || "Incluir"}
            defaultChecked={props.value || true}
            className="ms-2"
            onChange={props.onChange}
        />
    );
}

