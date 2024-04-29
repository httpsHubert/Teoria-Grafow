var nodes = [
    { id: 1, label: '' },
    { id: 2, label: '' },
    { id: 3, label: '' },
    { id: 4, label: '' },
    { id: 5, label: '' },
    { id: 6, label: '' },
    { id: 7, label: '' },
    { id: 8, label: '' },
    { id: 9, label: '' },
    { id: 10, label: '' },
    { id: 11, label: '' },
    { id: 12, label: '' },
    { id: 13, label: '' },
    { id: 14, label: '' },
    { id: 15, label: '' },
];

var edges = [
    { from: 1, to: 2},  
    { from: 1, to: 3},  
    { from: 2, to: 4},
    { from: 2, to: 5},
    { from: 3, to: 6},
    { from: 3, to: 7},
    { from: 4, to: 8},
    { from: 4, to: 9},
    { from: 5, to: 10},
    { from: 5, to: 11},
    { from: 6, to: 12},
    { from: 6, to: 13},
    { from: 7, to: 14},
    { from: 7, to: 15},
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

var container = document.querySelector('.tree__graph-7');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
