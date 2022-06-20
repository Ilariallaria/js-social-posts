// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.



const posts = [
    {
        postId : '1',
        profile : "https://unsplash.it/300/300?image=15",
        name : "Phil Mangione",
        date : "06 / 25 / 2021",
        text : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        post__image : "https://unsplash.it/600/300?image=170",
        like : 15,

    },
    {
        postId : '2',
        profile : "https://unsplash.it/300/300?image=16",
        name : "Mario Rossi",
        date : "04 / 20 / 2021",
        text : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        post__image : "https://unsplash.it/600/300?image=171",
        like : 81,
    },
    {
        postId : '3',
        profile : "https://unsplash.it/300/300?image=17",
        name : "Elisa Bianchi",
        date : "02 / 14 / 2021",
        text : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        post__image : "null",
        like : 123,
    },

]

const postContainer = document.getElementById('container');
allPosts (posts, postContainer);

function allPosts(posts, postContainer){
    // scorro array
    for(let i = 0; i < posts.length; i++)
    {   
        // salvo ogni dato in una variabile
        const postsMeta = posts[i];

        drawPost (postsMeta, postContainer);
    }
}


function drawPost(postsMeta){

    const {id, profile, name, date, text, post__image, like} = postsMeta;

    // questo riempirà l'html
    const postToDrow = 
    `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${profile}" alt="${name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text}</div>
            <div class="post__image">
                <img src="${post__image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="${id}" class="js-likes-counter">${like}</b> persone
                    </div>
                </div> 
            </div>
        </div>
    `;

    // riempio l'html
    postContainer.innerHTML+= postToDrow;
}

// EVENTO AL CLICK

const clickableLike = document.querySelectorAll('.js-like-button');
const textLike = document.querySelectorAll('.js-likes-counter');

for(let i = 0; i< clickableLike.length; i++) {
    const thisClickableLike = clickableLike[i];
    thisClickableLike.addEventListener('click', function(event){

        // questo evita che il browser torni sempre in cima
        event.preventDefault();

        // salviamo in una variabile il numero attuale del contatore
        const relatedNumberText = textLike[i];

        // lo leggiamo come numero utilizzabile
        let relatedNumber = parseInt(relatedNumberText.innerHTML);

        // poi, solo se l'elemento su cui ho cliccato non ha già la classe clicked
        if(!this.classList.contains('like-button--liked')) {
            
        // gliela aggiungo
        this.classList.add('like-button--liked');
                    
        // incremento di 1
        relatedNumber++;

        // e scrivo il numero con incremento
        relatedNumberText.innerHTML = relatedNumber;
        }

    });





    
}