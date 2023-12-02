var V = 9;

var graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
];

var nodes = new vis.DataSet(
    Array.from({ length: V }, (_, id) => ({ id: id + 1, label: 'Node ' + (id + 1), shape: 'box', color: 'white' }))
);

var edges = new vis.DataSet();
for (var i = 0; i < V; i++) {
    for (var j = i + 1; j < V; j++) {
        if (graph[i][j] !== 0) {
            edges.add({ from: i + 1, to: j + 1, label: String(graph[i][j]), color: { color: '#d3d3d3' } });
        }
    }
}

var container = document.getElementById('graph');
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
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
        dragNodes: true
    }
};
var network = new vis.Network(container, data, options);
