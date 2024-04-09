import { Skeleton, List } from "antd";

const LoadingList = ({length, rows}) => {
    const data = Array.from({ length }).map((_, index) => ({
        id: index,
    }));

    return (
        <List
            dataSource={data}
            renderItem={(item) => (
                <List.Item style={{justifyContent: 'center'}}>
                    <Skeleton active paragraph={{rows: rows}}/>
                </List.Item>
            )}
        />
    );
};

export default LoadingList;
