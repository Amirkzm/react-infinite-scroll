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

Suppose that we have a long list of item to display and server uses pagination to handle that long list of items. We want to load and show all those items in a smooth way as user scroll the page.

### Solution

react-infinite-scroll helps us to fetch and show new data as user scroll down.<br>
![](https://github.com/Your_Repository_Name/Your_GIF_Name.gif)

### Installation

Simply use:<br>

<code>npm install @amirkzm/react-infinite-scroll</code>
Or by yarn:<br>
<code>yarn add @amirkzm/react-infinite-scroll</code>

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
