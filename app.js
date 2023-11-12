window.onload = function(){
    var searchBtn = document.querySelector("button");
    const req = new XMLHttpRequest();
    function defaultAction(){
        let url = "http://localhost/info2180-lab4/superheroes.php";
        req.onreadystatechange = function(){
        if (req.readyState === XMLHttpRequest.DONE){
            if (req.status === 200){
                document.querySelector("div").innerHTML = req.responseText;
            }}
        }
        req.open("GET", url);
        req.send();
    }

    function findHero(heroText){
        let url = "http://localhost/info2180-lab4/superheroes.php?heroName=" + heroText;
        req.onreadystatechange = function(){
            if (req.readyState === XMLHttpRequest.DONE){
                if (req.status === 200){
                    document.querySelector("div").innerHTML = req.responseText;
                }}
            }
            req.open("GET", url);
            req.send();
    }

    function searchEvent(e){
        e.preventDefault();
        document.querySelector("div").innerHTML = "";
        heroText.value = sanitize(heroText.value.trim());
        if (heroText.value == ""){
            defaultAction(e);
        }
        else{
            findHero(heroText.value);
        }
    }   

    function sanitize(word){
        return word.replace(/</g, "").replace(/>/g,"").replace(/&/,"").replace(/"/g);
    }
    searchBtn.addEventListener("click", searchEvent)    
};
