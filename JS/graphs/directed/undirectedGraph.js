
var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
];

var edges = [
    { from: 1, to: 2 },  
    { from: 2, to: 3 },  
    { from: 2, to: 4 },
    { from: 3, to: 1 },
    { from: 4, to: 1 },  
];

var options = {
    nodes: {
        shape: 'ellipse',
        size: 25,
        color: {
            background: 'rgba(0, 3, 14, 0.8)',
            border: '#33bbcf',
            highlight: {
                background: 'black',
                border: '#2B7CE9'
            },
            hover: {
                background: '#D2E5FF',
                border: '#2B7CE9'
            }
        },
        font: {
            color: '#FFFFFF',
            size: 15
        }
    },
    edges: {
        width: 2,
        color: {
            color: '#848484',
            highlight: '#848484',
            hover: '#848484'
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
        improvedLayout: true
    }
};


var container = document.querySelector('.main__undirected-graph-vis');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
