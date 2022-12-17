import { useConditionalEffect } from "@amir253700/use-conditional-effect";
import React, { ComponentType, useRef, useState } from "react";
import {
  FixedSizeList as List,
  FixedSizeListProps,
  ListChildComponentProps,
  ListOnScrollProps,
} from "react-window";

import useLazyFetch from "../hooks/useLazyFetch";

interface InfiniteScrollProps
  extends Omit<FixedSizeListProps, "itemCount" | "children" | "onScroll"> {
  renderFunction?: ({ data, index, style }: ItemProps) => JSX.Element;
  dataExtractor?: (response: any) => any[];
  addressGenerator: (pageNumber: number) => string;
  loadingElement?: React.ReactNode;
  errorElement?: React.ReactNode;
  itemCount: number | ((response: any) => number);
}

interface ItemProps {
  data: any[];
  index: any;
  style: any;
}

const InfiniteScroll = ({
  renderFunction,
  dataExtractor = (response) => {
    return response;
  },
  addressGenerator,
  loadingElement = <p>Loading...</p>,
  errorElement = <p>Something went wrong!</p>,
  itemCount,
  ...rest
}: InfiniteScrollProps): JSX.Element => {
  const [data, setData] = useState<any[]>([]);
  const pageNumber = useRef<number>(1);
  const isLocked = useRef<boolean>(false);
  const lastScrollOffset = useRef<number>(0);
  const listRef = useRef<any>(null);
  const totalItemsToDisplay =
    useRef<InfiniteScrollProps["itemCount"]>(itemCount);

  const [fetchData, { isLoading, result, isError }] = useLazyFetch(
    addressGenerator(1)
  );

  useConditionalEffect(() => {
    if (result) {
      console.log("inside uesConditional");
      setData(dataExtractor(result));
      if (typeof itemCount !== "number") {
        totalItemsToDisplay.current = itemCount(result);
      } else {
        totalItemsToDisplay.current = itemCount;
      }
      return { finished: true, cleanup: () => {} };
    }
    return false;
  }, [result, itemCount]);

  const loadMoreData = async () => {
    if (!isLoading && !isLocked.current) {
      isLocked.current = true;
      if (data.length <= itemCount) {
        pageNumber.current++;
        console.log(pageNumber.current);
        console.log(addressGenerator(pageNumber.current));
        const newData = await fetchData(addressGenerator(pageNumber.current));
        if (typeof itemCount !== "number") {
          totalItemsToDisplay.current = itemCount(newData);
        }
        const newDataArray = dataExtractor(newData);
        console.log(newData);
        setData((prev) => [...prev, ...newDataArray]);
      }
      isLocked.current = false;
    }
  };

  const scrollHandler = ({ scrollOffset }: ListOnScrollProps): any => {
    const direction = rest.direction;
    const listElement = listRef.current;
    if (listElement) {
      const listElementHeight =
        direction === "horizontal"
          ? listElement.scrollWidth
          : listElement.scrollHeight;
      const total =
        scrollOffset +
        (direction === "horizontal"
          ? listElement.clientWidth
          : listElement.clientHeight);
      if (total > listElementHeight - rest.itemSize - 10) {
        lastScrollOffset.current = scrollOffset;
        loadMoreData();
      }
    }
  };
  console.log(data);

  return (
    <>
      <List
        itemCount={data.length}
        itemData={data}
        outerRef={listRef}
        onScroll={scrollHandler}
        initialScrollOffset={lastScrollOffset.current}
        {...rest}
      >
        {renderFunction as ComponentType<ListChildComponentProps<any>>}
      </List>
      {isLoading && loadingElement}
      {isError && loadingElement}
    </>
  );
};

export default InfiniteScroll;
