
(function(){
    const search = document.getElementById("search");
    const profile = document.getElementById("profile");
    const url = "https://api.github.com/users";
    const client_id = "d2460f3bb1640c25772c";
    const client_secret = "83f2c933ea28b9302b35b5539e7684cb626cc716";
    
    async function getUser(User){
        const profileResponse = await fetch(
            `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);

        const profile =profileResponse.json();

        return profile;

    }


    search.addEventListener('keyup'), e => {
        const user = e.target.value;

        if (user.lenght >0) {
            getUser(user).then(res => console.log(res));
                             }
                            })

