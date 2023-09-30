import React from 'react'
import { PropsElementList } from '../../additionally/interfaces';
import {
    MarkedSymbolStyle, LinkNavStyle, ElementListStyle
} from "../../styles/header/ElementList"

const ElementList: React.FC<PropsElementList> = ({ textElement }) => {
    return (
        <ElementListStyle>
            <LinkNavStyle>
                <MarkedSymbolStyle>#</MarkedSymbolStyle>
                {textElement}
            </LinkNavStyle>
        </ElementListStyle>
    )
}

export default ElementList
