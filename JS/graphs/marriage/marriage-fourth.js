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

var groups = {
    Panna: { color: '#FF7F50' },
    Kawaler: { color: '#6495ED' }
};


var options = {
    edges: {
        labelHighlightBold: true,
        color: {
            color: '#ffffff',  
            highlight: '#ffffff',  
            hover: '#ffffff',
            border: '#ffffff',
        },
        width: 2.5,
        selectionWidth: 3,
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
    groups: groups,
    physics: false,
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
