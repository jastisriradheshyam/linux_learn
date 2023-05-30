# Git Internals

## Sample `.git` directory

```
.git
├── branches
├── COMMIT_EDITMSG
├── config
├── description
├── FETCH_HEAD
├── HEAD
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── prepare-commit-msg.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── push-to-checkout.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── logs
│   ├── HEAD
│   └── refs
│       ├── heads
│       │   ├── main
│       │   └── master
│       └── remotes
│           ├── gitlab_mirror
│           │   └── main
│           └── origin
│               ├── HEAD
│               └── main
├── objects
│   ├── 00
│   │   └── 0cb9de1c22a6404c6b0ad9591c84ad8a50c6e7
│   ├── 18
│   │   └── c03cdf5dab31f4f0f0c411a8e3ef2c0f99113d
│   ├── ff
│   │   └── f0cbd26cda1d3a2ee125b594abc8b1f0be5555
│   ├── info
│   └── pack
│       ├── pack-a5b61a0941a5502f2692141c34835f5230b28e52.idx
│       └── pack-a5b61a0941a5502f2692141c34835f5230b28e52.pack
├── ORIG_HEAD
├── packed-refs
└── refs
    ├── heads
    │   ├── main
    │   └── master
    ├── remotes
    │   ├── gitlab_mirror
    │   │   └── main
    │   └── origin
    │       ├── HEAD
    │       └── main
    └── tags
```

## Source Maintenance areas

- Working area
- Staging area (index)
- Repository
- Stash

## Objects

Objects are maintained with filename with hex values with first two hex values as directory, and type of the object file can only be known by inspecting them by either read it directly or using the command `git show OBJECT_FILE_NAME`

- BLOB (Binary Large Object)
- Tree
- Commit
- Annotated tag