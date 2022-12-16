# react-infinite-scroll

### on npm (https://www.npmjs.com/package/@amir253700/use-conditional-effect)

# About

react-infinite-scroll is a package that provides smooth scrooling on a long list of items when items need to be load from a server on the fly. It uses react-window library under the hood.

# table of content

1. [The problem ](#problem)
2. [Solution ](#solution)
3. [Installation](#installation)
4. [Usage ](#usage)
5. [License ](#license)

### Problem

Suppose that we have a long list of item to display and server uses pagination to handle that long list of items. We want to load and show all those items in a smooth way

### Solution

you can simply use this hook to solve this problem. the only thnig that should be noticed is the callback function that must return an object if a condition has met in order to stop execution of useEffect next time otherwise it has to return false.Also it has to be mentioned that dependency argument doesn't need to be an array. it can be an object,a number or anything else.

### Installation

This module is distributed via npm which is bundled with node and should be installed as one of your project's dependencies:<br>
<code>npm install --save @amir253700/use-conditional-effect</code>

### Usage

here is a brief code sample for solving the mentioned problem above:

```
useConditionalEffect(()=>{
    if(firstNumber>secondNumber){
      return {finished:true,cleanup:()=>console.log("running clean up function!")}
    }else{
      //in this case the hook acts like a normal useEffect and runs again when dependencies are changed.
      return false
    }
  },[firstNumber,secondNumber])
```

### license

MIT
