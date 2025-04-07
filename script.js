    
        fetch('https://api.jsonstorage.net/v1/json/e96d30d9-7cf9-40b4-982c-c72088f1ecb2/3f20874f-9d07-4c91-beee-a22c9e923662')
            .then(response => response.text())
            .then(data => {
                document.getElementById('marquee').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('error-message').innerText = 'Error loading text file: ' + error;
                new bootstrap.Modal(document.getElementById('errorModal')).show();
            });
    
