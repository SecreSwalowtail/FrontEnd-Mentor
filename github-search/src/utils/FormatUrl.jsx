function formatUrl(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/\n]+)(?:\/.*)?(?:com)?$/i;
    const matches = url.match(regex);
    if (matches && matches.length >= 2) {
        return matches[1];
    }
    return url;
}

export default formatUrl