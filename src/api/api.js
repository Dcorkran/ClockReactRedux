
class Api {
  static getUser(form) {
    return fetch('http://10.0.2.2:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      })
    }).then((user)=>{
      // console.log(user.json());
      return user.json();
    }).catch((err)=>{
      console.log(err);
      return err;
    })
  }
  static updateAlarm(data){
    console.log(data);
    return fetch('http://10.0.2.2:3000/clocks', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: data.id,
        alarm: data.alarm,
      })
    }).then((user)=>{
      // console.log(user.json());
      return user.json();
    }).catch((err)=>{
      console.log(err);
      return err;
    })
  }

//   static saveAuthor(author) {
//     author = Object.assign({}, author); // to avoid manipulating object passed in.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulate server-side validation
//         const minAuthorNameLength = 3;
//         if (author.firstName.length < minAuthorNameLength) {
//           reject(`First Name must be at least ${minAuthorNameLength} characters.`);
//         }
//
//         if (author.lastName.length < minAuthorNameLength) {
//           reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
//         }
//
//         if (author.id) {
//           const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
//           authors.splice(existingAuthorIndex, 1, author);
//         } else {
//           //Just simulating creation here.
//           //The server would generate ids for new authors in a real app.
//           //Cloning so copy returned is passed by value rather than by reference.
//           author.id = generateId(author);
//           authors.push(author);
//         }
//
//         resolve(author);
//       }, delay);
//     });
//   }
//
//   static deleteAuthor(authorId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const indexOfAuthorToDelete = authors.findIndex(author => {
//           author.authorId == authorId;
//         });
//         authors.splice(indexOfAuthorToDelete, 1);
//         resolve();
//       }, delay);
//     });
//   }
}

export default Api;
