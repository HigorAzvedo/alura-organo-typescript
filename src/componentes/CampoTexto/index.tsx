import './CampoTexto.css'

interface CampoTextoProps {
    label: string
    placeholder: string
    valor: string
    obrigatorio?: boolean
    aoAlterado: (valor: string) => void
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

interface Texto {
    label: string
} 
interface Texto {
    placeholder: string
}

const CampoTexto = ( {label, placeholder, valor, aoAlterado, obrigatorio = false, tipo = 'text'} :CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto