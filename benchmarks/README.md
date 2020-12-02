<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [@beamwind/benchmarks](#beamwindbenchmarks)
  - [Results](#results)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @beamwind/benchmarks

> beanchmarks of oceanwind vs beamwind

```sh
node run.mjs
```

## Results

```
# Strings
  oceanwind x 140,151 ops/sec ±1.40% (89 runs sampled)
  beamwind x 1,028,192 ops/sec ±1.46% (92 runs sampled)

# Arrays
  oceanwind x 144,539 ops/sec ±1.59% (84 runs sampled)
  beamwind x 1,376,261 ops/sec ±2.25% (83 runs sampled)

# Objects
  oceanwind x 103,511 ops/sec ±3.49% (83 runs sampled)
  beamwind x 873,491 ops/sec ±1.40% (86 runs sampled)

# Grouping
  oceanwind x 27,725 ops/sec ±6.31% (85 runs sampled)
  beamwind x 230,017 ops/sec ±1.83% (87 runs sampled)
```

Using https://github.com/lukejacksonn/oceanwind/pull/36

```
# Setup and first insert
  oceanwind x 17,692 ops/sec ±2.80% (82 runs sampled)
  beamwind x 59,437 ops/sec ±1.64% (90 runs sampled)

# Strings
  oceanwind x 15,379 ops/sec ±0.80% (90 runs sampled)
  beamwind x 95,811 ops/sec ±1.29% (89 runs sampled)

# Arrays
  oceanwind x 131,698 ops/sec ±1.24% (89 runs sampled)
  beamwind x 947,284 ops/sec ±0.93% (90 runs sampled)

# Objects
  oceanwind x 102,932 ops/sec ±1.44% (92 runs sampled)
  beamwind x 612,728 ops/sec ±0.52% (95 runs sampled)

# Grouping
  oceanwind x 31,644 ops/sec ±1.22% (92 runs sampled)
  beamwind x 137,831 ops/sec ±1.27% (90 runs sampled)
```
