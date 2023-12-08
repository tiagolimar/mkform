/* eslint-disable react/prop-types */
import { useState } from "react";
import Caixa from "../Caixa.jsx";
import { Check } from "./../Check";

function Disciplina(props) {
    const { title, id, children } = props;
    const [estaMarcado, setEstaMarcado] = useState(true);

    return (
        <Caixa>
            <div className="border rounded d-flex">
                <p className="fw-bold col-9">{title}</p>
                <Check id = {id} onChange={e=>{setEstaMarcado(e.target.checked)}} />
            </div>
            {estaMarcado && children}
        </Caixa>
    );
}

export default Disciplina;
