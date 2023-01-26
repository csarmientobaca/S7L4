
const asyncAwait = async function () {
    try {
        let res = await fetch('https://striveschool-api.herokuapp.com/books')
        console.log(res)
        if (res.ok) {
            let data = await res.json()
            console.log('data', data)

            let row = document.querySelector('.row')
            data.forEach((books) => {
                row.innerHTML +=
                    `              
                        <div class="col-lg-4 col-md-6 mb-3 col-sm-6 ">
                            <div class="card" >
                                <img class="card-img-top" src="${books.img}" >
                                <div class="card-body d-flex flex-column">
                                    <h4 class="card-title">${books.title}</h4>
                                    <p class="card-text">$ ${books.price}</p>
                                    <button type="button" class="btn btn-danger">Delete</button>

                                    
                                </div>
                            </div>
                        </div>
                    `
            })
        } else {

            console.log('error')
        }
    } catch (error) {
        // finiremo qui se c'è stato un problema a monte, nel contattare il server!
        // ad es. un errore di rete, modalità aereo, etc.
        console.log(error)
    }
}
asyncAwait()
