import General from "./General";
import '../App.css';
import { PlusCircleOutlined } from '@ant-design/icons'
function Data(){
    return(
        <div className ="data" style={{marginLeft: '30px'}}>
            <h1>My work 🎯</h1>
            <div>
                <General title="Học lập trình web với React" due="Tomorrow"></General>
                <General title="Gửi email nộp bài tập về nhà" due="Saturday"></General>
                <General title="Học từ vựng tiếng anh mỗi ngày" due="Monday"></General>
                <General title="Viết tiểu luận môn Triết học" due="Today"></General>
            </div>
            <div style={{marginTop: '10px'}}>
                <PlusCircleOutlined style={{fontSize: '20px', color: 'pink'}} /> Add Task
            </div>
        </div>
    )
}
export default Data;
