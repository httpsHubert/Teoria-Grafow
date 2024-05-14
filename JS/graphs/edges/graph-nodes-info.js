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
        },
        font: {
            color: 'black',
            size: 17
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
        randomSeed: 8
    }
};

var container = document.querySelector('.main__edges-nodes-vis');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);

