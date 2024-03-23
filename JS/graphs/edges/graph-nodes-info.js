var nodes = [
    { id: 1, label: 'v1' },
    { id: 2, label: 'v2' },
    { id: 3, label: 'v3' },
    { id: 4, label: 'v4' },
    { id: 5, label: 'v5' },
    { id: 6, label: 'v7' },
    { id: 7, label: 'v6' }
];

var edges = [
    { from: 1, to: 2, label: 'e1' },
    { from: 2, to: 1, label: 'e2' },
    { from: 1, to: 5, label: 'e3' },
    { from: 5, to: 3, label: 'e4' },
    { from: 5, to: 4, label: 'e8' },
    { from: 4, to: 4, label: 'e9' },
    { from: 7, to: 3, label: 'e5' },
    { from: 7, to: 2, label: 'e6' },
    { from: 2, to: 5, label: 'e7' },
];


var options = {
    edges: {
        labelHighlightBold: true,
        color: {
            color: '#ffffff',
            highlight: '#ffffff',
            hover: '#ffffff',
        }
    },
    nodes: {
        color: {
            background: '#00030e',
            border: '#ffffff',
            highlight: {
                background: '#ffffff',
                border: '#ffffff'
            },
            hover: {
                background: '#ffffff',
                border: '#ffffff' 
            },
        },
        font: {
            color: '#ffffff'
        },
        size: 10,
    },
    physics: {
        barnesHut: {
            gravitationalConstant: -2000,
            springConstant: 0.04,
            springLength: 95
        },
        maxVelocity: 146,
        solver: 'barnesHut',
        stabilization: {
            iterations: 150
        }
    },
    interaction: {
        dragView: false,
        dragNodes: true,
        zoomView: false
    },
    layout: {
        randomSeed: 1342432237
    }
};

var container = document.querySelector('.main__edges-nodes-vis');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);

