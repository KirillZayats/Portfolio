import React, { useEffect } from 'react'
import {
    MessageTextStyle,
    ContainerModalStyle,
    ModalStyle
} from "../../styles/modal/ModalStyled"
import { PropsModal } from '../../additionally/interfaces';

const Modal = ({ active, setActive, message }: PropsModal) => {

    useEffect(() => {
        console.log(message);
        
    })

    return (
        <ModalStyle className={active ? "active" : ""} onClick={() => setActive(false)}>
            <ContainerModalStyle onClick={(e) => {
                e.stopPropagation();
            }}>
                <MessageTextStyle>
                    {message}
                </MessageTextStyle>
            </ContainerModalStyle>

        </ModalStyle>
    )
}

export default Modal