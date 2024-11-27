function search(){
    let search = document.getElementById('search').value;

    let lowk = search.toLowerCase();

    let x = document.getElementsByClassName('animal');
    for (let i = 0; i < x.length; i++){
        if (!x[i].innerHTML.toLowerCase().includes(lowk)){
            x[i].style.display = 'none';
        } else {
            x[i].style.display = 'list-item';
        }
    }

}