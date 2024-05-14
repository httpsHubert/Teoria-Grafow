var nodes = [
    { id: 1, label: 'A'},  
    { id: 2, label: 'B'}, 
    { id: 3, label: 'C' }, 
    { id: 4, label: 'D'},
    { id: 5, label: 'E' }, 
    { id: 6, label: 'F' }, 
    { id: 7, label: 'G' }, 
    { id: 8, label: 'H' },
    { id: 9, label: 'I'}, 
];

var edges = [
    { from: 1, to: 2},  
    { from: 1, to: 4},  
    { from: 2, to: 3},
    { from: 2, to: 5 },
    { from: 3, to: 6 },  
    { from: 3, to: 9 },
    { from: 4, to: 5 },
    { from: 4, to: 7 },
    { from: 5, to: 6 }, 
    { from: 5, to: 8 },
    { from: 6, to: 9},
    { from: 7, to: 8},
    { from: 7, to: 9 },
    { from: 8, to: 9 },
    { from: 1, to: 5},
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
    },
    layout: {
        randomSeed: 5023458765
    }
};

var container = document.querySelector('.main__planar-graph-eulerF');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
