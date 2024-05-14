var nodes = [
    { id: 1, label: 's', x: 0, y: -100},  
    { id: 2, label: 'r', x: -100, y: -50 }, 
    { id: 3, label: 'q', x: -100, y: 50 }, 
    { id: 4, label: 'p', x: 0, y: 100},
    { id: 5, label: 'u', x: 100, y: 50 },
    { id: 6, label: 't', x: 100, y: -50 }
];


var edges = [
    { from: 1, to: 2},  
    { from: 2, to: 3},
    { from: 3, to: 4},
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 6, to: 1 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 }
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

var container = document.querySelector('.main__isomorphic-graph1');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
