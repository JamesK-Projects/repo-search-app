function displayResults(responseJson){
    console.log(responseJson);
    $('.repo-list').removeClass('hidden');
    $('.repo-list').empty();
    for (let i = 0; i <= responseJson.length; i++){
        if(responseJson.length === 0){
            $('.repo-list').append('<p>No Repos Found. Please try another username.</p>');
        }
        else {
            $('.repo-list').append(
            `<div class="results">
                <ul>
                    <li><h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3></li>
                </ul>
            </div>`);
        };
    };
};

function searchGithub(){
    const repoSearch = $('.js-repo-search').val();
    const url = `https://api.github.com/users/${repoSearch}/repos`;
    const options = {
        headers: new Headers({
            "User-Agent": "JamesK-Projects"
        })
    }
    fetch(url, options)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
};

function watchForm(){
    $('form').submit(event =>{
        event.preventDefault();
        searchGithub();
    })
}

$(watchForm);