var nodes = [
    { id: 1, label: '1'},
    { id: 2, label: '2'},
    { id: 3, label: '3'},
    { id: 4, label: '4' },
    { id: 5, label: '5',},
    { id: 6, label: '6'},
    { id: 7, label: '7'},
    { id: 8, label: '8'}
];

var edges = [];


for (var i = 1; i <= nodes.length; i++) {
    for (var j = i + 1; j <= nodes.length; j++) {
        edges.push({ from: i, to: j });
    }
}

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

var container = document.querySelector('.main__complete-graph3');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
