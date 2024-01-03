'use client'
import Link from "next/link"
import { useState } from "react"

// Hojas:
// - Espinaca  ya
// - Lechuga   ya
// - Acelga    ya
// - Col      ya

// Bulbos:
// - Ajo      ya
// - Cebolla   ya
// - Puerro   ya

// Frutos:
// - Tomate   ya
// - Pimiento   ya
// - Calabacín    ya
// - Pepino    ya

// Raíces:
// - Patata   ya
// - Zanahoria   ------
// - Remolacha   ------
// - Rábano   ------

// Flores:
// - Coliflor   ya
// - Brócoli 
// - Alcachofa   

// Legumbres:
// - Lentejas     ya
// - Guisantes
// - Judías verdes
// - Habas


const menuCategory = [
    {
        name: 'Bulbs',
    },
    {
        name: 'Leaves',
    },
    {
        name: 'Fruits',
    },
    {
        name: 'Roots',
    },
    {
        name: 'Flowers',
    },
    {
        name: 'Legumes',
    },
]

function Dropdown() {

    const [open, setOpen] = useState(false)
    
    const changeOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="relative">
            <div>
                <button className="bg-gray-300 text-gray-700 font-semibold py-1 px-4 rounded inline-flex items-center hover:border-2 hover:border-gray-900 transition-all ease-in-out duration-150"
                    onClick={() => changeOpen()}>
                    <div>
                        <span>Select category</span>
                    </div>
                    <div className="pl-3">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z" /></svg>
                    </div>
                </button>
            </div>
            <div className={`${open ? 'absolute transition-all ease-in-out duration-150' : 'hidden transition-all ease-in-out duration-150'} z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                <div className="py-1">
                    <ul>
                        {
                            menuCategory.map((e, i) => (
                                <li key={i} onClick={() => changeOpen()} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    <Link href={`/categories/${e.name}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{e.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
