import {React, Fragment} from 'react'
import {PortHeaderItem} from './portHeaderItem'
import './portHeader.css'



export const PortHeader = () => {



    return (
        <Fragment>
            <h1 className="display-1 text-center mt-5">Portifólio</h1>
            <div className="container-fluid">
                <ul className="portHeader-list mt-5">
                    <PortHeaderItem titleItem="Responsividade" description="Responsivo para os diversos tamanhos de dispositivos" srcLink='https://img.icons8.com/ios/50/null/media-queries.png' textAlt="Imagem ilustrativa de responsividade"/>
                    <PortHeaderItem titleItem="Intuitivo" description="Foco na experiencia de forma intuitiva" srcLink="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/null/external-head-design-thinking-xnimrodx-lineal-xnimrodx-3.png" atlText="Imagem ilustrativa de intuitivo"/>
                </ul>
            </div>
        </Fragment>
    )
}