var nodes = [
    { id: 1, label: '1'},
    { id: 2, label: '2'},
    { id: 3, label: '3'},
    { id: 4, label: '4'}
];

var edges = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 1 },
    { from: 1, to: 3 },
    { from: 2, to: 4 } 
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

var container = document.querySelector('.main__complete-graph2');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
