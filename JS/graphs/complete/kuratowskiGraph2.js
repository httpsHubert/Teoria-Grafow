var nodes = [
    { id: 1, label: "A", x: 200, y: 0 },
    { id: 2, label: "B'", x: 200, y: 100 },
    { id: 3, label: "C", x: 200, y: 200 },
    { id: 4, label: "D", x: -200, y: 0 },
    { id: 5, label: "E", x: -200, y: 100 },
    { id: 6, label: "F", x: -200, y: 200 },
];


var edges = [
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 2, to: 4 },
    { from: 2, to: 6 },
    { from: 3, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 5 },
    { from: 3, to: 6 },
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
        dragNodes: false
    },
};

var container = document.querySelector('.main__bipartiteComplete-graph2');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);



var container2 = document.querySelector('.main__kuratowski-graph2');

var data2 = { nodes: nodes, edges: edges };

var network2 = new vis.Network(container2, data2, options);