let isChecked = false;

document.querySelector(".disappear").addEventListener('click', () => {
    if (isChecked) {
        document.querySelector('.container').style.display = "block";
    } else {
        document.querySelector('.container').style.display = "none";
    }
    isChecked = !isChecked;
});