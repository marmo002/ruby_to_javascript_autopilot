var apples = 14
console.log(apples);

console.log("I have " + apples + " apples.");

var materials = ['wood', 'metal', 'stone']

var words = {
  'elephant': "The world's largest land mamal.",
  'school': "A place of learning.",
  'ice cream': "A delicious milk-based dessert."
}

console.log(words['elephant']);
console.log(words.school);
console.log(words['ice cream']);

var num = 9
if (num > 10) {
  console.log('"'+ num + '" is greater than "10"');
} else if (num === 10) {
  console.log(num + ' is exactly 10.');
} else {
  console.log(num + ' must be less than 10');
}

for (var i = 0; i < 10; i++) {
  console.log('Doing the same thing over and over');
}

var base = 5
for (var i = 0; i < 20; i++) {
  var result = i + base
  console.log(result);
}
console.log('*********100 times add to total***********');
var total = 0
for (var i = 0; i < 100; i++) {
  total += 1
}
console.log(total);

console.log('*********100 times add to total***********');
var numbers = []
for (var i = 3; i <= 15; i++) {
  numbers.push(i)
}
var tall_enough = function (height){
  if (height > 9) {
    console.log('You can get on the roller coster');
  }else {
    console.log('You are too short to ride this rollercoaster');
  }
}
numbers.forEach(tall_enough);

console.log('*********purse wallet backback***********');
var containers = ['purse', 'wallet', 'backback']
containers.forEach(function(container){
  console.log(container);
});

console.log('********* Hello World***********');
function hello_word() {
  console.log("Hellow World!!");
};
hello_word();

console.log('********* Add function***********');
function add(num1, num2){
  var sum = num1 + num2
  console.log(sum);
};

add(5,7)
