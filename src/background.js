import get from 'lodash/get';
import { EVENTS } from './constants';
chrome.runtime.onMessage.addListener((message, sender) => {
    const type = get(message, 'type');
    switch (type) {
        case EVENTS.OPEN_LINK: {
            chrome.tabs.create({ url: 'https://m28.gobizdev.com', active: false }).then(tab => {
                setTimeout(() => {
                    chrome.tabs.sendMessage(tab.id, {
                        type: EVENTS.GET_USER_INFO,
                    });
                }, 3000);
            });
            return;
        }
        case EVENTS.CLOSED_TAB: {
            chrome.tabs.remove(sender.tab.id);
            return;
        }
    }
});
