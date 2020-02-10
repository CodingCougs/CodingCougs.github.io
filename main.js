var input = document.getElementById("secret-code");

function handle(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        console.log(e.target.value);

        if (e.target.value != "Free HoloLens") {
            location.href = "https://www.google.com/search?q=cute+hamsters&rlz=1C1SQJL_enUS862US862&sxsrf=ACYBGNT0dgUjk1eceMwrnxls_hWjohSHXQ:1581363796649&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjXkfCa38fnAhXPu54KHSyeDOsQ_AUoAXoECA4QAw&biw=1504&bih=860"
        } else {
            location.href = "./home.html";
        }
    }
    
}