export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
        this.tbody = this.root.querySelector("table tbody")
    }

    load() {
        this.entries = [
            {
                login: 'nandaospain',
                name: 'nandaospain',
                public_repos: '35',
                followers: '18'
            }
        ]
        
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
    }   
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`

            row.querySelector('.user img').alt = `Imagem de ${user.name}`

            row.querySelector('.user p').textContent = user.name

            row.querySelector('.user span').textContent = user.login

            row.querySelector('.repositories').textContent = user.public_repos

            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar esse usuário?')
                if(isOk) {
                    this.delete(user)
                }
            }



            this.tbody.append(row)
        })
        
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
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })        
    }
}