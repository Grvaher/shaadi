import React from "react";
import Loader from "../components/Loader";

const InfiniteScrollContainer = (props) => {
  const [pageNo, setPageNo] = React.useState(0);
  const [loadMore, setLoadMore] = React.useState(false);

  React.useEffect(() => {
    setLoadMore(false);
  }, [props.dataList]);

  React.useEffect(() => {
    if (pageNo > 0) {
      setLoadMore(true);
      props.getData(pageNo, props.dataList);
    }
  }, [pageNo]);

  const infiniteScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    const touchedBottom = scrollTop + clientHeight === scrollHeight;
    if (props.hasMore && touchedBottom) {
      setPageNo((prevState) => prevState + 1);
      props.setHasMore(false);
    }
  };

  return (
    <div onWheel={(e) => infiniteScroll(e)}>
      <div>{props.dataList.map((item) => props.renderItem(item))}</div>

      <div className="infinite-scroll">
        {loadMore && <Loader />}
        {props.dataList.length ? (
          props.hasMore ? (
            <span onClick={() => setPageNo((prevState) => prevState + 1)}>
              {"Load more Data.."}
            </span>
          ) : loadMore ? (
            <span>{"Fetching More Data!"}</span>
          ) : (
            <span>{"No more data!"}</span>
          )
        ) : null}
      </div>
    </div>
  );
};

export default InfiniteScrollContainer;
