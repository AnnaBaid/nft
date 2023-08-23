import { useState } from 'react'
import ClearIcon from '../../icon/ClearIcon'
import Eyekon from '../../icon/Eyekon'
import './Input.scss'
import EyeDefault from '../../icon/EyeDefault'


export const Input = ({ title, type, name, placeholder }) => {
  const [value, setValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleClearClick = () => {
    setValue('');
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <label className="forms">
      <span className="forms__title">{title}</span>
      <div className="forms__input-wraper">
        <input autoComplete='Off' type={showPassword ? 'text' : type} className="forms__input" name={name} value={value} onChange={handleInputChange} placeholder={placeholder}/>
        <div className="forms__input-svg">
          {type !== 'password' && (
            <span onClick={handleClearClick}>
              <ClearIcon />
            </span>
          )}
          {type === 'password' &&
             (<span onClick={handleTogglePassword}>
            {!showPassword && <Eyekon />}
            {showPassword && <EyeDefault />}
            </span>)}          
        </div>
      </div>
    </label>
  )
}
