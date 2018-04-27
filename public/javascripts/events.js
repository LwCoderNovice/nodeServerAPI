window.onload = () => {
    const _initBtn = document.querySelector('#init');
    const _showResult = document.querySelector('#result');
    _initBtn.addEventListener('click', () => {
        fetch('/init/start', {// must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            _showResult.innerHTML = response.result;
        })
        .catch(error => console.log(error));
    })
}