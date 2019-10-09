function toggle() {
    const locateBtn = document.getElementsByClassName('button')[0];
    const locateHidden = document.getElementById('extra');

    console.log(locateBtn.innerText);

    if (locateBtn.textContent === 'More') {
        locateBtn.textContent = 'Less';
        locateHidden.style.display = 'block';
    }else if(locateBtn.textContent === 'Less'){
        locateBtn.textContent = 'More';
        locateHidden.style.display = 'none';
    }
}