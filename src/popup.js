import {EVENTS} from "./constants";

let btnClickAction = document.getElementById('btnClickAction');
btnClickAction.addEventListener('click', () => {
    chrome.runtime.sendMessage({
        type: EVENTS.OPEN_LINK,
    });
});