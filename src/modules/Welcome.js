import React, { useState } from 'react';
import { EVENTS } from '../constants';
import { Modal } from 'antd';

function Welcome({ username }) {
    const [visible, setVisible] = useState(true);

    function handleCancel() {
        chrome.runtime.sendMessage({
            type: EVENTS.CLOSED_TAB,
        });
    }

    function closeModal() {
        setVisible(false);
        const element = document.getElementById('autoOpenModal');
        element.remove();
    }

    function handleOk() {
        closeModal();
    }

    return (
        <>
            {visible && (
                <Modal
                    title={'Lời chào mừng'}
                    visible={visible}
                    okText="Đồng ý"
                    cancelText="Huỷ"
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    Chào mừng bạn {username} tới với M28. Mong bạn sẽ có những trải nghiệm tuyệt vời tại đây. Chào thân
                    ái!
                </Modal>
            )}
        </>
    );
}

export default Welcome;
