
var news = document.getElementById('news');
var input = document.getElementById('input');

let getData = (search) => {
    return new Promise((resolve, reject) => {

        fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-07-26&sortBy=popularity&apiKey=c1d0af20df1a494ba4570b0ac1347347`)
            .then(data => data.json())
            .then(data => {
                resolve(data)
            })

    })
}

let setData = async () => {
    let a = await getData(input.value);
    console.log(a)

    news.innerHTML = `<tr>
    <td></td>
    <td></td>
    <td></td>
    
    </tr>`
}
// setData()
