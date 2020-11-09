const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';



//get search
const search = document.querySelector('[type=search]');
const result = document.querySelector('.result');
const rank = document.querySelector('#sort--by--rank');
const getData = document.querySelector('#get--data');
//fetching data
fetch(endpoint).then(blob=>blob.json()).then(data=>{
  console.log(data);
    function findMatch(word, dataArr){
     
       return dataArr.filter(place=>{
           const regExp = new RegExp(word, 'gi');

           return place.city.match(regExp)|| place.state.match(regExp);
       })




    }

    function displayMatch() {

        const arr = findMatch(this.value, data);

        const html = arr.map(res=>{
            const regEx = new RegExp(this.value, 'gi');
             const cityName = res.city.replace(regEx,`<span class="highlight">${this.value}</span>`)
             const stateName = res.state.replace(regEx,`<span class="highlight">${this.value}</span>`)
            

             return `
             <li><span class ='rank'>rank:<span class="current--rank">${res.rank}</span></span><span class ='city'>place:${cityName}</span><span class ='state'>state:${stateName}</span><span class ='rate'>growth:<span class= 'value'>${res.growth_from_2000_to_2013}</span>
             <span class='population'> population:<span class="current--population">${res.population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</span></span>
             </li>



             
             
             
             
             
             
             
             `
        }).join('');

        result.innerHTML = html;

        const growth = document.querySelectorAll('.value');
         const growthArr = [...growth]
         //get rank
       


         

         
growthArr.forEach(state=>{

  const percentage = parseInt( state.textContent.replace(/\d+% ?/g, ""));
  
 if (percentage <= 10 ) {
     state.classList.add('low')
     
 } else if(percentage >=10 && percentage<=50) {

    state.classList.add('middle');
     
 }else{
    state.classList.add('high')
 }
   


})
}


// function dataFn(e){
//     console.log(e);
//     e.preventDefault();
//     const html = data.map(res=>{

//         return `
//         <li><span class ='rank'>rank:<span class="current--rank">${res.rank}</span></span><span class ='city'>place:${res.city}</span><span class ='rate'>growth:<span class= 'value'>${res.growth_from_2000_to_2013}</span>
//         <span class='population'> population:<span class="current--population">${res.population}</span></span>
//         </li>



        
        
        
        
        
        
        
//         `
//    }).join('');

//    result.innerHTML = html;
//    const growth = document.querySelectorAll('.value');
//    const growthArr = [...growth]
//    growthArr.forEach(state=>{

//     const percentage = parseInt( state.textContent.replace(/\d+% ?/g, ""));
    
//    if (percentage <= 10 ) {
//        state.classList.add('low')
       
//    } else if(percentage >=10 && percentage<=50) {
  
//       state.classList.add('middle');
       
//    }else{
//       state.classList.add('high')
//    }
     
  
  
//   })
   


// console.log(document.querySelectorAll('li'));






// // rank.addEventListener('click', sortFn);


// }


    





















['input', 'change'].forEach(eve=>search.addEventListener(eve, displayMatch));
// getData.addEventListener('click', dataFn)


})
