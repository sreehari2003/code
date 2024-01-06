class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1); // Uncomment this line if the graph is undirected
  }

  display() {
    for (const vertex in this.vertices) {
      console.log(`${vertex} -> ${this.vertices[vertex].join(", ")}`);
    }
  }
  bfs(start) {
    console.log("STARTING BFS");
    const q = [];
    const res = [];
    const visited = new Map();

    visited.set(start, true);

    q.push(start);

    while (q.length > 0) {
      const t = q.shift();
      res.push(t);
      this.vertices[t].forEach((el) => {
        const node = visited.get(el);
        if (!node) {
          visited.set(el, true);
          q.push(el);
        }
      });
    }

    console.log(res);
    console.log("BFS ENDED");
  }

  dfs(node, list = [], visited = {}) {
    visited[node] = true;
    list.push(node);
    this.vertices[node].forEach((el) => {
      if (!visited[el]) {
        this.dfs(el, list, visited);
      }
    });
  }
}

// Example usage:
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");

// graph.display();
graph.bfs("A");
graph.dfs("A");
