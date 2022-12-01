var selector = document.getElementById('selector')

var foto = document.getElementById('foto')
var nomeUsuario = document.getElementById('nome')
var profissao = document.getElementById('profissao')
var bio = document.getElementById('bio')

selector.addEventListener('change', event => {
    event.preventDefault()
    var id = selector.value

    fetch(`http://10.0.0.151:3333/pessoas/${id}`)
    .then(response => response.json())
    .then(data => {
        foto.setAttribute('src', data.foto)
        nomeUsuario.innerText = data.nome
        profissao.innerText = data.profissao
        bio.innerText = data.bio
        linkSite.innerText = data.site
    })
})