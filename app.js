window.onload = function () {
    var searchBtn = document.querySelector("button");
    var heroText = document.getElementById("heroText");
    var resultDiv = document.querySelector("div");

    function defaultAction() {
        var url = "http://localhost/info2180-lab4/index.html";
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function findHero(heroTextValue) {
        var url = "http://localhost/info2180-lab4/superheroes.php?heroName=" + encodeURIComponent(heroTextValue);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function searchEvent(e) {
        e.preventDefault();
        resultDiv.innerHTML = "";
        var sanitizedValue = sanitize(heroText.value.trim());
        if (sanitizedValue === "") {
            defaultAction();
        } else {
            findHero(sanitizedValue);
        }
    }

    function sanitize(word) {
        return word.replace(/</g, "").replace(/>/g, "").replace(/&/g, "").replace(/"/g, "");
    }

    searchBtn.addEventListener("click", searchEvent);
};
