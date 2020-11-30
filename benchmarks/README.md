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
  oceanwind x 15,868 ops/sec ±2.55% (79 runs sampled)
  beamwind x 48,841 ops/sec ±19.29% (77 runs sampled)

# Strings
  oceanwind x 13,186 ops/sec ±9.06% (78 runs sampled)
  beamwind x 80,186 ops/sec ±11.62% (69 runs sampled)

# Arrays
  oceanwind x 96,961 ops/sec ±8.58% (72 runs sampled)
  beamwind x 828,937 ops/sec ±4.95% (79 runs sampled)

# Objects
  oceanwind x 80,148 ops/sec ±5.16% (80 runs sampled)
  beamwind x 591,048 ops/sec ±4.06% (83 runs sampled)

# Grouping
  oceanwind x 14,730 ops/sec ±20.15% (47 runs sampled)
  beamwind x 175,654 ops/sec ±4.66% (84 runs sampled)
```
