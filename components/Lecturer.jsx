import React from 'react'
import './Student.css';

const Lecturer = () => {
  return (
    <>
    <div className='border mt-5'></div>
    <div className="container-fluid text-center mt-5">
        <div className="row">
            <div className="col-12 col-md-6 my-5">
                <h4 className="fw-bold mx-4">For Lecturer</h4>
                <p className="mx-4  my-3 student">Easily submit your assignment, track <br /> deadlines, and receive Feedback-all in <br /> one place. Stay organized and never miss <br /> a deadline again. Our platform is designed <br /> to make learning smoother and stress-free. <br /> Sign up today and stay ahead</p>
                <button type="button" className='btn btn-primary border-rounder-0'>Sign up</button>
            </div>
            <div className="col-12 col-md-6">
                <img src="https://s3-alpha-sig.figma.com/img/8be8/c5b5/7a59c73a556771d84e0b0e8552c94178?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X8rukgW8jsNw3nFervMJbpdMnE8LZ0B3gICS2XkSD82q9JABJxiqk7dOLCSoBJ3d~ZIJCll573ZuPQD-WWzFEzw240O4xrSG05KPXzTqPa-~GGDr-xMma0PZD5P98x1mN6vuRPR5X7TJc-pfQvFI2k4OcDjPrOhElrkBwXi-tOENTu7PHvXHYKilQLjfg-pk9zNcuMmFMv7Nh~JwTMzXToCjSubJ1qM6ck7YcprAHTnFOtxDUihPIbf~vsNLiJ5xden8bTkiou3cW83RtmDIdzgBBo3G6pezYeazNXQ2B1m3oGGasCm9Sf4p~7rzxyUjIcaRimK0wULMLYXxrZBseQ__" alt="" className='pix' />
            </div>
        </div>
      </div>
    </>
  )
}

export default Lecturer