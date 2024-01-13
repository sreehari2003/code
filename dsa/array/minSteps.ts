function minSteps(s: string, t: string): number {
  if (s.length !== t.length) {
    return -1;
  }

  const m = new Map();

  const tMap = new Map();

  for (let i of s) {
    const val = m.get(i);
    if (val) {
      m.set(i, val + 1);
    } else {
      m.set(i, 1);
    }
  }

  for (let i of t) {
    const val = tMap.get(i);
    if (val) {
      tMap.set(i, val + 1);
    } else {
      tMap.set(i, 1);
    }
  }

  let out = 0;

  for (const [key, value] of tMap.entries()) {
    const inS = m.get(key);
    if (!m.get(key)) {
      out += value;
    } else if (value > inS) {
      out += value - inS;
    } else if (inS > value) {
    }
  }
  console.log(out);
  return out;
}

minSteps("gctcxyuluxjuxnsvmomavutrrfb", "qijrjrhqqjxjtprybrzpyfyqtzf");
