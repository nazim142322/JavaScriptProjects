const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click', function(){    
        ul.classList.toggle('ham_active');

    let ham_child=hamburger.firstElementChild;
    console.log(ham_child);

    if(ul.classList.contains('ham_active')){
        ham_child.classList.replace('fa-bars','fa-xmark');
    //    let html='<i class="fa-sharp fa-solid fa-xmark"></i>';
    //    hamburger.insertAdjacentHTML('beforeend',html);
    //    hamburger.removeChild(ham_child);
    }
    else{
        ham_child.classList.replace('fa-xmark','fa-bars');
    //    let html="<i class='fa-solid fa-bars'></i>";
    //    hamburger.insertAdjacentHTML('beforeend',html);
    //    hamburger.removeChild(ham_child);
    }
 });


