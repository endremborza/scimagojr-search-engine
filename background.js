browser.contextMenus.create({
    id: "search-with-scimagojr",
    title: "Search in Scimago",
    icons: {
        "16": "icons/16.png",
        "32": "icons/32.png",
    },
    contexts: ["selection"],
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "search-with-scimagojr":
            browser.tabs.create({ url: "https://www.scimagojr.com/journalsearch.php?q=" + info.selectionText });
            break;
    }
})
