var nodes = [
    { id: 1, label: 'A'},  
    { id: 2, label: 'B'}, 
    { id: 3, label: 'C' }, 
    { id: 4, label: 'D'},
    { id: 5, label: 'E' }
];

var edges = [
    { from: 1, to: 2},  
    { from: 1, to: 3},  
    { from: 1, to: 4},
    { from: 1, to: 5},
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 5 }
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
        randomSeed: 12
    }
};

var container = document.querySelector('.main__kuratowski-graph1');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
