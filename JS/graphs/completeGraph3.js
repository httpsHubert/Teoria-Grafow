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
        dragNodes: true,
        zoomView: false
    },
    layout: {
        randomSeed: 3
    }

};

var container = document.querySelector('.main__complete-graph3');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
