var nodes = [
    { id: 1, label: "A" },
    { id: 2, label: "B" },
    { id: 3, label: "C" },
    { id: 4, label: "D" },
    { id: 5, label: "E" },
    { id: 6, label: "F" },
    { id: 7, label: "G" },
    { id: 8, label: "H" },
];

var edges = [
    { from: 1, to: 2, color: "red" },
    { from: 1, to: 3, color: "red" },
    { from: 2, to: 6 },
    { from: 2, to: 4, color: "red" },
    { from: 4, to: 5, color: "red" },
    { from: 4, to: 6, },
    { from: 5, to: 6 },
    { from: 6, to: 1 },
    { from: 6, to: 3, color: "red"},
    { from: 6, to: 7, color: "red"},
    { from: 8, to: 7, color: "red"},
];

/*E, D, B, A, C, F, G, H*/

var options = {
    nodes: {
        shape: "ellipse",
        size: 25,
        color: {
            background: "rgba(0, 3, 14, 0.8)",
            border: "#03ffdc",
            highlight: {
                background: "black",
                border: "#2B7CE9",
            },
        },
        font: {
            color: "#FFFFFF",
            size: 15,
        },
    },
    edges: {
        width: 2,
        color: {
            color: "rgb(80, 80, 80)",
            highlight: "#848484",
        },
        smooth: {
            type: "continuous",
        },
    },
    physics: {
        enabled: true,
        solver: "forceAtlas2Based",
    },
    interaction: {
        dragView: false,
        dragNodes: true,
        zoomView: false,
    },
};

var container = document.querySelector(".main__no-hamiltonian-cycle");

var data = { nodes: nodes, edges: edges };

var network = new vis.Network(container, data, options);
