import {Button, List, Space, Tag, Typography} from "antd";
import styles from "../Teachers/teachers.module.css";

const {Text} = Typography
const Teachers = ({teachers}) => {
    return (
        <>
            <Space>
                <Button type="primary">Добавить преподавателя</Button>
            </Space>
            <div className={styles.container}>
                <List dataSource={teachers}
                      renderItem={(teacher) => (
                          <List.Item>
                              <Space direction={'vertical'} size={"small"}>
                                  <Space direction={'horizontal'} align={'baseline'}>
                                      <Text strong>{teacher.name}</Text> {teacher.isMain ?
                                      <Tag color={'rgba(46,157,56,0.98)'}>основной</Tag> : null}
                                  </Space>
                                  <Text type="secondary">{teacher.email}</Text>
                              </Space>
                          </List.Item>
                      )}/>
            </div>
        </>
    )
}

export default Teachers