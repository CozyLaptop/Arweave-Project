fetch('https://arweave.net/info')
    .then( response => { response.json().then(object => {
        // for (var i = 0; i < object.length; i++){
        //     console.log(object[i]);
        // }
        console.log(object.length)
    });
        // console.log('Arweave network height is: ');
    })
    .catch( error => {
        console.error(error);
    });