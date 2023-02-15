/* Select all nav-items */
const navLinks = document.querySelectorAll(".nav-link"); // array of all nav-links

/* Create the routes object */
const routes = {
    "/": "/pages/home.html", // home route
    "/universe": "/pages/universe.html", // universe route
    "/exploration": "/pages/exploration.html", // exploration route
    404: "/pages/404.html", // 404 route
};

/* Add the click event to all nav-bar's links */
navLinks.forEach(item => {
    item.addEventListener("click", () => {
        route();
        changeBackground();
    });
});


/* Creates the routing function */
function route(event) {
    event = event || window.event; //Fallback value for browsers that don't support the event object
    event.preventDefault(); //Prevents the page from reloading, redirecting, etc.
    window.history.pushState({}, "", event.target.href); //Sets the new route

    handle(); //Handles the routing
};

/* Creates a function to handle loading the contents in index.html*/
function handle() {
    const { pathname } = window.location; //Gets the current pathname

    //Gets the current route and if none is available, returns the 404 route
    const currentRoute = routes[pathname] || routes[404];

    //Fetches the html from the current route and sets it as the innerHTML of the #app div
    fetch(currentRoute) //Fetches the html from the current route
        .then(response => response.text()) //Converts the response to text
        .then(html => { //Sets the innerHTML of the #app div to the html from the response
            document.querySelector("#app").innerHTML = html;
        });
}

function changeBackground() {
    body = document.querySelector("body");
    currentPage = window.location;
    body.style.background = `url('./images${currentPage.pathname}bg.png') no-repeat center center/cover`;
};

handle(); //Handles the routing when the page loads

window.onpopstate = () => handle(); //Handles the routing on popstate

