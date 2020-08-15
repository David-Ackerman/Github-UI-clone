import React from 'react';

import Profiledata from '../../Components/ProfileData';
import RepoCard from '../../Components/RepoCard';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';


const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <Profiledata
            username={'davidackerman'}
            name={'David-Ackerman'}
            avatarUrl={'https://github.com/David-Ackerman.png'}
            followers={239}
            following={40}
            company={undefined}
            location={'São Paulo, Brazil'}
            email={'david_pereira-16@hotmail.com'}
            blog={'linkedin/in/david-santos-28125a186'}

          />
        </LeftSide>
        <RightSide>
          <Repos >
            <h2>Random Repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'daviackerman'}
                  reponame={'NLW-proffy'}
                  description={'Nlw proffy repositorie'}
                  language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={4}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;