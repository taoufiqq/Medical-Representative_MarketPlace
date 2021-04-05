import React from 'react'
import Navbar from '../parts/NavBar'
export default function products() {
    return (
        <div>
            <Navbar/>
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 ml-5">
        <div className="px-4 py-2">
          <h1 className="text-gray-900 font-bold text-3xl uppercase">Tensiomètre de bras BU 510</h1>
          <p className="text-gray-600 text-sm mt-1">Le tensiomètre de bras Medisana fournit une mesure très précise de la tension artérielle au bras.
                                                    Il dispose de 90 blocs de mémoire pour chacun des deux utilisateurs. 
                                                    Les valeurs de mesure sont clasées à l'aide d'une échelle à code couleur (rouge, jaune, vert) 
                                                    en conformité avec le système d'évaluation de l'OMS, ce qui permet de savoir instantanément si les mesures sont dans la norme.</p>
        </div>
        <img className="h-56 w-full object-cover mt-2" src="https://cdn3.medical-beaute.com/16452-home_default/tensiometre-electronique-de-poignet-r2.jpg" />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-gray-200 font-bold text-xl">$129</h1>
          <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to card</button>
        </div>
      </div>
      </div>
    )
}
