import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  username = 'unknown',
  tag = 'unknown',
  location = 'unknown',
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats = 'unknown',
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" class={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>
          {stats === 'unknown' ? '??' : stats.followers}
        </span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>
          {stats === 'unknown' ? '??' : stats.views}
        </span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>
          {stats === 'unknown' ? '??' : stats.likes}
        </span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1 - Profil w sieci społecznościowej
// Należy utworzyć komponent <Profile>, przy pomocy którego można wyświetlać informację o użytkowniku sieci społecznościowej. Informacje o użytkowniku znajdują się w pliku user.json.
// Opis komponentu <Profile>
// Komponent powinien przyjmować kilka propsów z informacjami o użytkowniku:

// username — nazwa użytkownika
// tag — tag w sieci społecznościowej @
// location — miasto i państwo
// avatar — odnośnik do awataru
// stats — obiekt z informacjami o aktywności
// Komponent powinien tworzyć element DOM o następującej strukturze:

// <div class="profile">
//   <div class="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>

// Przykład wykorzystania
// import user from 'path/to/user.json;

// <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />
