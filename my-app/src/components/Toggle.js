import "../Style/toggle.css"
import { useState } from 'react'


export const Toggle = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label>
            <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className="span1" />
            <strong>{label}</strong>
        </label>
    )
}