var container = document.getElementById('container')


var user = [
    {
        potho: 'image/SCuteRabbit.jpg',
        name: "Samy",
        profesion:  'Programadora, danza area',
        website:  'https://www.pinterest.es/chimbozumba/',
        email:    'conciencia.sami@gmail.com',
        about:  'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.',
        interest: 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
    },
    {
        potho: 'image/JfCat.jpg',
        name: "Juan fer",
        profesion:  'Cantante y Futbolista',
        website: 'jfchimbo.com',
        email:    'chimboj12@gmail.com',
        about:  'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.',
        interest: 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
    },
    {
        potho: 'image/WWill.jpg',
        name: "Wilka",
        profesion:  'Futbolista y Boxeador',
        website: 'wilkachimbo.com',
        email:    'wilkachimbo14@gmail.com',
        about:  'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.',
        interest: 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
    }
]


for (var i = 0; i < user.length; i++) {
    const element = user[i];

    console.log(element);
    var elementContainer = document.createElement('div')
    elementContainer.setAttribute('id', user[i].name)
    elementContainer.setAttribute('class',`'contenedor_${user[i].name}'`)



    elementContainer.innerHTML += `<img  src="${user[i].potho}"></img>`
    var all_info = document.createElement('div')
    all_info.setAttribute('id', 'Info')

    var Infoprincipal = document.createElement('div')
    Infoprincipal.setAttribute('id', `'Info_${user[i].name}'`)
    Infoprincipal.setAttribute('class', 'Infoprincipal')
    Infoprincipal.innerHTML += `<p>${user[i].name}</p>`
    Infoprincipal.innerHTML += `<p>${user[i].profesion}</p>`
    Infoprincipal.innerHTML += `<p>${user[i].website}</p>`

    var boton = document.createElement('div');
    boton.setAttribute("class","boton")
    boton.innerHTML += `<button id="Email">
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none" style="flex-shrink: 0;">
        <path d="M2.10241 4.7072L8.50001 7.9056L14.8976 4.7072C14.8739 4.29955 14.6953 3.91639 14.3983 3.63618C14.1012 3.35597 13.7083 3.19992 13.3 3.2H3.70001C3.29167 3.19992 2.89876 3.35597 2.60175 3.63618C2.30473 3.91639 2.12609 4.29955 2.10241 4.7072Z" fill="#1E1F26"/>
        <path d="M14.9 6.4944L8.50001 9.6944L2.10001 6.4944V11.2C2.10001 11.6243 2.26858 12.0313 2.56864 12.3314C2.86869 12.6314 3.27566 12.8 3.70001 12.8H13.3C13.7244 12.8 14.1313 12.6314 14.4314 12.3314C14.7314 12.0313 14.9 11.6243 14.9 11.2V6.4944Z" fill="#1E1F26"/>
        </svg>
        <p id="gmail">Email</p>
    </button>`

    var infoPersonal = document.createElement('div')
    infoPersonal.setAttribute('class','InfoPersonal')
    infoPersonal.innerHTML += `
    <p class="informacion">
    About
    <p class="DescripcionP">${user[i].about}</p>
    </p>

    <p class="informacion">
    Interest
    <p class="DescripcionP">${user[i].interest}</p>
    </p>`

    var socialIcons = document.createElement('div')
    socialIcons.setAttribute('id','social-icons')
    socialIcons.innerHTML += `
    <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
    <a href="https://instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://github.com/" target="_blank"><i class="fa-brands fa-github"></i></a>
    `


    container.appendChild(elementContainer)   

    container.appendChild(all_info)
    container.appendChild(Infoprincipal)
    container.appendChild(boton)
    container.appendChild(infoPersonal)
    container.appendChild(socialIcons)
}