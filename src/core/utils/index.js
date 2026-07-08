class Utils {

    /**
	 * Get Breakpoint
	 * @param {Object} screens - Grid.useBreakpoint() from antd
	 * @return {Array} array of breakpoint size
	 */
    static getBreakPoint(screens) {
        let breakpoints = [];
        for (const key in screens) {
			if (screens.hasOwnProperty(key)) {
				const element = screens[key];
				if (element) {
					breakpoints.push(key)
				}
			}
		}
		return breakpoints
    }

	static toDataUrl(url, key, callback) {
		if (url.includes('base64')) {
			callback({[key]: url});
			return;
		}
		const xhr = new XMLHttpRequest();
		xhr.onload = () => {
			const reader = new FileReader();
			reader.onloadend = () => {
				callback({[key]: reader.result});
			}
			reader.readAsDataURL(xhr.response);
		};
		xhr.open('GET', url);
		xhr.responseType = 'blob';
		xhr.send();
	}
}

export default Utils;