(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value = '';
        }
        else {
            try {
              let result = eval(screen.textContent);
              screen.textContent = result;
            } catch (error) {
              console.error('Error: ' + error.message);
              screen.textContent = '';
            }
          }
        });


    clear.addEventListener('click',function(e){
        screen.value= "";

    })

}) ();


