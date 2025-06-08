function quickestPath(portals) {
  const END_BLOCK = 200;
  let queue = [{ pos: 1, steps: 0 }];
  let visited = [];
  visited[1] = true;

  while (queue.length > 0) {
    const current = queue.shift();
    const position = current.pos;
    const stepCount = current.steps;

    if (position === END_BLOCK) return stepCount;

    for (let move = 1; move <= 11; move++) {
      let nextPos = position + move;

      if (nextPos > END_BLOCK) continue;

      for (let i = 0; i < portals.length; i++) {
        if (portals[i].location === nextPos) {
          nextPos = portals[i].destination;
          break;
        }
      }

      if (!visited[nextPos]) {
        visited[nextPos] = true;
        queue.push({ pos: nextPos, steps: stepCount + 1 });
      }
    }
  }
  return -1;
}
