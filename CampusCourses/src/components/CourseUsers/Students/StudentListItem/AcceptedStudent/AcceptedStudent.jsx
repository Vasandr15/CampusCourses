import styles from "../stidentListItem.module.css";
import {Button, Space, Tag} from "antd";
import ResultTag from "./ResultTag/ResultTag.jsx";

const AcceptedStudent = ({id, finalResult, midtermResult}) => {
    return (
        <Space className={styles.listItem}>
            <Space direction="horizontal" wrap>
                <Button type={'link'}>Промежуточная аттестация</Button>-
                <ResultTag result={midtermResult}/>
            </Space>
            <Space direction="horizontal" wrap>
                <Button type={'link'}>Финальная аттестация</Button>-
                <ResultTag result={finalResult}/>
            </Space>
        </Space>
    )
}

export default AcceptedStudent