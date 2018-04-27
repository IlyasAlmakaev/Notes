
export const request = (url, data) => {
    return fetch(url, {  
			method: 'post',  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},  
			body: data
		})
}