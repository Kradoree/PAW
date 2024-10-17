(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => { 
        let post = posts.map(content => `
          <div>
          <p>User ${content.userId} post ${content.id}</p>
          <h3>${content.title}</h1>
          <p>${content.body}</p>
          </div>
          <br/>
          `).join(' ');
          answer.innerHTML = post;
      })
  })

  cw2.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(posts => { 
          answer.innerHTML = `
          <div>
          <p>User ${posts.userId} post ${posts.id}</p>
          <h3>${posts.title}</h1>
          <p>${posts.body}</p>
          </div>
          <br/>`;
      })
  })

  cw3.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        userId: 1,
        title: "Tytul",
        body: "Lorem ipsum"
      })
      
    })
      .then(response => response.json())
      .then(added => {
        answer.innerHTML = `Dodano nowy post o ID = ${added.id}`;
      })
  })

})();
