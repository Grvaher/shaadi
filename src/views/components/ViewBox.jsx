import React from "react";
import InfiniteScrollContainer from "../components/InfiniteScrollContainer";
import { ProfileData } from "../../mockData/ProfileData";

const ViewBox = (props) => {
  const [dataList, setDataList] = React.useState([]);
  const [hasMore, setHasMore] = React.useState();

  React.useEffect(() => {
    ProfileData(0).then((res) => {
      setDataList(res.responseEntity);
      setHasMore(res.totalCount > res.responseEntity.length);
    });
  }, []);

  const renderItem = (item) => {
    return (
      <div className="view-box">
        <div className="card">
          <img src={item.LargePicture} alt={item.Name} />
          <div className="card-container">
            <h4>
              <b>{item.Name}</b>
            </h4>
            <h4>
              <b>Age: {item.Age}</b>
            </h4>
          </div>
        </div>
      </div>
    );
  };

  const handleOnLoadMore = (pageNumber) => {
    ProfileData(pageNumber).then((res) => {
      setTimeout(() => {
        setDataList([...dataList, ...res.responseEntity]);
        setHasMore(res.totalCount > dataList.length);
      }, 500);
    });
  };

  return (
    <div>
      <InfiniteScrollContainer
        setHasMore={setHasMore}
        dataList={dataList}
        renderItem={renderItem}
        getData={handleOnLoadMore}
        hasMore={hasMore}
      >
        {" "}
      </InfiniteScrollContainer>
    </div>
  );
};

export default ViewBox;
