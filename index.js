const url = 'https://blockchain.info/ticker';


function recupererPrix() {
    let requete = new XMLHttpRequest();
    requete.open('GET', url);

    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status == 200) {
                let reponse = requete.response;
                let prixEnEuros = reponse.EUR.last;
                let prixEnDollars = reponse.USD.last;
                let prixEnDollarsCanadien = reponse.CAD.last;
                document.querySelector('#price_label').textContent = prixEnEuros;
                document.querySelector('#price_label2').textContent = prixEnDollars;
                document.querySelector('#price_label3').textContent = prixEnDollarsCanadien;
            } else {
                alert('Un probleme est intervenu, merci de revenir plus tard.');
            }
        }
    }

    console.log('Prix Actualisé');
}

setInterval(recupererPrix, 1000);