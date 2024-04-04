import {Tag} from "antd";
import {getStudentMark} from "../../../../../../helpers/getStudentMark.js";
import {getTagMarkColor} from "../../../../../../helpers/getTagMarkColor.js";

const ResultTag = ({result}) => {
    return (
        <Tag color={getTagMarkColor(result)}>{getStudentMark(result)}</Tag>
    )
}

export default ResultTag