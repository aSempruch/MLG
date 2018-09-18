const fs = require('fs')
const serialize = require('serialization')
const brain = require('brain.js')

const normalize = (data) => {
    var result = {x: [], y: []}
    data.forEach(pair => {
        result.x.push(pair[0])
        result.y.push(pair[1])
    })
    return result
}

const train = (data, type) => {
    data = normalize(data)
    const file = `${__dirname}\\data\\${type}.obj`

    //if(!fs.existsSync(file)){
        var net = new brain.NeuralNetwork()
        net.train([{
            input: data,
            output: [0]
        }])
        console.log(net.run(data))
        fs.writeFileSync(file, JSON.stringify(net.toJSON()))
        //serialize.toString(classifier, createClassifier)
        return -1
    //}

    net.train([{
        input: data,
        output: [0]
    }])
    fs.writeFileSync(file, serialize.toString(classifier, createClassifier))
}

const classify = (data, type) => {
    const file = `./data/${type}.obj`

    if(!fs.existsSync(file))
        return train(data, type)
    
    data = normalize(data)
    classifier = serialize.fromString(fs.readFileSync(file), __dirname)
    //return classifer.classify({mouse: data})
}

module.exports = {
    classify: classify,
    train: train
}