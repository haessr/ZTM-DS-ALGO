// Edge List
//    2 - 0
//  / \
// 1 - 3
const graphEdgeList = [[0, 2], [2, 3], [2, 1], [1,3]];

// Adjacent List
// index => node
// value => nodes neighbors
// use arrays, objects and linked lists
const graphAdjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
const graphAdjacentMatrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
]

const graphAdjacentMatrixObject = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
}