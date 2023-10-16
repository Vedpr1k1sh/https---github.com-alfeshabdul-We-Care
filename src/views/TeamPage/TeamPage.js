import React from "react";

import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import css from './TeamPage.css';

import img1 from './../../components/images/pooja.jpg'
import img2 from './../../components/images/ved.jpg'
import img3 from './../../components/images/alf.jpg'
import img4 from './../../components/images/git.jpg'
import img5 from './../../components/images/insta.jpg'
import img6 from './../../components/images/link.jpg'
import img7 from './../../components/images/rtc.jpg'
import img8 from './../../components/images/shiv.jpg'
import img9 from './../../components/images/vru.jpg'




function Team () {
        

        let name_1='Alfesh ';

        let name_3='Vedprakash ';
        let name_4='Shivkanya ';
        let name_5='Vrushali';





        
let message='The contributors behind the Project.';
    return( 


<div>
        <Navbar/>


        <div section className="section-white">
      <div className="container">
        <div className="row">
<div className="col-md-12 text-center">
  <h2 className="section-title">
    <div class="camp">The Team Behind Campaign.</div>
  </h2>
  <p className="secontion-subtitle">{message}
  </p>
</div>
<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img3} className="team-img "alt="pic"></img>
        <h3> {name_1}</h3>
        <div className="team-info">
        
        <li>No.354356</li>
        E-mail:@gmail.com
     <ul className="team-icon">

        <a href="https://github.com/alfeshabdul" className="twitter">
        <img src={img4}className="symbol"></img>
        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=AwrPrpqZEyhld7QPlTC7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697154073/RO=10/RU=https%3a%2f%2fwww.instagram.com%2f%3fhl%3den/RK=2/RS=nDiQxbYcsivfErI5xB3dreutVX4-" className="pinterest">
 <img src={img5}className="symbol"></img>
        </a>&nbsp;
        <a href="https://www.linkedin.com/in/alfesh-abdul-659951222/" className="facebook">
<img src={img6}className="symbol"></img>
        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=Awrx.1LdEihlXyAQQ7i7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697153886/RO=10/RU=https%3a%2f%2fwww.roadtocode.org%2f/RK=2/RS=YBGqu6wRyL9Uyb7Hc9YLQSVMYpc-" className="dribbble">
<img src={img7}className="symbol"></img>
        </a>&nbsp;
     </ul>
    </div>
</div>
</div>




<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img2} className="team-img "alt="pic"></img>
        <h3> {name_3}</h3>
        
        <div className="team-info">
        
        <li>No.354356</li>
        E-mail:2@gmail.com
     <ul className="team-icon">

        <a href="https://r.search.yahoo.com/_ylt=AwrKCXt.EihlYjEQtae7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697153791/RO=10/RU=https%3a%2f%2ftwitter.com%2f%3flang%3den-in/RK=2/RS=YTOSqSaheLX_IaM05nXHyhZu6DQ-" className="twitter">
        <img src={img4} className="symbol"></img>

        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=AwrPrpqZEyhld7QPlTC7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697154073/RO=10/RU=https%3a%2f%2fwww.instagram.com%2f%3fhl%3den/RK=2/RS=nDiQxbYcsivfErI5xB3dreutVX4-" className="pinterest">
 <img src={img5}className="symbol"></img>
        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=AwrKAu6sEShlWQ0PLl27HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697153580/RO=10/RU=https%3a%2f%2fwww.facebook.com%2f/RK=2/RS=SDBmmDXH.xHrSG6t45zo617GcM8-" className="facebook">
<img src={img6}className="symbol"></img>
        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=Awrx.1LdEihlXyAQQ7i7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697153886/RO=10/RU=https%3a%2f%2fwww.roadtocode.org%2f/RK=2/RS=YBGqu6wRyL9Uyb7Hc9YLQSVMYpc-" className="dribbble">
<img src={img7}className="symbol"></img>
        </a>&nbsp;
     </ul>
    </div>
</div>
</div>
<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img8}className="team-img "alt="pic"></img>
        <h3>{name_4}</h3>
        <div className="team-info">
        

        <li>No.354356</li>
        E-mail:22@gmail.com
        

     <ul className="team-icon">

        <a href="https://github.com/shivkanya11" className="twitter">
        <img src={img4} className="symbol"></img>
        
        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=AwrPrpqZEyhld7QPlTC7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697154073/RO=10/RU=https%3a%2f%2fwww.instagram.com%2f%3fhl%3den/RK=2/RS=nDiQxbYcsivfErI5xB3dreutVX4-" className="pinterest">
 <img src={img5}className="symbol"></img>
        </a>&nbsp;
        <a href="https://www.linkedin.com/in/shivkanya-mhetre-0b5468190" className="facebook">
<img src={img6}className="symbol"></img>
        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=Awrx.1LdEihlXyAQQ7i7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697153886/RO=10/RU=https%3a%2f%2fwww.roadtocode.org%2f/RK=2/RS=YBGqu6wRyL9Uyb7Hc9YLQSVMYpc-" className="dribbble">
<img src={img7}className="symbol"></img>
        </a>&nbsp;
     </ul>
    </div>
</div>
</div>
<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img9} className="team-img "alt="pic"></img>
        <h3>{name_5}</h3>
        <div className="team-info">

        <li>No.341154</li>
        <li>E.mail:@gmail.com</li>
     <ul className="team-icon">

        <a href="https://r.search.yahoo.com/_ylt=AwrKCXt.EihlYjEQtae7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697153791/RO=10/RU=https%3a%2f%2ftwitter.com%2f%3flang%3den-in/RK=2/RS=YTOSqSaheLX_IaM05nXHyhZu6DQ-" className="twitter">
        <img src={img4} className="symbol"></img>
        
        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=AwrPrpqZEyhld7QPlTC7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697154073/RO=10/RU=https%3a%2f%2fwww.instagram.com%2f%3fhl%3den/RK=2/RS=nDiQxbYcsivfErI5xB3dreutVX4-" className="pinterest">
 <img src={img5}className="symbol"></img>
        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=AwrKAu6sEShlWQ0PLl27HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697153580/RO=10/RU=https%3a%2f%2fwww.facebook.com%2f/RK=2/RS=SDBmmDXH.xHrSG6t45zo617GcM8-" className="facebook">
<img src={img6}className="symbol"></img>
        </a>&nbsp;
        <a href="https://r.search.yahoo.com/_ylt=Awrx.1LdEihlXyAQQ7i7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1697153886/RO=10/RU=https%3a%2f%2fwww.roadtocode.org%2f/RK=2/RS=YBGqu6wRyL9Uyb7Hc9YLQSVMYpc-" className="dribbble">
<img src={img7}className="symbol"></img>
        </a>&nbsp;
     </ul>
    </div>
</div>
</div>
</div>
</div>
</div>

   






<Footer/>
</div>

  )
}

    
export default Team;