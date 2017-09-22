var toggle = false;
document.body.insertAdjacentHTML('afterbegin', '<div class="notch"></div>');
var notch = document.querySelector('.notch');
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'clicked_browser_action') {
        toggle = !toggle;
        if (toggle) {
            notch.style.display = 'none';
        } else {
            notch.style.display = 'block';
        }
    }
});
