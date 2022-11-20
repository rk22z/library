import React from 'react'

import * as Styled from './ModalContentStyled'

const ModalContent = (props) => {
    const { content, type } = props

    const renderModalContent = () => {
        switch (type) {
            case 'book':
                return (
                    <div>
                        {content.title} {content.author} {content.available ? 'dispo' : 'indispo'}
                    </div>
                )
            case 'borrow':
                return (
                    <div>
                        {type}
                    </div>)
            case 'add':
                return (
                    <div>
                        {type}
                    </div>)
            case 'return':
                return (
                    <div>
                        {type}
                    </div>)

        }
    }

    console.log(content)
    console.log(type)

    return (
        <Styled.ModalContainer>
            {renderModalContent()}
        </Styled.ModalContainer>
    )
}

export default ModalContent