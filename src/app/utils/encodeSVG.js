const encodeSVG = (svgString) => {
    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgString)));
};

export default encodeSVG;