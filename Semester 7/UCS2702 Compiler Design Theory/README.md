# UCS2702 - Compiler Design



## Unit I: Introduction to Compilers

- Language Processors  
- Phases of Compiler  
- Role of Lexical Analyzer  
- Input Buffering  
- Specification of Tokens  
- Recognition of Tokens  
- Conversion of Regular Expression to DFA  

### Lexical Analyzer Generator
- Structure of `lex` Program  
- Lookahead Operator and Conflict Resolution  

---

## Unit II: Syntax Analysis

- Role of Parser  
- Writing Grammars for Language Constructs  

### Types of Grammars
- Ambiguity  
- Deterministic and Recursive  

### Parsing Techniques
- **Top-down Parsers**:  
  - Recursive Descent Parser  
  - Predictive Parser  
- **Bottom-up Parsers**:  
  - SLR Parser  
  - CLR Parser  
  - LALR Parser  

### Error Handling
- Error Handling and Recovery in Syntax Analyzer  

### Syntax Analyzer Generator
- Structure of `yacc` Program  
- Creating `yacc` Lexical Analyzers with `lex`  

---

## Unit III: Intermediate Code Generation

### Syntax-Directed Definitions (SDD)
- Synthesized Attribute  
- Inherited Attribute  
- Dependency Graph  
- Evaluation Order of SDDs  

### Intermediate Languages
- Syntax Tree  
- Three Address Code  

### Type Checking and Flow Control
- SDD for Type Checking  
- Declarations  
- Evaluation of Expressions  
- Flow of Control Statements  
- Bottom-Up Evaluation of S-Attributed Definitions  

---

## Unit IV: Runtime Environments and Code Generation

- Source Language Issues  
- Storage Organization  
- Storage Allocation Strategies:  
  - Static  
  - Stack  
  - Heap  
- Implementation of Symbol Table  
- Issues in Code Generation  
- Design of a Simple Code Generator  

---

## Unit V: Code Optimization

- Principal Sources of Optimization  
- DAG (Directed Acyclic Graph)  
- Optimization of Basic Blocks  
- Global Data Flow Analysis  

### Introduction to LLVM
- LLVM Architecture  
- Core Libraries  
- Developing Plugins in LLVM  
