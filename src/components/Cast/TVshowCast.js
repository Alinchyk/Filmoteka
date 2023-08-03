import { ListItem, List, Section, CastImg, CastInfo } from './Cast.styled';
import blankImage from '../../img/blank_profile.png';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const TVshowCast = ({ cast }) => {
  if (!cast) {
    return;
  }

  return (
    <Section>
      {cast.length > 0 ? (
        <List>
          {cast.map(({ id, profile_path, name, character }) => {
            const imageSRC = profile_path ? IMG_URL + profile_path : blankImage;
            return (
              <ListItem key={id}>
                <CastImg src={imageSRC} alt={name} />
                <CastInfo>
                  <p>
                    <span>{name}</span>
                  </p>
                  {character ? (
                    <p>
                      <b>Character:</b>
                      <span> {character}</span>
                    </p>
                  ) : (
                    <p>
                      <b>Character:</b>
                      <span> Unknown</span>
                    </p>
                  )}
                </CastInfo>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>There is no information about the cast of this TV show yet.</p>
      )}
    </Section>
  );
};

export default TVshowCast;
