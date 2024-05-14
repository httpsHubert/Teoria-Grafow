var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
    { id: 5, label: 'E' },
    { id: 6, label: 'F' },
    { id: 7, label: 'G' },
    { id: 8, label: 'H' },
    { id: 9, label: 'I' },
    { id: 10, label: 'J' },
    { id: 11, label: 'K' },
    { id: 12, label: 'L' },
    { id: 13, label: 'M' },
    { id: 14, label: 'N' },
    { id: 15, label: 'O' },
];

var edges = [
    { from: 1, to: 2},  
    { from: 1, to: 3},  
    { from: 2, to: 4},  
    { from: 2, to: 5},
    { from: 3, to: 6},
    { from: 3, to: 7},  
    { from: 3, to: 8},  
    { from: 4, to: 9},  
    { from: 4, to: 10},  
    { from: 4, to: 11},  
    { from: 6, to: 12},  
    { from: 6, to: 13},  
    { from: 8, to: 14},  
    { from: 8, to: 15},  
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

var container = document.querySelector('.tree__graph-4');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
