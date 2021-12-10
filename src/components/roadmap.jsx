export const Roadmap = (props) => {
  return (
    <div id='why' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Roadmap</h2>
          {props.data ? props.data.items.map((item) => (
            <div>
            <div className="h4"> {item.header ? item.header : null} </div>
            <p> {item.text ? item.text : item} </p>
            </div>
          )) : "loading"
          }
        </div>
      </div>
    </div>
  )
}
