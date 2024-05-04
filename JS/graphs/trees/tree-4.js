var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
    { id: 5, label: 'E' },
    { id: 6, label: 'F' },
    { id: 7, label: 'F' },
    { id: 8, label: 'F' },
    { id: 9, label: 'F' },
    { id: 10, label: 'F' },
    { id: 11, label: 'F' },
    { id: 12, label: 'F' },
    { id: 13, label: 'F' },
    { id: 14, label: 'F' },
    { id: 15, label: 'F' },
];

var edges = [
    { from: 1, to: 2},  
    { from: 1, to: 3},  
    { from: 2, to: 4},  
    { from: 2, to: 5},
    { from: 3, to: 6},
    { from: 3, to: 7},  
    { from: 3, to: 8},  
    { from: 4, to: 9},  
    { from: 4, to: 10},  
    { from: 4, to: 11},  
    { from: 6, to: 12},  
    { from: 6, to: 13},  
    { from: 8, to: 14},  
    { from: 8, to: 15},  
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
        randomSeed: 3765765212999
    }
};

var container = document.querySelector('.tree__graph-4');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
