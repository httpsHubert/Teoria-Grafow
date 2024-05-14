var nodes = [
    { id: 0, label: 'Anna', group: 'Panna' },
    { id: 1, label: 'Beata', group: 'Panna' },
    { id: 2, label: 'Celina', group: 'Panna' },
    { id: 3, label: 'Dorota', group: 'Panna' },
    { id: 4, label: 'Ewa', group: 'Panna' },
    { id: 5, label: 'Fryderyk', group: 'Kawaler' },
    { id: 6, label: 'Grzegorz', group: 'Kawaler' },
    { id: 7, label: 'Henryk', group: 'Kawaler' },
    { id: 8, label: 'Igor', group: 'Kawaler' },
    { id: 9, label: 'Jan', group: 'Kawaler' }
];

var edges = [
    { from: 0, to: 7, color: "green" }, // Anna -> Henryk
    { from: 1, to: 5, color: "green" }, // Beata -> Fryderyk
    { from: 1, to: 6, color: "red" }, // Beata -> Grzegorz
    { from: 1, to: 8 }, // Beata -> Igor
    { from: 2, to: 5, color: "red" }, // Celina -> Fryderyk
    { from: 3, to: 6 }, // Dorota -> Grzegorz
    { from: 3, to: 8 }, // Dorota -> Igor
    { from: 3, to: 9 }, // Dorota -> Jan
    { from: 4, to: 7 }, // Ewa -> Henryk
    { from: 4, to: 8 }  // Ewa -> Igor
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
            color: 'black',
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
    groups: {
        Panna: { color: '#FFA726' },
        Kawaler: { color: '#42A5F5' }
    },
    interaction: {
        dragView: false,
        dragNodes: true,
        zoomView: false
    },
    layout: {
        randomSeed: 8
    }
};


var container = document.querySelector('.graph-marriage-fourth-step');

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
