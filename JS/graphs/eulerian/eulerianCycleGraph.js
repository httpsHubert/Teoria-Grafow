var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
    { id: 5, label: 'E' },
];

var edges = [
    { from: 1, to: 2, label: '1' },
    { from: 1, to: 4, label: '2' },
    { from: 2, to: 4, label: '3' },
    { from: 3, to: 4, label: '4' },
    { from: 4, to: 5, label: '5' },
    { from: 4, to: 3, label: '6' },
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
};

var container = document.querySelector('.main__eulerian-cycle');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
