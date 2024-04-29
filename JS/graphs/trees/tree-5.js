var nodes = [
    { id: 1, label: '' },
    { id: 2, label: '' },
    { id: 3, label: '1' },
    { id: 4, label: '' },
    { id: 5, label: '2' },
    { id: 6, label: '3' },
    { id: 7, label: '' },
    { id: 8, label: '4' },
    { id: 9, label: '7' },
    { id: 10, label: '5' },
];

var edges = [
    { from: 1, to: 2},  
    { from: 1, to: 3},  
    { from: 1, to: 4},
    { from: 2, to: 5},
    { from: 2, to: 6},
    { from: 4, to: 7},
    { from: 4, to: 8},
    { from: 7, to: 9},
    { from: 7, to: 10},
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
    physics: false,
    interaction: {
        dragView: false,
        dragNodes: true,
        zoomView: false
    },
    layout: {
        hierarchical: {
            direction: 'UD',
            sortMethod: 'directed',
            levelSeparation: 100,
            nodeSpacing: 140,
        }
    },
};

var container = document.querySelector('.tree__graph-5');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
