import './style.css';

export function About () {
    return (
        <div id='About'>
            <h1 className='text-center text-light'>About</h1>
            <div className='row justify-content-center my-5'>
                <div className="card col-lg-3 col-md-12 col-sm-12 rounded-4 p-4 border-0">
                    <div className="card-body">
                        <h5 className="card-title text-center text-light">Languages I Know</h5>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item text-center'>C++</li>
                            <li className='list-group-item text-center'>C</li>
                            <li className='list-group-item text-center'>Java</li>
                            <li className='list-group-item text-center'>Python</li>
                            <li className='list-group-item text-center'>HTML</li>
                            <li className='list-group-item text-center'>JS</li>
                            <li className='list-group-item text-center'>CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-12 col-sm-12 mx-5 rounded-4 p-4 border-0">
                    <div className="card-body">
                        <h5 className="card-title text-center text-light">Education</h5>
                        <p className="card-text text-start">I am a student at <span className='highlight'>Vellore Institute of Technology, Vellore</span>. I am doing a <span className='highlight'>B Tech</span> in <span className='highlight'>Computer Science and Engineering.</span></p>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-12 col-sm-12 rounded-4 p-4 border-0">
                    <div className="card-body">
                        <h5 className="card-title text-center text-light">My Interests</h5>
                        <p className="card-text text-start">I am interested in taking opportunities to broaden my horizons in the field of Computer Science. I am also interested in topics like machine learning and artificial intelligence.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}