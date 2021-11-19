export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          <p>
            Donkey Hole's team is surely an HR lawsuit waiting to happen. Fortunately we don't have an HR department.
          </p>
        </div>
        <div id='row' className='img-panel'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <p>{d.bio}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
