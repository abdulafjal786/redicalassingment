import NavigationBar from "@/component/Doctores/NavigationBar";
import ScheduleSession from "@/component/schedulesession/ScheduleSession";

const BookSession = ()=>{
    return (
    <div >
        <div>
            <NavigationBar title="Book Session"/>
            </div>
        <div>

        <ScheduleSession/>
        </div>
    </div>
    )

}
export default BookSession;