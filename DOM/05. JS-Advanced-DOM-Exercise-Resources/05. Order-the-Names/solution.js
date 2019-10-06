function solve() {
    let alphabet = {
        A:[],
        B:[],	
        C:[],
        D:[],
        E:[],
        F:[],
        G:[],
        H:[],
        I:[],
        J:[],
        K:[],
        L:[],
        M:[],
        N:['Nixon'],
        O:[],
        P:['Peterson'],
        Q:[],
        R:[],
        S:[],
        T:[],
        U:[],
        V:[],
        W:[],
        X:[],
        Y:[],
        Z:[]
    };

    document.querySelector("#exercise > article > button").addEventListener('click', addName);

    function addName(){
        let input = document.querySelector("#exercise > article > input[type=text]").value;
        let firstLetter = input[0].toUpperCase();
        input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        alphabet[firstLetter].push(input);
        document.querySelector("#exercise > article > input[type=text]").value = '';

        let list = document.querySelectorAll('ol li');
        let currentIndex = input.charCodeAt(0);
        list[currentIndex - 65].textContent = alphabet[firstLetter].join(', ');
    }
}