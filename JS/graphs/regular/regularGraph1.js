var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
    { id: 5, label: 'E' },
    { id: 6, label: 'f' },
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

var container = document.querySelector('.regularGraph1');

var data = { nodes: nodes };

var network = new vis.Network(container, data, options);
