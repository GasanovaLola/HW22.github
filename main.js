window.onload = function() {
    let clicker = document.querySelectorAll(".block");
    let buttons = document.querySelectorAll(".clicker");
    let clin = document.querySelectorAll(".clin");
    let setCounter = document.querySelectorAll(".setCounter");

    if (localStorage.getItem('counter1')) {
        document.getElementById('first').innerText = localStorage.getItem('counter1');
    }
    if (localStorage.getItem('counter2')) {
        document.getElementById('second').innerText = localStorage.getItem('counter2');
    }

    function stopDefAction(e) {
        e.preventDefault();
    }

    const clickCounter = function({target}) {
        let counter = this.querySelector(".counter");

        if (target.tagName == 'BUTTON' && target.className === 'clicker') {
            
            counter.innerText = Number(counter.innerText) + 1;

            if (counter.id === 'first') {
                localStorage.setItem('counter1', Number(counter.innerText));
                console.log(counter.id)
            }
            else if(counter.id === 'second') {
                localStorage.setItem('counter2', Number(counter.innerText));
                console.log(counter.id);
            }
        }
        if (target.tagName == 'BUTTON' && target.className === 'clin') {
            clin = this.querySelector(".clin");

            console.log(counter.innerText);
            counter.innerText = 0;

            if (clin.id === 'first') {
                localStorage.setItem('counter1', 0);
            }
            else if(clin.id === 'second') {
                localStorage.setItem('counter2', 0);
            }
        }
        if (target.tagName == 'BUTTON' && target.className === 'setCounter') {
            setCounter = this.querySelector(".setCounter");

            let temp = prompt("Введите число в counter");
            console.log(temp);

            counter.innerText = temp;
            setCounter = this.querySelector(".setCounter");

            if (setCounter.id === 'first') {
                localStorage.setItem('counter1', Number(counter.innerText));
            }
            else if(setCounter.id === 'second') {
                localStorage.setItem('counter2', Number(counter.innerText));
            }
        }
    }

    clin.forEach( clin => {
        clin.addEventListener('click', stopDefAction);
    });
    clin.forEach( clin => {
        clin.addEventListener('click', clickCounter);
    });

    clicker.forEach( click => {
        click.addEventListener('click', stopDefAction);
    });
    clicker.forEach( click => {
        click.addEventListener('click', clickCounter);
    });

    setCounter.forEach( setCounter => {
        setCounter.addEventListener('click', stopDefAction);
    });
    setCounter.forEach( setCounter => {
        setCounter.addEventListener('click', clickCounter);
    });
}