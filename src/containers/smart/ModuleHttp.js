
export const request = (url, data, method) => {
    return fetch(url, {  
			method: method,  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},  
			body: data
		})
}