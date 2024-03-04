$(document).ready(function () {
    var leftButton = $('#leftButton');
    var rightButton = $('#rightButton');

    leftButton.click(function () {

        // Send a message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "clickLeftButton" });
        });
    });

    rightButton.click(function () {

        // Send a message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "clickRightButton" });
        });
    });
});


