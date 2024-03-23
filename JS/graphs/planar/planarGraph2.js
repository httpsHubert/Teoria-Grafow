var nodes = [
    { id: 1, label: 'A', x: 0, y: -50 },  // Center vertex
    { id: 2, label: 'B', x: 0, y: -150 }, // Vertex B
    { id: 3, label: 'C', x: 200, y: 75 }, // Vertex C
    { id: 4, label: 'D', x: -200, y: 75 }, // Vertex D
];


var edges = [
    { from: 1, to: 2, label: '1' },  
    { from: 2, to: 3, label: '2' },  
    { from: 3, to: 1, label: '2' },  
    { from: 1, to: 4, label: '3' },
    { from: 2, to: 4, label: '4' },
    { from: 3, to: 4, label: '5' },  
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
};

var container = document.querySelector('.main__planar-graph2');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
