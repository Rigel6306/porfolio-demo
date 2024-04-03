
import { useEffect, useRef } from 'react'
const useOutsideClickController = (setToggler) => {

    let domNode = useRef()// reference for the navigation 
    const eventHandler = (e) => {

        // console.log('clicked')
        if (!domNode.current.contains(e.target)) setToggler('hidden')
    }

    useEffect(() => {
        document.addEventListener('mousedown', eventHandler);
        console.log('use Effect fired')
        return () => (document.removeEventListener('mousedown', eventHandler))// removing event listner wehn the  component unmounted
    }, [])

    return domNode
}

export default useOutsideClickController