
function clickOutsideHandle () {
    document.addEventListener('click', function handleClickOutsideBox(event) {
        // 👇️ the element the user clicked
        console.log('user clicked: ', event.target);
      
        const box = document.querySelector('.comboboxHotel');
      
        if (!box.contains(event.target)) {
          box.style.display = 'none';
        }
    })
}
export {clickOutsideHandle}
