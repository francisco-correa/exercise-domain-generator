
// arrays
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', "hola"];
let dom = ['.com', '.cl', '.org']


// ForEach
pronoun.forEach(function (item_1, index_1) {
    adj.forEach(function (item_2, index_2) {
        noun.forEach(function (item_3, index_3) {
            dom.forEach(function (item_4, index_4) {
                console.log(pronoun[index_1].concat(adj[index_2].concat(noun[index_3].concat(dom[index_4]))))
            });
        });
    });
});

// For loop
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let z = 0; z < dom.length; z++) {
                console.log(pronoun[i].concat(adj[j].concat(noun[k].concat(dom[z]))))
            }
        }
    }
}
