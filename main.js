

function getPosts(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    request.responseType = "json"
    request.send()
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            const rightContainer = document.getElementById("right-container")
            rightContainer.innerHTML = ""
            for (post of posts) {

                let mainContent = `
                <div class="content"> ${post.body}
            </div>`

                rightContainer.innerHTML += mainContent
            }
        }
        else {
            alert("error")
        }
    }
}

function getUsers() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;

            const leftContainer = document.getElementById("left-container")
            leftContainer.innerHTML = ""

            for (user of users) {
                let mainContent = `
                <div id="btn" class="btn" onclick="userClicked(${user.id}, this)">
                <h3 class="name" id="name">${user.name}</h3>
                <h3 class="email" id="email">${user.email}</h3>
                </div>`

                leftContainer.innerHTML += mainContent
            }
        }
        else {
            alert("error")
        }
    }
}


getPosts(1)
getUsers()

function userClicked(id, el) {
    getPosts(id)

    let selectedElements = document.getElementsByClassName("selected")

    for (element of selectedElements) {
        element.classList.remove("selected")
    }
    el.classList.add("selected")


}


