export class MemoriesService {
    private apiUrl: string;
    private apiPassword: string;
    
    constructor(apiUrl: string, apiPassword: string) {
        this.apiUrl = apiUrl;
        this.apiPassword = apiPassword;
    }

    listApprovedMemories() {
        return new Promise((resolve, reject) => {
            fetch(
                `${this.apiUrl}/memories/approved`,
                { 
                    headers: new Headers({
                        'authorization': this.apiPassword
                    }), 
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });
    }

    createMemory(name: string, comment: string) {
        return new Promise((resolve, reject) => {
            fetch(
                `${this.apiUrl}/memories`,
                { 
                    method: 'POST',
                    headers: new Headers({
                        'authorization': this.apiPassword,
                        'Content-Type': 'application/json'
                    }), 
                    body: JSON.stringify({
                        name: name, 
                        comment: comment,
                    })
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });
    }
}