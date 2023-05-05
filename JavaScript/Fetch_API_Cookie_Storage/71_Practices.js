let url = "https://kontests.net/api/v1/all";

let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((contests)=>{
    console.log(contests);

    iHTML = ""

    for (item in contests){
        console.log(contests[item]);
        let a = new Date()
        iHTML += `
        <div class="card" style="width: 18rem; margin:1rem">
        <img class="card-img-top" src="https://media.istockphoto.com/id/1413990965/photo/glowing-python-programming-language-code-on-a-blue-digital-surface-with-a-sphere-grid-design.jpg?b=1&s=170667a&w=0&k=20&c=Mcir7vC75iWlMwltmAMIdT4n5cA6cDJ8shaTLSDcLDc=" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">"${contests[item].site}"</p>
          <p>Start: ${contests[item].start_time} and 
          End: ${contests[item].end_time}</p>
          <p>Status: ${contests[item].status}, 24 Hours: ${(contests[item].in_24_hours) }  </p>
          <a href="${contests[item].url}" class="btn btn-primary">Contests</a>
        </div>
      </div>
        `
    }
    cardContainer.innerHTML = iHTML;
})
