import './styles.css';

// // const user1 = {
// //   name: 'Marcin',
// //   sayHello: () => {
// //     console.log('Cześć jestem Marcin');
// //   },
// // };

// // const user2 = {
// //   name: 'Sara',
// //   sayHello: () => {
// //     console.log('Cześć jestem Sara');
// //   },
// // };

// // const arrayOfUsers = [user1, user2];

// // user1.sayHello();
// user2.sayHello();

const user = {
  name: 'Marcin',
  sayHello: function () {
    // this === obiekt {user}
    console.log(`Cześć jestem ${this.name}`);
  },
};

user.sayHello(); // console.log => "Cześć jestem Marcin"

user.name = 'Sara';
user.sayHello(); // console.log => "Cześć jestem Sara"

export function Exercise() {
  return <div>OOP</div>;
}
