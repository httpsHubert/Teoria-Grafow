var nodes = [
    { id: 1, label: 'A', x: 0, y: -50 },  // Center vertex
    { id: 2, label: 'B', x: 0, y: -150 }, // Vertex B
    { id: 3, label: 'C', x: 200, y: 75 }, // Vertex C
    { id: 4, label: 'D', x: -200, y: 75 }, // Vertex D
];


var edges = [
    { from: 1, to: 2, },  
    { from: 2, to: 3, },  
    { from: 3, to: 1, },  
    { from: 1, to: 4, },
    { from: 2, to: 4, },
    { from: 3, to: 4, },  
];

var options = {
    nodes: {
        shape: 'ellipse',
        size: 25,
        color: {
            background: 'rgba(0, 3, 14, 0.8)',
            border: '#03ffdc',
            highlight: {
                background: 'black',
                border: '#2B7CE9'
            },
        },
        font: {
            color: '#FFFFFF',
            size: 15
        }
    },
    edges: {
        width: 2,
        color: {
            color: 'rgb(80, 80, 80)',
            highlight: '#848484',
        },
        smooth: {
            type: 'continuous'
        }
    },
    physics: {
        enabled: true,
        solver: 'forceAtlas2Based'
    },
    interaction: {
        dragView: false,
        dragNodes: true,
        zoomView: false
    }
};

var container = document.querySelector('.main__planar-graph2');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
