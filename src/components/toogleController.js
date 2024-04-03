import { useState } from 'react'
import useOutsideClickController from './useOutsideClickController'
const ToggleController = ({ render }) => {// render props

    const [toggler, setToggler] = useState('hidden')// navigation toggler state

    const clickHandler = () => {

        toggler === 'hidden' ? setToggler('visible') : setToggler('hidden')
    }

    let domNode = useOutsideClickController(setToggler)// returns ref

    return (
        <div className="togleController">
            {
                render(clickHandler, toggler, domNode) //state,handler and the reference passing to the higher order 
            }
        </div>
    );
}

export default ToggleController;