const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "assets/images/avatar-vangogh.jpg",
        post: "assets/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "assets/images/avatar-courbet.jpg",
        post: "assets/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "assets/images/avatar-ducreux.jpg",
        post: "assets/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function parsePosts() {
    const postParent = document.querySelector(".post-wrapper")
    let postContent = ""

    for ( let i = 0; i < posts.length; i++ ) {
        
        if (postParent) {

        postContent += `
        <div id="user-post" class="post">
            <section id="post-header" class="post__header">
                <img id="poster-avatar" class="post__avatar" src="${posts[i].avatar}" alt="An avatar picture of ${posts[i].name}">
                <section id="user-information" class="post__user__details">
                    <p id="post-user-fullname-long" class="post__username">
                        ${posts[i].name}
                    </p>
                    <p id="post-user-location" class="post__user__location">
                        ${posts[i].location}
                    </p>
                </section>
            </section>
            <section id="user-portrait" class="post__user__portrait__container">
                <img id="post-user-portrait" class="post__user__portrait" src="${posts[i].post}" alt="A large picture of ${posts[i].name}">
            </section>
            <section id="post-footer" class="post__footer">
                <div id="post-icon-container" class="post__interactive__icons">
                    <img id="icon-heart" class="post__icon" onclick="increaseLikes(${i})" src="./assets/images/icon-heart.png">
                    <img id="icon-comment" class="post__icon" src="assets/images/icon-comment.png">
                    <img id="icon-dm" class="post__icon" src="./assets/images/icon-dm.png">
                </div>
                <p class="post__likes">
                    ${posts[i].likes} likes
                </p>
                <section id="post-comments" class="post__comments">
                    <span id="poster-username-short" class="post__username__short">
                    ${posts[i].username}
                    </span>
                    <span id="post-comment">
                        ${posts[i].comment}
                    </span>
                </section>
            </section>
        </div>`
        
        }
    }

    postParent.innerHTML += postContent
}

function increaseLikes(val) {
    
    const likesEl = document.querySelectorAll(".post__likes")

    if ( val >= 0 && val < posts.length ) {
        posts[val].likes++

        likesEl[val].innerHTML = posts[val].likes + " likes"
    }

}

parsePosts()