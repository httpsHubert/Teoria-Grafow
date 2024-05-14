var nodes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
    { id: 5, label: 'E' },
];

var edges = [
    { from: 1, to: 2, color: "red"  },
    { from: 1, to: 4  },
    { from: 2, to: 4, color: "red"  },
    { from: 3, to: 4, color: "red"  },
    { from: 3, to: 5, color: "red"  },
    { from: 4, to: 5, color: "red"  },
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

var container = document.querySelector('.main__eulerian-cycle');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
