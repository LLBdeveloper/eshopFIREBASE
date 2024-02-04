// LOS DATOS BAJAN Y LOS EVENTOS SUBEN EN EL ARBOL DE REACT

//  e.stopPropagation() previene la propagacion de un evento por ejemplo un click donde si haces click en el componente hijo tambien lo recibe el padre y para arriba los que sigan.

// e.preventDefault()  previene comportamientos por defecto como en un form recargar toda la pagina con el submit. Podes prevenir un espacio en un input

// e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation()e.stopPropagation

import  { useRef, useEffect, useState } from 'react'

const EventAnimation = () => {
    const [backgroundColor, setBackgroundColor] = useState('pink')

    const titleRef = useRef()
    const divRef = useRef()


    useEffect(()=>{
        const title = titleRef.current

        const handleClick = () => console.log('hice click en el titulo')

        title.addEventListener('click', handleClick)
        return () => {
            title.removeEventListener('click',handleClick)
        }
    },[])

    useEffect(()=>{
        const div = divRef.current

        const handleScroll = () => {
            const { y } = div.getBoundingClientRect()
            
            const newColor = y <= 0 ? 'orange' : 'pink'
            setBackgroundColor(newColor)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return (
        <div>
            <h1 ref={titleRef}>Eventos</h1>
            <div ref={divRef}
                style={{
                    height: '180vh',
                    marginTop:20,
                    background: backgroundColor
                }}
            >
                <h2>scroll to change background</h2>
            </div>
        </div>
    )
}

export default EventAnimation