import { cepages } from "../Cépages.js"
import Multiselect from "multiselect-react-dropdown"

function CepagesInput() {
    return (
        <Multiselect
            options={cepages}
            displayValue="nom"
            id="cepages"
            name="cepages"
            className="multiselect"
            style={{
                chips: {
                    background: "teal",
                },
            }}
        />
    )
}

export default CepagesInput
