const windowMap = new Map();

function handleMouseOver(event) {
    const target = event.target;

    if (target.tagName === 'A' && target.href.startsWith('https://d.pr/i/')) {
        // Close all previously opened windows
        windowMap.forEach((openedWindow, url) => {
            if (!openedWindow.closed) {
                openedWindow.close();
            }
        });

        // Clear the map after closing the windows
        windowMap.clear();

        const url = target.href;
        const windowName = 'window_' + url.replace(/[^\w]/g, '_');

        // Calculate the position for the window to appear at the bottom right
        const width = 700;
        const height = 500;
        const left = window.screen.width - width;
        const top = window.screen.height - height;

        // Open a new window at the calculated position
        const newWindow = window.open(url, windowName, `width=${width},height=${height},left=${left},top=${top}`);
        windowMap.set(url, newWindow);
    }
}

document.body.addEventListener('mouseover', handleMouseOver);
