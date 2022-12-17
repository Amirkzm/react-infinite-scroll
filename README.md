# react-infinite-scroll

### on npm (https://www.npmjs.com/package/@amirkzm/react-infinite-scroll)

# About

react-infinite-scroll is a package that provides smooth scrooling on a long list of items when items need to be load from a server on the fly. It uses react-window library under the hood.

## Quick Start

<code>npm install @amirkzm/react-infinite-scroll</code><br>
Or by yarn:<br>
<code>yarn add @amirkzm/react-infinite-scroll</code>

```typescript
<InfiniteLoader
        renderFunction={listItem}
        addressGenerator={addressGenerator}
        dataExtractor={ (serverResult) => {//generate array if not} }
        style={{ backgroundColor: "red" }}
        width={400}
        height={300}
        itemSize={40}
        itemCount={200}
      />
```

## Table of Content

1. [The problem ](#problem)
2. [Solution ](#solution)
3. [Installation](#installation)
4. [Usage ](#usage)
5. [Props ](#props)
6. [License ](#license)

### Problem

Suppose that we have a long list of item to display and server uses pagination to handle that long list of items. We want to load and show all those items in a smooth way as user scroll the page.

### Solution

react-infinite-scroll helps us to fetch and show new data as user scroll down.<br>
![](https://github.com/amir253700/react-infinite-scroll/blob/main/screen.gif)

### Installation

Simply use:<br>

<code>npm install @amirkzm/react-infinite-scroll</code><br>
Or by yarn:<br>
<code>yarn add @amirkzm/react-infinite-scroll</code>

### Usage

here is a brief code sample for solving the mentioned problem above:

```typescript
import {InfiniteLoader} from "@amirkzm/react-infinite-scroll;

interface ItemProps {
  data: any[];
  index: any;
  style: any;
}

const addressGenerator = (page: number): string => {
  return someUrl;
};

const dataExtractor = (response: any) => {};

function someComponent() {
  return (
    <div>
      <InfiniteLoader
        renderFunction={listItem}
        addressGenerator={addressGenerator}
        dataExtractor={ (serverResult) => {//generate array if not} }
        style={{ backgroundColor: "red" }}
        width={400}
        height={300}
        itemSize={40}
        itemCount={500}
        loadingElement={<p>Loading...</p>}
      />
    </div>
  );
}

const listItem = ({ data, index, style }: ItemProps): JSX.Element => {
  return (
    <div style={style}>
      {data[index].id} {data[index].name}
    </div>
  );
};
```

### Props# react-infinite-scroll

### on npm (https://www.npmjs.com/package/@amirkzm/react-infinite-scroll)

# About

react-infinite-scroll is a package that provides smooth scrooling on a long list of items when items need to be load from a server on the fly. It uses react-window library under the hood.

## Quick Start

<code>npm install @amirkzm/react-infinite-scroll</code><br>
Or by yarn:<br>
<code>yarn add @amirkzm/react-infinite-scroll</code>

```typescript
<InfiniteLoader
        renderFunction={listItem}
        addressGenerator={addressGenerator}
        dataExtractor={ (serverResult) => {//generate array if not} }
        style={{ backgroundColor: "red" }}
        width={400}
        height={300}
        itemSize={40}
        itemCount={200}
      />
```

## Table of Content

1. [The problem ](#problem)
2. [Solution ](#solution)
3. [Installation](#installation)
4. [Usage ](#usage)
5. [Props ](#props)
6. [License ](#license)

### Problem

Suppose that we have a long list of item to display and server uses pagination to handle that long list of items. We want to load and show all those items in a smooth way as user scroll the page.

### Solution

react-infinite-scroll helps us to fetch and show new data as user scroll down.<br>
![](https://github.com/amir253700/react-infinite-scroll/blob/main/screen.gif)

### Installation

Simply use:<br>

<code>npm install @amirkzm/react-infinite-scroll</code><br>
Or by yarn:<br>
<code>yarn add @amirkzm/react-infinite-scroll</code>

### Usage

here is a brief code sample for solving the mentioned problem above:

```typescript
import {InfiniteLoader} from "@amirkzm/react-infinite-scroll;

interface ItemProps {
  data: any[];
  index: any;
  style: any;
}

const addressGenerator = (page: number): string => {
  return someUrl;
};

const dataExtractor = (response: any) => {};

function someComponent() {
  return (
    <div>
      <InfiniteLoader
        renderFunction={listItem}
        addressGenerator={addressGenerator}
        dataExtractor={ (serverResult) => {//generate array if not} }
        style={{ backgroundColor: "red" }}
        width={400}
        height={300}
        itemSize={40}
        itemCount={500}
        loadingElement={<p>Loading...</p>}
      />
    </div>
  );
}

const listItem = ({ data, index, style }: ItemProps): JSX.Element => {
  return (
    <div style={style}>
      {data[index].id} {data[index].name}
    </div>
  );
};
```

### Props

| Props            | Types                                              | Description                                                                                                                                                                          |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- | --- | --- |
| renderFunction   | (data:any, index:number, style:any) => JSX.Element | React component responsible for rendering the individual item specified by an index prop. This component also receives style props(used for positioning) and a data prop.            |
| addressGenerator | (pageNumber:number) => string                      | A function that recieves page number and generate the address of that page number to fetch data from.                                                                                |
| dataExtractor    | (response:any) => any[]                            | An optional function that convert the desired result from server to an array. if server response is an array by itself leave we don't need to pass this function.                    |
| loadingElement   | ReactNode                                          | An Optional ReactNode element if we want to show user as loading                                                                                                                     |
| errorElement     | ReactNode                                          | An Optional ReactNode element if we want to show user as error                                                                                                                       |
| itemCount        | number or (response:any) => number                 | Total number of items we want to render. It can be a number or a function that recieve the response of the server and return the total number of elements in case server returns it. |
| width            | number                                             | Specify the width of the list. It can be a number or string                                                                                                                          |
| itemSize         | number                                             | Size of a item in the direction being windowed. For vertical lists, this is the row height. For horizontal lists, this is the column width.                                          |     |     |     |

You can also pass all the props of the react-window package props on their [documents](https://react-window.vercel.app/#/api/FixedSizeList).<br>

- Exception:
  - onScroll prop of react-window is not supported.

### license

MIT

You can also pass all the props of the react-window package props on their [documents](https://react-window.vercel.app/#/api/FixedSizeList).<br>

- Exception:
  - onScroll prop of react-window is not supported.

### license

MIT
