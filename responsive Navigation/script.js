const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click', function(){    
        ul.classList.toggle('ham_active');

    let hum_child=hamburger.firstElementChild;
    console.log(hum_child);

    if(ul.classList.contains('ham_active')){
        hum_child.classList.replace('fi-xnsuxl-three-bars-solid','fi-xwluxl-times-wide');
        // console.log(ul.classList.contains('ham_active'));
        // hamburger.innerHTML='<i class="fi-xnsuxl-three-bars-solid"></i>'
        // console.log(hamburger.innerHTML='<i class="fi-xnsuxl-three-bars-solid"></i>');
    }
    else{
        hum_child.classList.replace('fi-xwluxl-times-wide','fi-xnsuxl-three-bars-solid');
   
    // hamburger.innerHTML='<i class="fi-xwluxl-times-wide"></i>';
    // console.log( hamburger.innerHTML='<i class="fi-xwluxl-times-wide"></i>');
    }
 
});


