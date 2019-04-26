class Github{
    constructor(){
        this.client_id = '0cf200a5a90db5a9cb49';
        this.client_secret = '7dc0a1e8b1c1dcd8d46de8428b4354fcc6a111cf';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile: profile,
            repos : repos
        }
    }
}