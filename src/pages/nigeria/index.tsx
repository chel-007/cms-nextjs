import React, { useContext } from 'react';
import alley from '../../../public/images/alley.jpg';
import grafitti from '../../../public/images/grafitti.jpg';
import kiosk from '../../../public/images/kiosk.jpg';
import topview from '../../../public/images/topview.jpg';
import topviewagn from '../../../public/images/topviewagn.jpg';
import Link from 'next/link';
import { useAuthentication } from "src/lib/hooks/use-authentication";
import { useLocalContent } from "src/lib/hooks/use-local-content";
import Image from 'next/image';


const Nigeria = () => {
    const { user, isAuthenticated, isLoading } = useAuthentication();

    const { country } = useLocalContent();



    return (
      <div className="nigeria-page">
        <div className="overlay"></div>
        <div className="image-grid">
        <div>
          <Image src={grafitti} alt="Image 1" className="grid-item" />
          <span>Scene 1</span>
        </div>
        <div>
          <Image src={topview} alt="Image 2" className="grid-item" />
          <span>Scene 2</span>
        </div>
        <div>
          <Image src={alley} alt="Image 3" className="grid-item" />
          <span>Scene 3</span>
        </div>
        <div>
          <Image src={kiosk} alt="Image 4" className="grid-item" />
          <span>Scene 4</span>
        </div>
        <div >
          <Image src={topviewagn} alt="Image 5" className="grid-item" />
          <span>Scene 5</span>
        </div>
        <div>
          <Image src={topviewagn} alt="Image 6" className="grid-item" />
          <span>Scene 6</span>
        </div>
        </div>
        <div className="movie-info">
          <h2>Call Me Super - Interactive Film</h2>
          <p>Release: Would be released in Chapters</p>
          <p>Built by: Chel007 & TBA Dev</p>
          <p>Starring: Five Superhero Teenagers</p>
          <p>Devices: Web browser on Launch</p>
          <div className="button-container">
          <Link className="button" href={`/${user?.country}/scene/1`}>Read Scene 1</Link>
          <Link className="button" href={`/${user?.country}/scene/2`}>Read Scene 2</Link>
          <Link className="button" href={`/${user?.country}/scene/3`}>Read Scene 3</Link>
          </div>
        </div>
  
        <div style={{height: '100px'}}></div>
      </div>
    );
  };
  
  export default Nigeria;