// content.js
console.log("Content script loaded.");

// Example: Click the button in the iframe
function clickIframeLeftButton() {
  console.log("left")
  var left = document.querySelector('body > div > div > div > div > div.Content.EmbedFrame.EmbedFrameWithSidecar > div > div > div > div._ae38._adl6 > button._afxv._al46._al47')
  if (left) {
    left.click()
  } else {
    console.log("not exist left icon")
  }
}
function clickIframeRightButton() {
  console.log("right")
  var right = document.querySelector('body > div > div > div > div > div.Content.EmbedFrame.EmbedFrameWithSidecar > div > div > div > div._ae38._adl6 > button._afxw._al46._al47')
  if (right) {
    right.click()
  } else {
    console.log("not exist right icon")
  }
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "clickLeftButton") {
    clickIframeLeftButton();
  }
  if (request.action === "clickRightButton") {
    clickIframeRightButton();
  }
});
