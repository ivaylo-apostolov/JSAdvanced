function mySolution() {
    let textArea = document.querySelector("#inputSection > textarea");
    let userName = document.querySelector("#inputSection > div > input[type=username]");

    let send = document.querySelector("#inputSection > div > button");
    send.addEventListener('click', createData);

    function createData() {
        let divPendingQuestion1 = document.getElementById('pendingQuestions');
        let divContainer2 = document.createElement('div');
        divContainer2.className = 'pendingQuestion';
        fill(divPendingQuestion1, divContainer2);

        function fill(parentDiv, childDiv) {
            parentDiv.appendChild(childDiv);

            let image = document.createElement('img');
            image.src = "images/user.png";
            image.width = '32';
            image.height = '32';
            let locateDiv2 = document.querySelector("#pendingQuestions > div");
            locateDiv2.appendChild(image);

            let span = document.createElement('span');
            if (userName.value !== '') {
                span.textContent = userName.value;
            } else {
                span.textContent = 'Anonymous';
            }

            locateDiv2.appendChild(span);

            let paragraph = document.createElement('p');
            paragraph.textContent = textArea.value;
            locateDiv2.appendChild(paragraph);

            let divAction = document.createElement('div');
            divAction.className = 'actions';

            document.querySelector("#pendingQuestions > div").appendChild(divAction);
        }

        let buttonArchive = document.createElement('button');
        buttonArchive.className = 'archive';
        buttonArchive.textContent = 'Archive';
        document.querySelector("#pendingQuestions > div > div").appendChild(buttonArchive);

        let buttonOpen = document.createElement('button');
        buttonOpen.className = 'open';
        buttonOpen.textContent = 'Open';
        document.querySelector("#pendingQuestions > div > div").appendChild(buttonOpen);

        textArea.value = '';
        userName.value = '';
        isClickedOnce = true;

        document.querySelector("#pendingQuestions > div > div > button.archive").addEventListener('click', removeData);

        function removeData() {
            document.getElementById('pendingQuestions').removeChild(document.querySelector("#pendingQuestions > div"));
        }

        //Open button
        document.querySelector("#pendingQuestions > div > div > button.open")
            .addEventListener('click', moveToOpenQuestion);

        function moveToOpenQuestion() {
            let divPendingQuestion1 = document.getElementById('pendingQuestions');
            let divContainer3 = document.createElement('div');
            divContainer2.className = 'openQuestion';
            fill(divPendingQuestion1, divContainer3);
        }
    }
}

