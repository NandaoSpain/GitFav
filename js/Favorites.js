export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        this.update()
    }

    update() {
        this.removeAllTr()

        [
            {
                login: '',
                name: '',
                public_repos: '',
                followers: ''
            }
        ]
    }
    
    createRow() {
        const tr = document.createElement('tr')
        
        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/nandaospain.png" alt="">
                <a href="https://github.com/nandaospain" target="_blank">
                    <p>Fernando Rodrigues</p>
                    <span>nandaospain</span>
                </a>
            </td>
            <td class="repositories">35</td>
            <td class="followers">18</td>
            <td>
                <button class="remove">&times;</button>
            </td>    
            `   
        return tr
    }   

    removeAllTr() {
        const tbody = this.root.querySelector("table tbody")
    
        tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })        
    }
}