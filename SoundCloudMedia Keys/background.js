chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ url: "*://soundcloud.com/*" }, (tabs) => {
        if (tabs.length === 0) return;

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: controlMedia,
            args: [command]
        });
    });
});

function controlMedia(command) {
    let playButton = document.querySelector(".playControl");
    let nextButton = document.querySelector(".skipControl__next");
    let prevButton = document.querySelector(".skipControl__previous");

    if (command === "play-pause" && playButton) playButton.click();
    if (command === "next-track" && nextButton) nextButton.click();
    if (command === "prev-track" && prevButton) prevButton.click();
}
