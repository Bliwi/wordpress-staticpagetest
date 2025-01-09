import { useRef } from "react"
export default function FbHero() {
    
      const tos = useRef(null);
      const tosbasicinfo = useRef(null);
      const tosqueue = useRef(null);
      const tosstandardprocedure = useRef(null);
      const toscomplexcharacters = useRef(null);
      const toscommercial = useRef(null);
        const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
          if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
          }
        };
  return (
    <div>
        <div ref={tos}></div>
        
        <div id="container4" className="container">
          <div className="flex">
            <div id="sidebarTOS" style={{ flex: 0.5, background: 'none' }}>
              <a className="headerSidebarTOS" onClick={() => handleScroll(tosbasicinfo)}>TOS</a>
              <a onClick={() => handleScroll(tosbasicinfo)}>Basic Information</a>
              <a onClick={() => handleScroll(tosqueue)}>Queue</a>
              <a onClick={() => handleScroll(tosstandardprocedure)}>Standard procedure</a>
              <a onClick={() => handleScroll(toscomplexcharacters)}>Complex characters</a>
              <a onClick={() => handleScroll(toscommercial)}>Commercial</a>
            </div>
            <div id="innerTOS">
              <h2 ref={tosbasicinfo}>Basic information</h2>
              <p>You must be 18 years or older to commission.<br/>
                
                Extra characters are an additional 100% per character.<br/>
                
                Refunds are not possible after the first sketch.<br/>
                
                The Payment is done fully upfront.<br/>
                
                You have to send a down payment to be added to the queue.<br/>
                
                Deadlines should be stated before the payment, and will be charged more.<br/>
                
                Delivery times varies depending on the commission, ask before payment.<br/>
                
                Complex characters or scenes might be charged more. <a>Click here for more info.</a><br/>
                
                Artwork will be created using image references,
                
                requests based on descriptions will cost more.<br/>
                
                Payments done through paypal have a 10% fee due to taxes.</p><br/>
              <h2 ref={tosqueue}>Queue</h2>
              <p>I thank you for your support and for your patience when commissioning.<br/>

                I have created a queue system to manage commissions.<br/>

                To be added to the queue I require a down payment.<br/>

                You can commission multiple artworks to secure more than one slot.<br/>
                
                <a>You can view the queue in this page.</a>
              </p><br/>
              <h2 ref={tosstandardprocedure}>Standard procedure</h2>
              <p>
              1st. You will receive a first sketch for revision, up to 2 major changes on this stage.<br/>
            Additional changes will be charged.<br/>
            2rd. A version with base colours for revision.<br/>
            3th is the rendering/shading process, this might take longer than the other steps due to its complexity.<br/>
            At the end you will receive a high res version of the artwork for personal use, please read <a>Commercial</a> for more info.<br/>
            I will be giving you updates throughout the process and update you in case something happens to my health impeding me of completing the illustration.<br/>
            You will be applicable for a refund in this situation.
            </p><br/>
            <h2 ref={toscomplexcharacters}>Complex characters</h2>
            <p>Complex characters are considered but not limited as follows:<br/>
            Extra limbs, wings, centaurions...<br/> 
              This also includes characters with complex designs or clothes.<br/>
            Armatures, complex fur patterns...I, as the artist will clarify if I consider your character complex, in some cases I will give you the option to continue without extra charges, but I will simplify your character's design.
            </p><br/>
            <h2 ref={toscommercial}>Commercial</h2>
            <p>Basic commissions do not grant you the commercial licence of the illustration.<br/>
            What is considered commercial use:Content creators(Streamers, Youtubers, tiktokers, ect...),<br/>
            With audiences greater than 2500 followers.<br/>Any form of merchandise.<br/>
            Video game assets, icons, textures, characters.<br/>
            Books, novels, webcomics covers or pages.<br/>
            NFT's, crypto.<br/>
            Advertisement.<br/>
            Image generation with Artificial inteligence.<br/>
            Please clarify if you plan using your commissions for commercial use.<br/>
            You can also contact me after the commission if you need the commercial license.<br/>
            You are allowed to make personal use of the the artwork you commission, please use the provided watermarked version if you decide to post on your social medias.
            </p><br/>
            
          <h2>Thank you for reading my TOS.</h2>
          <p>I hope you find this information useful when commissioning me.<br/>
          Fell free to send me any additional questions you may have.</p>
          
            <div className="divider"/>
          <h2>Frequently asked questions</h2>
            <p>How log does it take to finish a commission?</p>
            <p>It depends on the complexity of the illustration, but it usually takes 1-2 weeks.</p>
            <p>Can I post my commissions on my social medias?</p>
            <p>Yes, you can post your commissions on your social medias, but please use the watermarked version.</p>
          </div>
          </div>
          <div className="footer">
            <h2>Footer here</h2>
          </div>
        </div>
    </div>
  );
}

/*tos section*/
#innerTOS {
	flex: 1;
	background: var(--gray1);
	border-radius: 3rem;
	align-items: center;
	overflow: scroll;
}

#innerTOS h2 {
	font-size: 2.5rem;
	margin: 1rem;
	padding-bottom: 2rem;
	text-align: center;
	padding: 0;
}

#innerTOS p {
	text-align: center;
	font-size: 1.3rem;
	margin: 1rem;
	line-height: 2rem;
}

#sidebarTOS {
	display: flex;
	flex-direction: column;
}

#sidebarTOS a {
	color: var(--dark);
	font-size: 1.2rem;
	margin: 0.2rem;
	padding-left: 1rem;
	cursor: pointer;
	font-weight: 100;
}

#sidebarTOS .headerSidebarTOS {
	padding-left: 0;
	font-size: 1.8rem;
	font-weight: 800;
}