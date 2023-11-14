

const DateNav = ({createdAt}:any) => {


  return (
<>
    <div>
        <p>Date:{createdAt.toLocaleDateString()}</p>
    </div>
    
    </>
  )
}

export default DateNav