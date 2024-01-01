var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
];

var edges = [
    { from: 1, to: 2, label: '1' },  
    { from: 2, to: 3, label: '2' },  
    { from: 2, to: 4, label: '3' },
    { from: 3, to: 1, label: '4' },
    { from: 4, to: 1, label: '5' },  
];

var options = {
    edges: {
        arrows: 'to',
        labelHighlightBold: true,
        color: {
            color: '#ffffff',  // Kolor krawędzi
            highlight: '#ffffff',  // Kolor krawędzi po najechaniu
            hover: '#ffffff',  // Kolor krawędzi po najechaniu
        }
    },
    nodes: {
        color: {
            background: '#00030e',  // Kolor tła wierzchołków
            border: '#ffffff',  // Kolor obramowania wierzchołków
            highlight: {
                background: '#ffffff',  // Kolor tła wierzchołków po najechaniu
                border: '#ffffff'  // Kolor obramowania wierzchołków po najechaniu
            },
            hover: {
                background: '#ffffff',  // Kolor tła wierzchołków po najechaniu
                border: '#ffffff'  // Kolor obramowania wierzchołków po najechaniu
            },
        },
        font: {
            color: '#ffffff'  // Kolor liter w wierzchołkach
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
        dragNodes: true
    },
};

var container = document.getElementById('graph-representation-visualisation-list');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
