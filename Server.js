function Load(){

    if (localStorage.Tema){
        document.querySelector("main").style.backgroundImage = `url(./Background/${localStorage.Tema}.jpg)`
    }



    const Temas = ["Default","Oceano","Paz","Blocks","Terra","Crepper","Motanha","Moon","Roxo","lua","Samurai","Windows"]



    Temas.forEach(e=>{
        var div = document.createElement("div")
        div.className = "Temas"
        div.style.backgroundImage = `url(./Background/${e}.jpg)`
        div.id = e
        div.addEventListener('click',()=>{
            document.querySelector("main").style.backgroundImage = `url(./Background/${e}.jpg)`
            localStorage.Tema = div.id
        })
        document.getElementById("temas").appendChild(div)
        



    })
    
    


}
