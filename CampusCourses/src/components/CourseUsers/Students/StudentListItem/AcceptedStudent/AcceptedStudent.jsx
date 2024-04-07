import styles from "../stidentListItem.module.css";
import { Button, Space } from "antd";
import ResultTag from "./ResultTag/ResultTag.jsx";
import EditStudentMarkModal from "../../../../Modals/EditStudentMarkModal/EditStudentMarkModal.jsx";
import { useState } from "react";
import {MarkTypesRu} from "../../../../../consts/MarkTypesRu.js";
import {MarkTypes} from "../../../../../consts/MarkTypes.js";
import {useSelector} from "react-redux";
import {currentCourseRoles} from "../../../../../consts/currentCourseRoles.js";

const AcceptedStudent = ({ id, name, finalResult, midtermResult }) => {
    const [mark, setMark] = useState();
    const [isModalOpen, setModalOpen] = useState(false);
    const [attestation, setAttestation] = useState();
    const currentCourseRole = useSelector(state => state.currentCourseRole.currentCourseRole)
    const handleClick = (result, attestationValue) => {
        if (currentCourseRole !== currentCourseRoles.student()){
            setMark(result);
            setAttestation(attestationValue);
            setModalOpen(true);
        }
    };

    return (
        <>
            <Space className={styles.listItem}>
                {
                    (midtermResult  ) && (
                        <Space direction="horizontal" wrap>
                            <Button onClick={() => handleClick(midtermResult, MarkTypes.Mid())} type="link">
                                {MarkTypesRu.Mid()}
                            </Button>-
                            <ResultTag result={midtermResult} />
                        </Space>
                    )
                }
                {
                    finalResult && (
                        <Space direction="horizontal" wrap>
                            <Button onClick={() => handleClick(finalResult, MarkTypes.Final())} type="link">
                                {MarkTypesRu.Final()}
                            </Button>-
                            <ResultTag result={finalResult} />
                        </Space>
                    )
                }
            </Space>
            <EditStudentMarkModal id={id} name={name} currentMark={mark} markType={attestation}
                setModalOpen={setModalOpen} isModalOpen={isModalOpen}/>
        </>
    );
};

export default AcceptedStudent;
