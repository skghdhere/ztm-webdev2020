var users = [
  {
    username: "sangram",
    password: "secret",
  },
];

var timeline = [
  {
    user: "Bobby",
    status: "Learning Javascript is fun!",
  },
  {
    user: "Jimmy",
    status: "I am learning node.js!",
  },
];

var name = prompt("Enter username");
var pass = prompt("Enter password");
function signIn(userName, passWord) {
  if (userName === users[0].username && passWord === users[0].password) {
    console.log(timeline);
  } else {
    console.error("Wrong ID");
  }
}
signIn(name, pass);
