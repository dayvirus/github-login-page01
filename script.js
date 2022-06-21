const formElement=document.querySelector('form');
// console.log(form)
const emailElement = document.querySelector('#username');
// console.log(emailElement)
// console.log(emailElement.value)
const msgElement = document.querySelector('#message');
// console.log(msgElement)
// console.log(  msgElement.classList.remove('hide')  )

function submitForm(evt){

    evt.preventDefault();

    // console.log('this works....')
    // console.log(emailElement.value)

    if(emailElement.value === ''){

        //console.log('this is empty')

        msgElement.classList.remove('hide');

    } else {

        msgElement.classList.add('hide');
        // console.log(emailElement.value)

    }

}

// >> declarative programming
formElement.addEventListener('submit', submitForm);