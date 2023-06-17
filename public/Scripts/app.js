//IIFE
//COMP229-402-Assignment1
//Noorahmad Hatami
//300847575
//06-03-2023
(function(){
    function Start()
    {
        console.log("App Started...")

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event) =>{
                if(!confirm('Are you sure?'))
                {
                    event.preventDefault();
                    window.location.assign('/business-contacts');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();