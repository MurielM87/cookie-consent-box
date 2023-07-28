const cookieBox = document.querySelector('.wrapper');
const acceptBtn = document.querySelector('.buttons button');

acceptBtn.onclick = () => {
    //setting cookie for one month, after one month cookie will be expired automatically
    document.cookie = "CookieBy=MySelf; max-age="+60*60*24*30;
    if(document.cookie) { //if the above cookie set
        cookieBox.classList.add('hide');
    } else {
        alert("cookie can't be set!");
    }
}
//hide cookie box if cookie is set and not expired
let checkCookie = document.cookie.indexOf('CookieBy=MySelf'); //checking our set cookie
//if cookie is set the hide the cookie box else show it
checkCookie != 1 ? cookieBox.classList.add('hide'): cookieBox.classList.remove('hide');
