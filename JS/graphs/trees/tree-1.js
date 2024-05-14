var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
];

var edges = [
    { from: 1, to: 2},  
    { from: 2, to: 3},   
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
        randomSeed: 3
    }
};

var container = document.querySelector('.tree__graph-1');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
