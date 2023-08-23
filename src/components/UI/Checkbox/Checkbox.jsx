import Checkmark from '../../icon/Checkmark'
import './Checkbox'

export default function Checkbox({ label }) {
  return (
    <label className="chk">
      <input type="checkbox" />
      <span className="chk__block"> <Checkmark /> </span>
        {label && <span>{label}</span>}
    </label>
  )
}
