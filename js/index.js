const device = getQueryParam('device');
const DEVICE_APP = 'app';
const DEVICE_WEB = 'web';
const ALLOWED_DEVICES = [DEVICE_APP, DEVICE_WEB]

if(!device) {
    const errorMsg = 'Parametro [device] obrigatorio';
    alert(errorMsg);
    throw new Error(errorMsg)
}

if(!ALLOWED_DEVICES.includes(device)) {
    const errorMsg = `device ${device} invalido`;
    alert(errorMsg);
    throw new Error(errorMsg)
}

function sendEvent(eventName, eventContent) {
    if (device === DEVICE_APP) {
        window.flutter_inappwebview.callHandler(eventName, eventContent);
        return;
    }

    window.dispatchEvent(eventName, eventContent)
}

function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get(param);
}