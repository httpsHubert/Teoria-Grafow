var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
    { id: 5, label: 'E' },
    { id: 6, label: 'F' },
];

var edges = [
    { from: 1, to: 4},  
    { from: 2, to: 4},  
    { from: 3, to: 4},
    { from: 5, to: 4},
    { from: 5, to: 6},  
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
        randomSeed: 3
    }
};

var container = document.querySelector('.tree__graph-3');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
