var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
    { id: 5, label: 'E' },
    { id: 6, label: 'F' }
];

var edges = [
    
];


var options = {
    edges: {
        arrows: 'to',
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

var container = document.querySelector('.main__edges-nodes-vis');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);

