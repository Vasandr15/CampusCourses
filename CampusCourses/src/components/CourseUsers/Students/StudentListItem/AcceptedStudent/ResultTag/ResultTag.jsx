import {Tag} from "antd";
import {studentMarks} from "../../../../../../consts/StudentMarks.js";
import {getStudentMark} from "../../../../../../helpers/getStudentMark.js";
import {getTagMarkColor} from "../../../../../../helpers/getTagMarkColor.js";

const ResultTag = ({result}) => {
    return (
        <Tag color={getTagMarkColor(result)}>{getStudentMark(result)}</Tag>
    )
}

export default ResultTag