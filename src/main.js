const brain = require("brain.js")

const network = new brain.NeuralNetwork()

network.train([
    {input: {height: 60, weight: 150}, output: {adult: 1}},
])

const result = network.run({height: 70, weight:200})

console.log(result);
