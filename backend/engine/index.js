const fs = require('fs')
const serialize = require('serialization')

function createClassifier(){
    var limdu = require('limdu');
    return new limdu.classifiers.NeuralNetwork()
}

const classify = (data, type) => {
    const classifier = serialize.fromString(fs.readFileSync(`./data/${type}.obj`), __dirname)
    return classifer.classify(data)
}

const train = (data, type) => {
    const classifier = serialize.fromString(fs.readFileSync(`./data/${type}.obj`), __dirname)
    classifier.trainBatch([data])
    fs.writeFileSync(`./data/${type}.obj`, serialize.toString(classifier, createClassifier))
}

module.exports = {
    classify: classify,
    train: train
}