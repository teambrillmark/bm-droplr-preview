const iframeMap = new Map();

function handleMouseOver(event) {
    const target = event.target;

    if (target.tagName === 'A' && target.href.startsWith('https://d.pr/i/')) {
        const url = target.href;
        const iframeId = 'iframe_' + url.replace(/[^\w]/g, '_');

        if (!iframeMap.has(url)) {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.id = iframeId;
            iframe.style.width = '700px'; // Set your desired width
            iframe.style.height = '500px'; // Set your desired height
            iframe.style.position = 'fixed';
            iframe.style.bottom = '20px'; // Distance from bottom
            iframe.style.right = '20px'; // Distance from right

            document.body.appendChild(iframe);
            iframeMap.set(url, iframe);
        } else {
            const existingIframe = iframeMap.get(url);
            existingIframe.style.display = 'block';
        }
    }
}

function handleMouseOut(event) {
    const target = event.target;

    if (target.tagName === 'A' && target.href.startsWith('https://d.pr/i/')) {
        const url = target.href;
        if (iframeMap.has(url)) {
            const iframe = iframeMap.get(url);
            iframe.style.display = 'none';
        }
    }
}

document.body.addEventListener('mouseover', handleMouseOver);
document.body.addEventListener('mouseout', handleMouseOut);

