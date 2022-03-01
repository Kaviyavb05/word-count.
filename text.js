// words = () =>{
// let word ="Policies of privatisation should be considered as responses to several distinct pressures. First, privatisation is a response by the state to internal forces such as increasing fiscal problems (O’Connor, 1973). It provides a means of lessening the state’s fiscal responsibilities by encouraging the development of private alternatives which, theoretically at least, do not draw upon the state’s financial reserves. Second, the promotion of private sector activity is a response to pressures originating ‘outside’ the state apparatus. These include demands from people who see a large state bureaucracy as inefficient and wasteful, demands from business interests who claim that they can overcome these inefficiencies, and pressures from client groups who seek to reduce their dependency on the welfare state by having more control over the services on which they depend. Clearly, this variety of calls for privatisation means that it is not a process with a uniform outcome; there exists a correspondingly wide variety of forms of privatisation.";
// let numbercount = word.match(/(\w+)/g).length;
function word(str) { 
    return str.split(" ").reduce(function(count, word) {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      const wordCount ={};
      const length = word.length;
     // console.log(wordCount.length);
      return count;
    }, {});
  } 
  
  console.log();
// } 
let para = "Policies of privatisation should be considered as responses to several distinct pressures. First, privatisation is a response by the state to internal forces such as increasing fiscal problems (O’Connor, 1973). It provides a means of lessening the state’s fiscal responsibilities by encouraging the development of private alternatives which, theoretically at least, do not draw upon the state’s financial reserves. Second, the promotion of private sector activity is a response to pressures originating ‘outside’ the state apparatus. These include demands from people who see a large state bureaucracy as inefficient and wasteful, demands from business interests who claim that they can overcome these inefficiencies, and pressures from client groups who seek to reduce their dependency on the welfare state by having more control over the services on which they depend. Clearly, this variety of calls for privatisation means that it is not a process with a uniform outcome; there exists a correspondingly wide variety of forms of privatisation.";
let result = word(para);
console.log(para.match(/(\w+)/g).length);
console.log(result);