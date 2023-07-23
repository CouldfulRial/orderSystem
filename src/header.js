import React, { useState } from 'react';
import Modal from 'react-modal';
import './header.css';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="Header">
            <img
                className="ShopImg"
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fedc5f32a-0a0b-4795-86ce-0aff4fe44297%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1691913042&t=99508cbc27eb6cd26263e14bee7448da"
                alt="..."
                onClick={openModal}
            />

            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <div className="ModalContent">
                    <button className="CloseButton" onClick={closeModal}>
                        Close
                    </button>
                    <img
                        className="ModalImage"
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fedc5f32a-0a0b-4795-86ce-0aff4fe44297%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1691913042&t=99508cbc27eb6cd26263e14bee7448da"
                        alt="..."
                    />
                </div>
            </Modal>
        </div>
    );
}

export default Header;
