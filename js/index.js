const loader = document.querySelector(".loader_cont")

setTimeout(() => {
    loader.style.opacity = '0'
    setTimeout(() => {
        loader.style.display = 'none'
    },500)
}, 3000)