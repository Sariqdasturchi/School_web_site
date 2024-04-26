const loader = document.querySelector(".loader_cont")

setTimeout(() => {
    loader.style.opacity = '0'
    setTimeout(() => {
        loader.style.display = 'none'
    },500)
}, 3000)


fetch('https://storeus.pythonanywhere.com/api/v1/products/?format=api')
      .then(response => response.json())
      .then(json => console.log(json))