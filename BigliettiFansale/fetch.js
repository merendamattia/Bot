// fetch('https://www.fansale.it/fansale/tickets/pop-amp-rock/ultimo/547237')
// .then((response) => console.log(response.text()));
// //.then((data) => console.log(data));
fetch("https://www.fansale.it/fansale/tickets/pop-amp-rock/ultimo/547237")
.then((result) => { return result.text(); })
.then((content) => { 
    let result = content.toLowerCase().includes("milano");
    console.log(result); 
    console.log(content); 
});