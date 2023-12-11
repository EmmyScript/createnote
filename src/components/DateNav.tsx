
import  Moment  from 'moment';


const DateNav = ({createdAt}:any) => {
  



  return (
<>
    <div>
        <p className='time'>Date:{Moment(createdAt).format("DD:MM:YYYY hh:mm")}</p>
    </div>
    
    </>
  )
}

export default DateNav