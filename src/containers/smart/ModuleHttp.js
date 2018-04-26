
export const request = (url, data) => {
    return fetch(url, {  
			method: 'post',  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},  
			body: JSON.stringify(data)  
		}).then(res => {
			if (res.status === 200 && res.ok === true) {
				return res.json();
			} else {
				throw new Error('Network error');
			}
		})
}