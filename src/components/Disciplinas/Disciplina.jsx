/* eslint-disable react/prop-types */
import Caixa from "../Caixa.jsx";

function Disciplina(props) {
  return (
    <Caixa>
        <div className="fw-bold">{props.title}</div>
    </Caixa>
  )
}

export default Disciplina