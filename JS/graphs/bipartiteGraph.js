var nodes = [
    { id: 1, label: 'A', x: 0, y: 200 },
    { id: 2, label: 'B', x: 100, y: 200 },
    { id: 3, label: 'C', x: 200, y: 200 },
    { id: 4, label: 'X', x: 0, y: -200 },
    { id: 5, label: 'Y', x: 100, y: -200 },
];

var edges = [
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 2, to: 5 },
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
        enabled: false
    },
    interaction: {
        dragView: false,
        dragNodes: false,
        zoomView: false
    },
};

var container = document.querySelector('.main__bipartite-graph-vis');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);