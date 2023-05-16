let tabs = document.querySelectorAll('.tabs li');
let tabsCont = document.querySelectorAll('.info-content div');


tabs.forEach((tab)=> {
    tab.onclick = () => {
        tabs.forEach((tab)=> {
            tab.classList.remove('selected');
        });
        tab.classList.add('selected');
        tabsCont.forEach((tabCont)=> {
            tabCont.style.display = 'none';
        })
        document.querySelector(`${tab.dataset.tabs}`).style.display = 'block';
    }
});

/*global $ */

// $(function () {
//     'use strict';
//     $('.info-list li').click(function () {
//         $(this).addClass('selected').siblings('li').removeClass('selected');
//     });
// });