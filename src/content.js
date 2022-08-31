import get from 'lodash/get';
import { EVENTS } from './constants';
import Welcome from "./modules/Welcome";
import ReactDOM from 'react-dom';
import React from 'react';

chrome.runtime.onMessage.addListener((message) => {
    const type = get(message, 'type');
    switch (type) {
        case EVENTS.GET_USER_INFO: {
            const info = document.querySelector('header.page-header a.user-info');
            if (info) {
                const username = info.innerText;
                const contentContainer = document.getElementById('root');
                let headerContainer = document.createElement('div');
                headerContainer.id = 'autoOpenModal';
                contentContainer.appendChild(headerContainer);
                ReactDOM.render(<Welcome username={username} />, headerContainer);
                return;
            } else {
                console.log('Không tìm thấy thông tin user');
            }
            break;
        }
    }
});
