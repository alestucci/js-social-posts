const posts = [
	{
		id: 1,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/300?image=171",
		author: {
			name: "Phil Mangione",
			image: "https://unsplash.it/300/300?image=15",
		},
		likes: 80,
		created: "2021-06-25",
	},
	{
		id: 2,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/400?image=112",
		author: {
			name: "Sofia Perlari",
			image: "https://unsplash.it/300/300?image=10",
		},
		likes: 120,
		created: "2021-09-03",
	},
	{
		id: 3,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/400?image=234",
		author: {
			name: "Chiara Passaro",
			image: "https://unsplash.it/300/300?image=20",
		},
		likes: 78,
		created: "2021-05-15",
	},
	{
		id: 4,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/400?image=24",
		author: {
			name: "Luca Formicola",
			image: null,
		},
		likes: 56,
		created: "2021-04-03",
	},
	{
		id: 5,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/400?image=534",
		author: {
			name: "Alessandro Sainato",
			image: "https://unsplash.it/300/300?image=29",
		},
		likes: 95,
		created: "2021-03-05",
	},
];

// console.log(posts[0].author.image);
// console.log(posts[0].author.name);
// console.log(posts[0].author);

for (let index = 0; index < posts.length; index++) {
	createPost(posts[index]);
}

const likeBtn = [...document.querySelectorAll(".like-button")];
//console.log(likeBtn);
const userLikedPost = [];
const likesCounterArray = [...document.querySelectorAll('#like-counter-1')];
console.log(likesCounterArray);

for (let index = 0; index < likeBtn.length; index++) {
	likeBtn[index].addEventListener("click", function () {
		likeBtn[index].classList.toggle("like-button--liked");
        //console.log(likeBtn[index].parentElement.parentElement.parentElement.parentElement.id);
        const likedId = likeBtn[index].parentElement.parentElement.parentElement.parentElement.id;
        if (userLikedPost.indexOf(likedId) == -1) {
            userLikedPost.push(likedId);
            likesCounterArray[index].innerText++
        } else {
            userLikedPost.splice(userLikedPost.indexOf(likedId), 1);
            likesCounterArray[index].innerText--
        }
        console.log(userLikedPost);
	});
}

function dateToUs (dateAMG) {
    const year = dateAMG.slice(0, 4);
    //console.log(year);
    const month = dateAMG.slice(5, 7);
    //console.log(month);
    const day = dateAMG.slice(8, 10);
    //console.log(day);
    dateUS = month + '-' + day + '-' + year;
    return dateUS
}

function dateToIt (dateAMG) {
    const year = dateAMG.slice(0, 4);
    //console.log(year);
    const month = dateAMG.slice(5, 7);
    //console.log(month);
    const day = dateAMG.slice(8, 10);
    //console.log(day);
    dateIT = day + '-' + month + '-' + year;
    return dateIT
}

function initialsOfStringWords(string) {
	let initials = "";
	initials += string[0];
    //console.log(initials);
	while (string.indexOf(" ") !== -1) {
		string = string.slice(string.indexOf(" ") + 1);
        //console.log(string);
		initials += string[0];
	}
	return initials;
}

function createPost(postObject) {
	const container = document.querySelector(".posts-list");
	//console.log(container);
	const socialPost = document.createElement("div");
	socialPost.classList.add("post");
    socialPost.id = postObject.id;
	socialPost.innerHTML = `
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${postObject.author.image}" alt="${postObject.author.name}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${postObject.author.name}</div>
            <div class="post-meta__time">${dateToIt(postObject.created)}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${postObject.content}</div>
<div class="post__image">
    <img src="${postObject.media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#!" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${postObject.likes}</b> persone
        </div>
    </div> 
</div>
`;
	container.append(socialPost);
}
