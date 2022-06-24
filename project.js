
// const animal_btn= document.getElementById("animal_btn");
// const animaldiv= document.getElementById('animalResult');
// const form=document.getElementById("form")
// const guessForm=document.getElementById("guessform")

animal_btn.addEventListener("click", getRandomFact);
form.addEventListener("submit", logSubmit);
guessform.addEventListener("submit", formSubmit);

function logSubmit(event){
    // console.log("submitted")
    event.preventDefault()
    const name= document.getElementById("name").value
   heading.innerText= `Welcome ${name} to the website`
 
}
function formSubmit(event){
    // console.log("submitted2")
    event.preventDefault()
    const guess =document.getElementById("guess").value
    heading.innerText=`Guessed Animal Name: ${guess}`
}


function getRandomFact(event){
 fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
        .then((res) => res.json())
        .then(animal =>{ 
            // console.log(animal)
            
            
            const myObject = `
                              <p>Latin name: ${animal.latin_name}</p>
                              <p>Active time: ${animal.active_time}</p>
                              <p>Length minimum: ${animal.length_min} ft</p>
                              <p>Length maximum: ${animal.length_max}ft</p>
                              <p>Weight minimum: ${animal.weight_min}pounds</p>
                              <p>Weight maximum: ${animal.weight_max}pounds</p>
                              <p>Average Lifespan: ${animal.lifespan} years</p>
                              <p>Habitat: ${animal.habitat}</p>
                              <p>Diet: ${animal.diet}</p>
                              <p>Geographical range: ${animal.geo_range}</p>
                              <img src= ${animal.image_link}></p>
                              <p>Animal name: ${animal.name}</p>
            `
            
            // const myArray = Object.values(animal);
            document.getElementById("animalResult").innerHTML = myObject;
        
            
        })
        }     
        
        

