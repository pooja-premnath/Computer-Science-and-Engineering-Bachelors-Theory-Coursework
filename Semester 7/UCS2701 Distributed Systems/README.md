# UCS2701 - Distributed Systems



## Unit I: Introduction

- Definition  
- Relation to computer system components  
- Motivation  
- Relation to parallel multiprocessor/multicomputer systems  
- Message-passing systems vs. shared memory systems  
- Primitives for distributed communication  
- Synchronous vs. asynchronous executions  
- Design issues and challenges  

### A Model of Distributed Computations
- A distributed program  
- A model of distributed executions  
- Models of communication networks  
- Global state of a distributed system  
- Cuts of a distributed computation  
- Past and future cones of an event  
- Models of process communications  

---

## Unit II: Logical Time and Global State

### Logical Time
- Physical clock synchronization: NTP  
- Framework for a system of logical clocks  
- Scalar time  
- Vector time  

### Message Ordering and Group Communication
- Message ordering paradigms  
- Asynchronous execution with synchronous communication  
- Synchronous program order on an asynchronous system  
- Group communication  
- Causal order (CO)  
- Total order  

### Global State and Snapshot Recording Algorithms
- System model and definitions  
- Snapshot algorithms for FIFO channels  

---

## Unit III: Distributed Mutex and Deadlock

### Distributed Mutual Exclusion Algorithms
- Preliminaries  
- Lamport’s algorithm  
- Ricart–Agrawala algorithm  
- Quorum-based mutual exclusion algorithms  
- Maekawa’s algorithm  
- Token-based algorithms  
- Suzuki–Kasami’s broadcast algorithm  

### Deadlock Detection in Distributed Systems
- System model and preliminaries  
- Models of deadlocks  
- Knapp’s classification of distributed deadlock detection algorithms  
- Mitchell and Merritt’s algorithm (single resource model)  
- Chandy-Misra-Haas algorithm (AND model)  
- Chandy-Misra-Haas algorithm (OR model)  

---

## Unit IV: Consensus and Recovery

### Consensus and Agreement Algorithms
- Problem definition  
- Overview of results  
- Agreement in failure-free systems (synchronous/asynchronous)  
- Agreement in synchronous systems with failures  

### Checkpointing and Rollback Recovery
- Background and definitions  
- Issues in failure recovery  
- Checkpoint-based recovery  
- Log-based rollback recovery  
- Koo-Toueg coordinated checkpointing algorithm  
- Juang-Venkatesan algorithm (asynchronous checkpointing and recovery)  

---

## Unit V: Peer-to-Peer and Distributed Shared Memory

### Peer-to-Peer Computing and Overlay Graphs
- Data indexing and overlays  
- Tapestry  

### Distributed Shared Memory
- Abstraction and advantages  
- Memory consistency models  
- Lamport’s Bakery Algorithm  
