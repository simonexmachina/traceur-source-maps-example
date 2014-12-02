## Instructions

```
# start node-inspector
node-inspector
# start the example
node --debug-brk index
# open node-inspector
open 'http://localhost:8080/debug?port=5858'
# then press the resume button (or F8)
```

You should see an error message in the node-inspector console when it stops on
the `debugger` statement in module.js
