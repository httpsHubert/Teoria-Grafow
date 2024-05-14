var nodes = [
    { id: 1, label: 'A', x: 0, y: 200 },
    { id: 2, label: 'B', x: 100, y: 200 },
    { id: 3, label: 'C', x: 200, y: 200 },
    { id: 4, label: 'D', x: 300, y: 200 },
    { id: 5, label: 'X', x: 0, y: -200 },
    { id: 6, label: 'Y', x: 100, y: -200 },
    { id: 7, label: 'Z', x: 200, y: -200 },
    { id: 8, label: 'W', x: 300, y: -200 }
];

var edges = [
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 2, to: 7 },
    { from: 2, to: 8 },
    { from: 2, to: 6 },
    { from: 3, to: 5 },
    { from: 3, to: 7 },
    { from: 3, to: 6 },
    { from: 4, to: 7 },
    { from: 4, to: 8 }
];


var options = {
    nodes: {
        shape: 'ellipse',
        size: 25,
        color: {
            background: 'rgba(0, 3, 14, 0.8)',
            border: '#03ffdc',
            highlight: {
                background: 'black',
                border: '#2B7CE9'
            },
        },
        font: {
            color: '#FFFFFF',
            size: 15
        }
    },
    edges: {
        width: 2,
        color: {
            color: 'rgb(80, 80, 80)',
            highlight: '#848484',
        },
        smooth: {
            type: 'continuous'
        }
    },
    physics: {
        enabled: true,
        solver: 'forceAtlas2Based'
    },
    interaction: {
        dragView: false,
        dragNodes: true,
        zoomView: false
    },
    layout: {
        randomSeed: 1
    }
};


var container = document.querySelector('.main__bipartite-graph-vis');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);