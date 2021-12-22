console.log("fetching Img array");
const filenames = [
    'images/cat1.jpg',
    'images/cat2.jpg',
    'images/cat3.jpg',
];

catchImages(filenames).then(response => {console.log("yay it works");
})
.catch(error => {console.log('an error has occured!!'); console.log(error);}
);

async function catchImages(filenames){

    for (let filename of filenames){
        const response = await fetch(filename);
        const blob = await response.blob();
        const img = document.createElement('img');

        img.src = URL.createObjectURL(blob);
        img.width = '200';
        document.body.append(img);
    }
}