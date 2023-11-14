
import  Moment  from 'moment';


const DateNav = ({createdAt}:any) => {
  



  return (
<>
    <div>
        <p>Date:{Moment(createdAt).format("YYYY:MM:DD hh:ss")}</p>
    </div>
    
    </>
  )
}

export default DateNav